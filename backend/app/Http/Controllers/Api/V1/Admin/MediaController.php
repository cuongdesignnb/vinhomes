<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\Medium;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    use ApiResponds;

    public function index(Request $request)
    {
        return $this->success(Medium::latest()->paginate(min((int) $request->input('limit', 20), 100)));
    }

    public function upload(Request $request)
    {
        $data = $request->validate([
            'file' => ['required', 'file', 'max:10240', 'mimes:jpg,jpeg,png,webp,pdf,doc,docx,xls,xlsx'],
            'alt_text' => ['nullable', 'string'],
            'caption' => ['nullable', 'string'],
            'folder' => ['nullable', 'in:projects,news,users,contracts,seo,general'],
        ]);

        $file = $data['file'];
        $folder = $data['folder'] ?? 'general';
        $path = $file->store($folder, 'public');

        $media = Medium::create([
            'file_name' => $file->getClientOriginalName(),
            'file_path' => '/storage/'.$path,
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'alt_text' => $data['alt_text'] ?? null,
            'caption' => $data['caption'] ?? null,
            'folder' => $folder,
            'uploaded_by' => $request->user()->id,
        ]);

        return $this->success($media, 'Upload thanh cong', [], 201);
    }

    public function update(Request $request, int $id)
    {
        $media = Medium::findOrFail($id);
        $media->update($request->validate(['alt_text' => ['nullable', 'string'], 'caption' => ['nullable', 'string'], 'folder' => ['nullable', 'string']]));

        return $this->success($media, 'Cap nhat media thanh cong');
    }

    public function destroy(int $id)
    {
        Medium::findOrFail($id)->delete();

        return $this->success(null, 'Xoa media thanh cong');
    }
}
