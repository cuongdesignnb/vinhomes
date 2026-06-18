<?php

namespace Database\Seeders;

use App\Models\Appointment;
use App\Models\Document;
use App\Models\Lead;
use App\Models\NewsCategory;
use App\Models\NewsPost;
use App\Models\PaymentSchedule;
use App\Models\Project;
use App\Models\ProjectProduct;
use App\Models\Role;
use App\Models\SeoMetadata;
use App\Models\Tag;
use App\Models\User;
use App\Models\UserNotification;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $roles = collect([
            ['name' => 'SUPER_ADMIN', 'label' => 'Super Admin'],
            ['name' => 'ADMIN', 'label' => 'Admin'],
            ['name' => 'SALE_MANAGER', 'label' => 'Quan ly sale'],
            ['name' => 'SALE', 'label' => 'Sale'],
            ['name' => 'SEO_EDITOR', 'label' => 'Bien tap SEO'],
            ['name' => 'CONTENT_EDITOR', 'label' => 'Bien tap noi dung'],
            ['name' => 'VIEWER', 'label' => 'Chi xem'],
            ['name' => 'USER', 'label' => 'Khach hang'],
        ])->map(fn ($role) => Role::updateOrCreate(['name' => $role['name']], $role));

        $admin = User::updateOrCreate(
            ['email' => 'admin@vinhomes.local'],
            ['name' => 'Vinhomes Admin', 'phone' => '0900000001', 'password' => 'password']
        );
        $admin->roles()->sync([$roles->firstWhere('name', 'SUPER_ADMIN')->id]);

        $sale = User::updateOrCreate(
            ['email' => 'sale@vinhomes.local'],
            ['name' => 'Vinhomes Sale', 'phone' => '0900000002', 'password' => 'password']
        );
        $sale->roles()->sync([$roles->firstWhere('name', 'SALE')->id]);

        $customers = collect(range(1, 5))->map(function ($index) use ($roles) {
            $user = User::updateOrCreate(
                ['email' => "khach{$index}@vinhomes.local"],
                [
                    'name' => "Khach hang {$index}",
                    'phone' => '091000000'.$index,
                    'avatar' => '/images/avatar-minh-tuan.jpg',
                    'member_level' => $index > 3 ? 'Diamond' : 'Gold',
                    'member_points' => 1200 * $index,
                    'password' => 'password',
                ]
            );
            $user->roles()->sync([$roles->firstWhere('name', 'USER')->id]);
            $user->profile()->updateOrCreate(['user_id' => $user->id], ['city' => 'Ha Noi', 'preferred_area' => 'Ha Noi']);

            return $user;
        });

        $projectNames = [
            'Vinhomes Ocean Park',
            'Vinhomes Smart City',
            'Vinhomes Grand Park',
            'Vinhomes Royal Island',
            'Vinhomes Green City',
            'Vinhomes Golden Avenue',
        ];

        $projects = collect($projectNames)->map(function ($name, $index) {
            $slug = Str::slug($name);

            return Project::updateOrCreate(
                ['slug' => $slug],
                [
                    'name' => $name,
                    'code' => 'VH'.str_pad((string) ($index + 1), 3, '0', STR_PAD_LEFT),
                    'location' => $index % 2 === 0 ? 'Ha Noi' : 'TP. Ho Chi Minh',
                    'area' => $index % 2 === 0 ? 'mien-bac' : 'mien-nam',
                    'address' => 'Trung tam do thi '.$name,
                    'status' => $index === 5 ? 'coming_soon' : 'selling',
                    'status_label' => $index === 5 ? 'Sap ra mat' : 'Dang mo ban',
                    'short_description' => 'Du an Vinhomes cao cap voi he sinh thai song dong bo.',
                    'description' => 'Quy hoach hien dai, tien ich tron ven, khong gian xanh va phap ly minh bach.',
                    'price_from' => 2500000000 + $index * 300000000,
                    'price_to' => 18000000000 + $index * 800000000,
                    'price_text' => 'Tu '.(2.5 + $index * 0.3).' ty',
                    'type_text' => 'Can ho, biet thu, shophouse',
                    'hero_image' => '/images/project-ocean-park.jpg',
                    'hero_image_alt' => $name,
                    'overview_image' => '/images/projects/detail/ocean-park-overview.jpg',
                    'overview_image_alt' => 'Tong quan '.$name,
                    'location_image' => '/images/projects/detail/ocean-park-location.jpg',
                    'location_image_alt' => 'Vi tri '.$name,
                    'masterplan_image' => '/images/projects/detail/ocean-park-masterplan.jpg',
                    'masterplan_image_alt' => 'Mat bang '.$name,
                    'typical_layout_image' => '/images/projects/detail/ocean-park-layout.jpg',
                    'typical_layout_alt' => 'Layout '.$name,
                    'property_types' => ['apartment', 'villa', 'shophouse'],
                    'amenities' => [
                        ['id' => 'pool', 'title' => 'Be boi', 'image' => '/images/amenity-pool.jpg'],
                        ['id' => 'park', 'title' => 'Cong vien', 'image' => '/images/amenity-park.jpg'],
                    ],
                    'facts' => [
                        ['id' => 'scale', 'label' => 'Quy mo', 'value' => '280 ha'],
                        ['id' => 'density', 'label' => 'Mat do xay dung', 'value' => '19%'],
                    ],
                    'highlights' => [
                        ['id' => 'ecosystem', 'title' => 'He sinh thai dong bo', 'description' => 'Song, hoc tap, lam viec va giai tri trong mot do thi.'],
                    ],
                    'connections' => [
                        ['id' => 'center', 'place' => 'Trung tam thanh pho', 'time' => '25 phut'],
                    ],
                    'floor_plans' => ['legend' => ['Can ho', 'Biet thu', 'Shophouse']],
                    'policies' => [
                        ['id' => 'payment', 'title' => 'Thanh toan', 'value' => 'Linh hoat', 'description' => 'Chia nhieu dot theo tien do.'],
                    ],
                    'investment_reasons' => [
                        ['id' => 'growth', 'title' => 'Tiem nang tang gia', 'value' => 'Cao', 'description' => 'Huong loi tu ha tang va quy hoach.'],
                    ],
                    'gallery' => [
                        ['id' => 'g1', 'src' => '/images/projects/detail/gallery-1.jpg', 'alt' => $name],
                        ['id' => 'g2', 'src' => '/images/projects/detail/gallery-2.jpg', 'alt' => $name],
                    ],
                    'faqs' => [
                        ['id' => 'faq1', 'question' => 'Du an da co phap ly chua?', 'answer' => 'Ho so phap ly duoc cap nhat theo tung phan khu.'],
                    ],
                    'is_featured' => $index < 4,
                    'is_published' => true,
                    'view_count' => 500 - $index * 40,
                ]
            );
        });

        $projects->each(function (Project $project) {
            collect(range(1, 5))->each(function ($index) use ($project) {
                ProjectProduct::updateOrCreate(
                    ['code' => strtoupper($project->code).'-SP'.$index],
                    [
                        'project_id' => $project->id,
                        'name' => $project->name.' - San pham '.$index,
                        'type' => ['apartment', 'villa', 'shophouse'][$index % 3],
                        'area' => 60 + $index * 25,
                        'bedrooms' => min($index + 1, 5),
                        'bathrooms' => min($index, 4),
                        'direction' => ['Dong', 'Tay', 'Nam', 'Bac'][$index % 4],
                        'floor' => (string) (5 + $index),
                        'block' => 'A'.$index,
                        'price' => 2500000000 + $index * 750000000,
                        'sale_price' => 2400000000 + $index * 700000000,
                        'status' => ['available', 'reserved', 'sold', 'available', 'hidden'][$index - 1],
                        'legal_status' => 'So hong lau dai',
                        'handover_status' => 'Ban giao tieu chuan',
                        'images' => ['/images/projects/detail/product-apartment.jpg'],
                        'description' => 'San pham phu hop nhu cau o that va dau tu.',
                    ]
                );
            });
        });

        $categories = collect(['market', 'project', 'policy', 'investment', 'lifestyle', 'legal'])->map(
            fn ($slug) => NewsCategory::updateOrCreate(['slug' => $slug], ['name' => Str::title($slug), 'label' => Str::title(str_replace('-', ' ', $slug))])
        );

        $tags = collect(['vinhomes', 'dau-tu', 'thi-truong', 'phap-ly', 'song-xanh'])->map(
            fn ($slug) => Tag::updateOrCreate(['slug' => $slug], ['name' => Str::title(str_replace('-', ' ', $slug))])
        );

        collect(range(1, 20))->each(function ($index) use ($admin, $categories, $tags) {
            $post = NewsPost::updateOrCreate(
                ['slug' => 'tin-tuc-vinhomes-'.$index],
                [
                    'news_category_id' => $categories[$index % $categories->count()]->id,
                    'author_id' => $admin->id,
                    'title' => 'Tin tuc Vinhomes '.$index,
                    'excerpt' => 'Cap nhat thi truong va chinh sach moi cho khach hang Vinhomes.',
                    'content' => '<p>Noi dung bai viet mau cho he thong CMS Vinhomes.</p>',
                    'thumbnail' => '/images/news/article-'.(($index % 9) + 1).'.jpg',
                    'thumbnail_alt' => 'Tin tuc Vinhomes '.$index,
                    'region' => $index % 2 === 0 ? 'mien-bac' : 'mien-nam',
                    'topic' => 'investment',
                    'status' => 'published',
                    'is_featured' => $index <= 3,
                    'is_popular' => $index <= 5,
                    'view_count' => 1000 - $index * 22,
                    'published_at' => now()->subDays($index),
                ]
            );
            $post->tags()->sync($tags->pluck('id')->take(3));
        });

        collect(range(1, 30))->each(fn ($index) => Lead::create([
            'project_id' => $projects[$index % $projects->count()]->id,
            'assigned_to' => $index % 2 === 0 ? $sale->id : null,
            'full_name' => 'Lead Vinhomes '.$index,
            'phone' => '098'.str_pad((string) $index, 7, '0', STR_PAD_LEFT),
            'email' => "lead{$index}@example.com",
            'area' => $index % 2 === 0 ? 'mien-bac' : 'mien-nam',
            'property_type' => ['apartment', 'villa', 'shophouse'][$index % 3],
            'source' => ['contact_form', 'project_form', 'appointment_form', 'hotline', 'facebook', 'zalo', 'google_ads', 'manual'][$index % 8],
            'status' => ['new', 'contacted', 'qualified', 'appointment_booked', 'negotiating', 'won', 'lost'][$index % 7],
            'message' => 'Khach hang can tu van du an phu hop.',
        ]));

        $customers->each(function (User $user, int $index) use ($projects, $admin) {
            $user->savedProjects()->sync($projects->take(2)->pluck('id'));
            Appointment::create(['user_id' => $user->id, 'project_id' => $projects[$index]->id, 'scheduled_at' => now()->addDays($index + 1)->setTime(9 + $index, 0), 'location' => $projects[$index]->name, 'type' => 'visit', 'status' => 'confirmed']);
            $document = Document::create(['title' => 'Hop dong dat coc mau '.$user->id, 'file_path' => '/storage/contracts/sample-contract.pdf', 'file_type' => 'PDF', 'file_size' => '1.2 MB', 'uploaded_by' => $admin->id]);
            $document->users()->syncWithoutDetaching($user->id);
            PaymentSchedule::create(['user_id' => $user->id, 'project_id' => $projects[$index]->id, 'title' => 'Dot thanh toan 1', 'amount' => 500000000, 'due_date' => now()->addMonth(), 'status' => 'pending']);
            UserNotification::create(['user_id' => $user->id, 'title' => 'Tai lieu moi', 'description' => 'Ban co tai lieu hop dong moi.', 'type' => 'document']);
        });

        collect([
            ['route' => '/', 'meta_title' => 'Vinhomes - Bat dong san cao cap', 'meta_description' => 'Thong tin du an Vinhomes cao cap.', 'robots' => 'index,follow'],
            ['route' => '/du-an', 'meta_title' => 'Du an Vinhomes', 'meta_description' => 'Danh sach du an Vinhomes.', 'robots' => 'index,follow'],
            ['route' => '/tin-tuc', 'meta_title' => 'Tin tuc Vinhomes', 'meta_description' => 'Tin tuc thi truong va dau tu.', 'robots' => 'index,follow'],
            ['route' => '/lien-he', 'meta_title' => 'Lien he Vinhomes', 'meta_description' => 'Dang ky tu van du an Vinhomes.', 'robots' => 'index,follow'],
        ])->each(fn ($seo) => SeoMetadata::updateOrCreate(['route' => $seo['route']], $seo));
    }
}
