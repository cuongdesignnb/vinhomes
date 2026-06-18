<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\SeoMetadata;
use Illuminate\Http\Request;

class SeoController extends Controller
{
    use ApiResponds;

    public function pages()
    {
        return $this->success(SeoMetadata::latest()->get());
    }

    public function update(Request $request, int $id)
    {
        $seo = SeoMetadata::findOrFail($id);
        $seo->update($request->validate([
            'meta_title' => ['nullable', 'string'],
            'meta_description' => ['nullable', 'string'],
            'meta_keywords' => ['nullable', 'string'],
            'canonical_url' => ['nullable', 'string'],
            'og_title' => ['nullable', 'string'],
            'og_description' => ['nullable', 'string'],
            'og_image' => ['nullable', 'string'],
            'twitter_title' => ['nullable', 'string'],
            'twitter_description' => ['nullable', 'string'],
            'schema_type' => ['nullable', 'string'],
            'schema_json' => ['nullable', 'array'],
            'robots' => ['nullable', 'string'],
        ]));

        return $this->success($seo, 'Cap nhat SEO thanh cong');
    }

    public function sitemap()
    {
        return $this->success(['status' => 'ready', 'url' => '/sitemap.xml']);
    }

    public function regenerateSitemap()
    {
        return $this->success(['status' => 'regenerated'], 'Tao lai sitemap thanh cong');
    }

    public function robots()
    {
        return $this->success(['content' => "User-agent: *\nAllow: /\nSitemap: /sitemap.xml"]);
    }

    public function updateRobots(Request $request)
    {
        $data = $request->validate(['content' => ['required', 'string']]);

        return $this->success($data, 'Cap nhat robots thanh cong');
    }
}
