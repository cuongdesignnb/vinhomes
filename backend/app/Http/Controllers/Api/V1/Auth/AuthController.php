<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    use ApiResponds;

    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users,email'],
            'phone' => ['nullable', 'regex:/^(0|\\+84)[0-9]{9,10}$/', 'unique:users,phone'],
            'password' => ['required', 'confirmed', Password::min(8)],
        ]);

        $user = User::create($data);
        $userRole = Role::firstOrCreate(['name' => 'USER'], ['label' => 'Khach hang']);
        $user->roles()->syncWithoutDetaching($userRole->id);

        return $this->success([
            'user' => $this->userPayload($user->load('roles')),
            'token' => $user->createToken('web')->plainTextToken,
        ], 'Dang ky thanh cong', [], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $user = User::where('email', $credentials['email'])->with('roles')->first();

        if (! $user || ! Hash::check($credentials['password'], $user->password)) {
            return $this->error('Thong tin dang nhap khong dung', 422);
        }

        $user->forceFill(['last_login_at' => now()])->save();

        return $this->success([
            'user' => $this->userPayload($user->fresh('roles')),
            'token' => $user->createToken($request->input('device_name', 'web'))->plainTextToken,
        ], 'Dang nhap thanh cong');
    }

    public function me(Request $request)
    {
        return $this->success($this->userPayload($request->user()->load('roles', 'profile')));
    }

    public function profile(Request $request)
    {
        $data = $request->validate([
            'name' => ['sometimes', 'string', 'max:255'],
            'phone' => ['nullable', 'regex:/^(0|\\+84)[0-9]{9,10}$/', 'unique:users,phone,'.$request->user()->id],
            'avatar' => ['nullable', 'string'],
            'address' => ['nullable', 'string'],
            'city' => ['nullable', 'string'],
            'preferred_area' => ['nullable', 'string'],
            'preferred_property_type' => ['nullable', 'string'],
        ]);

        $request->user()->update(collect($data)->only(['name', 'phone', 'avatar'])->all());
        $request->user()->profile()->updateOrCreate(
            ['user_id' => $request->user()->id],
            collect($data)->only(['address', 'city', 'preferred_area', 'preferred_property_type'])->all()
        );

        return $this->success($this->userPayload($request->user()->fresh('roles', 'profile')), 'Cap nhat ho so thanh cong');
    }

    public function changePassword(Request $request)
    {
        $data = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'confirmed', Password::min(8)],
        ]);

        $request->user()->update(['password' => $data['password']]);

        return $this->success(null, 'Doi mat khau thanh cong');
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()?->delete();

        return $this->success(null, 'Dang xuat thanh cong');
    }

    private function userPayload(User $user): array
    {
        return [
            'id' => (string) $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'phone' => $user->phone,
            'avatar' => $user->avatar,
            'roles' => $user->roles->pluck('name')->values(),
            'profile' => $user->profile,
            'lastLoginAt' => optional($user->last_login_at)->toISOString(),
        ];
    }
}
