<?php

use App\Http\Controllers\Api\V1\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Api\V1\Admin\LeadController as AdminLeadController;
use App\Http\Controllers\Api\V1\Admin\MediaController;
use App\Http\Controllers\Api\V1\Admin\NewsCategoryController as AdminNewsCategoryController;
use App\Http\Controllers\Api\V1\Admin\NewsController as AdminNewsController;
use App\Http\Controllers\Api\V1\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Api\V1\Admin\ProjectController as AdminProjectController;
use App\Http\Controllers\Api\V1\Admin\ReportController;
use App\Http\Controllers\Api\V1\Admin\SeoController;
use App\Http\Controllers\Api\V1\Auth\AuthController;
use App\Http\Controllers\Api\V1\Public\ContactController;
use App\Http\Controllers\Api\V1\Public\HomeController;
use App\Http\Controllers\Api\V1\Public\NewsController;
use App\Http\Controllers\Api\V1\Public\ProjectController;
use App\Http\Controllers\Api\V1\User\DashboardController as UserDashboardController;
use App\Http\Controllers\Api\V1\User\ResourceController as UserResourceController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('register', [AuthController::class, 'register']);
        Route::post('forgot-password', fn () => response()->json(['success' => true, 'message' => 'Neu email ton tai, he thong se gui huong dan dat lai mat khau', 'data' => null]));
        Route::post('reset-password', fn () => response()->json(['success' => true, 'message' => 'Endpoint san sang tich hop email reset password', 'data' => null]));

        Route::middleware('auth:sanctum')->group(function () {
            Route::post('logout', [AuthController::class, 'logout']);
            Route::get('me', [AuthController::class, 'me']);
            Route::put('profile', [AuthController::class, 'profile']);
            Route::put('change-password', [AuthController::class, 'changePassword']);
        });
    });

    Route::prefix('public')->group(function () {
        Route::get('home', HomeController::class);
        Route::get('projects', [ProjectController::class, 'index']);
        Route::get('projects/{slug}', [ProjectController::class, 'show']);
        Route::get('project-filters', [ProjectController::class, 'filters']);
        Route::get('news', [NewsController::class, 'index']);
        Route::get('news/{slug}', [NewsController::class, 'show']);
        Route::get('news-categories', [NewsController::class, 'categories']);
        Route::get('tags', [NewsController::class, 'tags']);
        Route::post('leads', [ContactController::class, 'lead'])->middleware('throttle:10,1');
        Route::post('contact-requests', [ContactController::class, 'contactRequest'])->middleware('throttle:10,1');
        Route::post('appointments', [ContactController::class, 'appointment'])->middleware('throttle:10,1');
    });

    // Compatibility endpoints for the existing Next.js adapters when
    // NEXT_PUBLIC_API_BASE_URL points directly at /api/v1.
    Route::get('home', HomeController::class);
    Route::get('contact', [ContactController::class, 'show']);
    Route::get('projects', [ProjectController::class, 'index']);
    Route::get('projects/slugs', [ProjectController::class, 'slugs']);
    Route::get('projects/{slug}', [ProjectController::class, 'show']);
    Route::get('project-filters', [ProjectController::class, 'filters']);
    Route::get('news', [NewsController::class, 'index']);
    Route::get('news/slugs', [NewsController::class, 'slugs']);
    Route::get('news/{slug}', [NewsController::class, 'show']);
    Route::get('news/{slug}/related', [NewsController::class, 'related']);
    Route::get('news-categories', [NewsController::class, 'categories']);
    Route::get('tags', [NewsController::class, 'tags']);
    Route::post('leads', [ContactController::class, 'lead'])->middleware('throttle:10,1');
    Route::post('contact-requests', [ContactController::class, 'contactRequest'])->middleware('throttle:10,1');
    Route::post('appointments', [ContactController::class, 'appointment'])->middleware('throttle:10,1');

    Route::middleware(['auth:sanctum', 'role:USER,SUPER_ADMIN,ADMIN'])->prefix('user')->group(function () {
        Route::get('dashboard', [UserDashboardController::class, 'dashboard']);
        Route::get('profile', [UserResourceController::class, 'profile']);
        Route::put('profile', [UserResourceController::class, 'updateProfile']);
        Route::get('saved-projects', [UserDashboardController::class, 'dashboard']);
        Route::post('saved-projects', [UserDashboardController::class, 'saveProject']);
        Route::delete('saved-projects/{project_id}', [UserDashboardController::class, 'removeSavedProject']);
        Route::get('appointments', [UserResourceController::class, 'appointments']);
        Route::post('appointments', [UserResourceController::class, 'createAppointment']);
        Route::put('appointments/{id}/cancel', [UserResourceController::class, 'cancelAppointment']);
        Route::get('consultation-requests', [UserResourceController::class, 'consultationRequests']);
        Route::post('consultation-requests', [UserResourceController::class, 'createConsultationRequest']);
        Route::get('documents', [UserResourceController::class, 'documents']);
        Route::get('documents/{id}/download', [UserResourceController::class, 'downloadDocument']);
        Route::get('payments', [UserResourceController::class, 'payments']);
        Route::get('payment-schedules', [UserResourceController::class, 'paymentSchedules']);
        Route::get('notifications', [UserResourceController::class, 'notifications']);
        Route::put('notifications/{id}/read', [UserResourceController::class, 'readNotification']);
        Route::put('notifications/read-all', [UserResourceController::class, 'readAllNotifications']);
        Route::get('support-tickets', [UserResourceController::class, 'supportTickets']);
        Route::post('support-tickets', [UserDashboardController::class, 'supportTicket']);
    });

    Route::middleware(['auth:sanctum', 'role:SUPER_ADMIN,ADMIN,SALE_MANAGER,SALE,SEO_EDITOR,CONTENT_EDITOR,VIEWER'])->prefix('admin')->group(function () {
        Route::get('dashboard', AdminDashboardController::class);

        Route::apiResource('projects', AdminProjectController::class);
        Route::put('projects/{id}/publish', [AdminProjectController::class, 'publish']);
        Route::put('projects/{id}/feature', [AdminProjectController::class, 'feature']);
        Route::apiResource('property-products', AdminProductController::class);
        Route::apiResource('leads', AdminLeadController::class);
        Route::put('leads/{id}/assign', [AdminLeadController::class, 'assign']);
        Route::put('leads/{id}/status', [AdminLeadController::class, 'status']);
        Route::post('leads/{id}/notes', [AdminLeadController::class, 'note']);
        Route::post('leads/{id}/activities', [AdminLeadController::class, 'activity']);
        Route::apiResource('news', AdminNewsController::class);
        Route::put('news/{id}/publish', [AdminNewsController::class, 'publish']);
        Route::apiResource('news-categories', AdminNewsCategoryController::class)->except(['show']);

        Route::get('seo/pages', [SeoController::class, 'pages']);
        Route::put('seo/pages/{id}', [SeoController::class, 'update']);
        Route::get('seo/sitemap', [SeoController::class, 'sitemap']);
        Route::post('seo/sitemap/regenerate', [SeoController::class, 'regenerateSitemap']);
        Route::get('seo/robots', [SeoController::class, 'robots']);
        Route::put('seo/robots', [SeoController::class, 'updateRobots']);

        Route::get('media', [MediaController::class, 'index']);
        Route::post('media/upload', [MediaController::class, 'upload']);
        Route::put('media/{id}', [MediaController::class, 'update']);
        Route::delete('media/{id}', [MediaController::class, 'destroy']);

        Route::get('reports/overview', [ReportController::class, 'overview']);
        Route::get('reports/leads', [ReportController::class, 'leads']);
        Route::get('reports/sales', [ReportController::class, 'sales']);
        Route::get('reports/projects', [ReportController::class, 'projects']);
        Route::get('reports/seo', [ReportController::class, 'seo']);
    });
});
