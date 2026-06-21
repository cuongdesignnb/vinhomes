# AGENT TASK - PHASE ADMIN 02: HOÀN THIỆN MODULE QUẢN LÝ SẢN PHẨM BĐS VINHOMES

## 1. Mục tiêu

Hoàn thiện module **Quản lý sản phẩm BĐS** trong Admin Dashboard để client có thể quản lý toàn bộ sản phẩm thuộc từng dự án như căn hộ, biệt thự, shophouse, liền kề, duplex, penthouse, mã căn, block, tầng, diện tích, giá bán, trạng thái hàng, hình ảnh, tài liệu, SEO và dữ liệu hiển thị ngoài Public/User Dashboard.

Module này khác với module **Quản lý dự án**:

- Dự án là landing page/tổng quan dự án.
- Sản phẩm BĐS là từng loại sản phẩm hoặc từng mã căn cụ thể trong dự án.

Mục tiêu cuối cùng:

- Admin quản lý được kho sản phẩm thật.
- Sale xem được trạng thái hàng và tư vấn khách.
- User xem được sản phẩm quan tâm nếu được public.
- Public Website hiển thị sản phẩm nổi bật trong chi tiết dự án.
- Có thể mở rộng về sau thành CRM bán hàng/phân phối giỏ hàng.

---

## 2. Route Admin cần làm

Frontend Admin:

- `/admin/san-pham`
- `/admin/san-pham/them-moi`
- `/admin/san-pham/[id]`
- `/admin/san-pham/[id]/chinh-sua`
- `/admin/san-pham/[id]/media`
- `/admin/san-pham/[id]/seo`

Có thể làm dạng tabs trong form edit:

- `/admin/san-pham/[id]/chinh-sua?tab=basic`
- `/admin/san-pham/[id]/chinh-sua?tab=pricing`
- `/admin/san-pham/[id]/chinh-sua?tab=layout`
- `/admin/san-pham/[id]/chinh-sua?tab=media`
- `/admin/san-pham/[id]/chinh-sua?tab=legal`
- `/admin/san-pham/[id]/chinh-sua?tab=seo`
- `/admin/san-pham/[id]/chinh-sua?tab=publish`

Ưu tiên tabs để quản lý dễ hơn.

---

## 3. API Backend cần có

Namespace:

- `/api/v1/admin/property-products`

API bắt buộc:

- `GET /api/v1/admin/property-products`
- `POST /api/v1/admin/property-products`
- `GET /api/v1/admin/property-products/{id}`
- `PUT /api/v1/admin/property-products/{id}`
- `DELETE /api/v1/admin/property-products/{id}`
- `PUT /api/v1/admin/property-products/{id}/status`
- `PUT /api/v1/admin/property-products/{id}/publish`
- `PUT /api/v1/admin/property-products/{id}/feature`
- `POST /api/v1/admin/property-products/{id}/gallery`
- `DELETE /api/v1/admin/property-products/{id}/gallery/{media_id}`
- `PUT /api/v1/admin/property-products/{id}/seo`

API phụ trợ:

- `GET /api/v1/admin/projects/options`
- `GET /api/v1/admin/property-products/filters`
- `POST /api/v1/admin/property-products/import`
- `GET /api/v1/admin/property-products/export`

Public API cần đồng bộ:

- `GET /api/v1/public/projects/{slug}` phải trả sản phẩm thuộc dự án.
- `GET /api/v1/public/property-products`
- `GET /api/v1/public/property-products/{slug}` nếu có trang chi tiết sản phẩm riêng.

---

## 4. Trang danh sách `/admin/san-pham`

Thay placeholder hiện tại bằng trang quản lý thật.

### 4.1 Header

Có:

- Tiêu đề: `Quản lý sản phẩm BĐS`
- Mô tả: `Quản lý giỏ hàng, mã căn, giá bán, trạng thái và hình ảnh sản phẩm`
- Nút chính: `Thêm sản phẩm`
- Nút phụ: `Import Excel`, `Export Excel`, `Làm mới`

### 4.2 KPI cards

Hiển thị:

- Tổng sản phẩm
- Đang mở bán
- Đã giữ chỗ
- Đã bán
- Sản phẩm nổi bật
- Sản phẩm đang ẩn

### 4.3 Toolbar

Có:

- Search theo tên, mã căn, mã sản phẩm, block, tầng
- Filter dự án
- Filter loại hình
- Filter trạng thái
- Filter khoảng giá
- Filter diện tích
- Filter số phòng ngủ
- Filter hướng
- Filter pháp lý
- Sort: mới nhất, giá tăng, giá giảm, diện tích tăng, diện tích giảm, lượt xem
- Reset filter

URL phải đồng bộ query params:

`/admin/san-pham?project_id=1&type=apartment&status=available&bedrooms=2&page=2`

### 4.4 Table desktop

Cột bắt buộc:

- Ảnh
- Mã sản phẩm/mã căn
- Tên sản phẩm
- Dự án
- Loại hình
- Block/Tòa
- Tầng
- Diện tích
- Phòng ngủ
- Hướng
- Giá bán
- Trạng thái
- Nổi bật
- Xuất bản
- Ngày cập nhật
- Hành động

### 4.5 Action menu

Mỗi sản phẩm có:

- Xem public
- Xem chi tiết admin
- Chỉnh sửa
- Quản lý ảnh
- Quản lý SEO
- Đổi trạng thái
- Publish/unpublish
- Feature/unfeature
- Xóa mềm

Xóa phải có confirm dialog.

### 4.6 State bắt buộc

- Loading skeleton
- Empty state
- Error state có thử lại
- Pagination
- Toast success/error
- Mobile card list nếu table quá rộng

---

## 5. Form thêm/sửa sản phẩm

Form chia tabs:

1. Thông tin cơ bản
2. Thông số căn/sản phẩm
3. Giá bán & chính sách
4. Mặt bằng & tài liệu
5. Media/Gallery
6. Pháp lý & bàn giao
7. SEO
8. Xuất bản

---

# TAB 1 - THÔNG TIN CƠ BẢN

## Fields

- Dự án cha
- Tên sản phẩm
- Slug
- Mã sản phẩm
- Mã căn nếu có
- Loại hình
- Mô tả ngắn
- Mô tả chi tiết bằng editor
- Ảnh đại diện từ Media Library
- Trạng thái hàng
- Nổi bật
- Xuất bản

## Loại hình sản phẩm

Dùng enum:

- `apartment` - Căn hộ
- `villa` - Biệt thự
- `shophouse` - Shophouse
- `townhouse` - Liền kề
- `duplex` - Duplex
- `penthouse` - Penthouse
- `studio` - Studio
- `office` - Văn phòng
- `commercial` - Thương mại
- `other` - Khác

## UX

- Bắt buộc chọn dự án cha.
- Slug tự sinh từ tên nhưng cho sửa.
- Check slug unique.
- Mã sản phẩm/mã căn phải unique theo dự án.
- Ảnh đại diện chọn từ Media Library.
- Có preview ảnh.

---

# TAB 2 - THÔNG SỐ CĂN/SẢN PHẨM

## Fields

- Block/Tòa
- Phân khu
- Tầng
- Số căn
- Diện tích thông thủy
- Diện tích tim tường
- Diện tích đất nếu là thấp tầng
- Diện tích xây dựng
- Số phòng ngủ
- Số phòng vệ sinh
- Hướng ban công
- Hướng cửa
- View
- Nội thất
- Mật độ/ghi chú sản phẩm

## View gợi ý

- Công viên
- Sông/hồ
- Nội khu
- Thành phố
- Biển
- Vườn
- Bể bơi

## Nội thất

- Bàn giao thô
- Bàn giao cơ bản
- Full nội thất
- Theo tiêu chuẩn chủ đầu tư

---

# TAB 3 - GIÁ BÁN & CHÍNH SÁCH

## Fields

- Giá niêm yết
- Giá bán hiện tại
- Giá khuyến mãi
- Đơn vị giá
- Giá theo m2
- Phí booking
- Tiền cọc
- Chiết khấu
- Chính sách vay
- Chính sách thanh toán
- Ghi chú giá
- Thời gian áp dụng giá

## Đơn vị giá

- VND
- VND/m2
- Tỷ
- Triệu/m2
- Thỏa thuận

## Rule

- Giá phải là number nếu nhập dạng số.
- Cho phép text hiển thị giá: `Từ 3,2 tỷ`, `Liên hệ`, `Theo chính sách từng thời điểm`.
- Public nên ưu tiên hiển thị `price_text` nếu có.
- Admin vẫn lưu số để sort/filter.

---

# TAB 4 - MẶT BẰNG & TÀI LIỆU

## Mục tiêu

Gắn mặt bằng và tài liệu bán hàng cho từng sản phẩm.

## Fields

- Ảnh mặt bằng từ Media Library
- File PDF mặt bằng
- Brochure PDF
- Bảng giá PDF nếu có quyền
- Hợp đồng mẫu nếu có quyền
- Tài liệu pháp lý liên quan

## Rule

- Public chỉ hiển thị tài liệu được đánh dấu public.
- User đã đăng nhập có thể xem tài liệu được phép.
- Admin có thể upload/chọn từ Media Library.
- Sale có thể xem tài liệu nội bộ nếu được cấp quyền.

---

# TAB 5 - MEDIA/GALLERY

## Media cần hỗ trợ

- Ảnh đại diện
- Gallery ảnh thực tế
- Gallery phối cảnh
- Ảnh mặt bằng
- Ảnh view
- Ảnh nội thất
- Video URL nếu có

## Media Library Picker

Dùng lại component từ module dự án:

- `MediaLibraryPicker`
- Chọn 1 ảnh
- Chọn nhiều ảnh
- Upload mới
- Search/filter folder
- Sửa alt/caption
- Preview

## Folder gợi ý

- `products`
- `products/gallery`
- `products/floor-plans`
- `products/documents`
- `projects`

## Rule

- Gỡ ảnh khỏi sản phẩm không xóa file gốc.
- Ảnh phải có alt tiếng Việt.
- Gallery sắp xếp được thứ tự.

---

# TAB 6 - PHÁP LÝ & BÀN GIAO

## Fields

- Tình trạng pháp lý
- Thời gian bàn giao
- Tiêu chuẩn bàn giao
- Sổ hồng/sổ đỏ
- Thời hạn sở hữu
- Tình trạng xây dựng
- Ghi chú pháp lý

## Pháp lý gợi ý

- Sổ hồng lâu dài
- Sở hữu lâu dài
- Sở hữu 50 năm
- Đang cập nhật
- Theo quy định chủ đầu tư

## Tình trạng bàn giao

- Đã bàn giao
- Sắp bàn giao
- Đang xây dựng
- Theo tiến độ dự án
- Chưa công bố

---

# TAB 7 - SEO

## Fields

- Meta title
- Meta description
- Meta keywords
- Canonical URL
- OG title
- OG description
- OG image từ Media Library
- Twitter title
- Twitter description
- Twitter image
- Robots
- Schema JSON override nếu cần

## UX

- Preview Google snippet
- Preview social card
- Cảnh báo title/description quá dài
- Fallback tự động từ tên sản phẩm, dự án, loại hình, giá

## Public

Nếu có trang chi tiết sản phẩm riêng, metadata phải lấy từ API.

---

# TAB 8 - XUẤT BẢN

## Fields

- Trạng thái hàng
- Bật/tắt xuất bản
- Bật/tắt nổi bật
- Ngày xuất bản
- Người tạo
- Người cập nhật
- Lượt xem

## Trạng thái hàng

Enum:

- `available` - Còn hàng
- `reserved` - Đã giữ chỗ
- `booking` - Đang booking
- `sold` - Đã bán
- `locked` - Khóa giỏ
- `hidden` - Ẩn

## Rule

- `is_published = false` thì public không hiển thị.
- `status = hidden` thì public không hiển thị.
- `status = sold` vẫn có thể hiển thị nếu admin muốn show là đã bán.
- `locked` chỉ admin/sale có quyền xem.

---

## 6. Database cần kiểm tra/bổ sung

Nếu migration hiện tại chưa đủ, bổ sung bảng/cột sau.

## 6.1 Bảng `project_products` hoặc `property_products`

Cần thống nhất tên bảng. Nếu hệ thống đang có `project_products`, tiếp tục dùng để tránh vỡ code. Nếu chưa có, dùng `property_products`.

Fields tối thiểu:

- `id`
- `project_id`
- `name`
- `slug`
- `code`
- `unit_code`
- `type`
- `short_description`
- `description`
- `block`
- `subdivision`
- `floor`
- `unit_number`
- `net_area`
- `gross_area`
- `land_area`
- `construction_area`
- `bedrooms`
- `bathrooms`
- `balcony_direction`
- `door_direction`
- `view_type`
- `furniture_status`
- `listed_price`
- `sale_price`
- `promotion_price`
- `price_per_m2`
- `price_text`
- `booking_amount`
- `deposit_amount`
- `discount_text`
- `payment_policy`
- `loan_policy`
- `legal_status`
- `handover_status`
- `handover_time`
- `ownership_term`
- `construction_status`
- `thumbnail_id`
- `floor_plan_media_id`
- `brochure_media_id`
- `status`
- `is_featured`
- `is_published`
- `published_at`
- `view_count`
- `created_by`
- `updated_by`
- `deleted_at`
- `created_at`
- `updated_at`

## 6.2 Bảng `property_product_media`

Fields:

- `id`
- `product_id`
- `media_id`
- `type`
- `title`
- `description`
- `sort_order`
- `created_at`
- `updated_at`

Type:

- `thumbnail`
- `gallery`
- `render`
- `real_image`
- `floor_plan`
- `document`
- `seo`

## 6.3 Bảng `property_product_documents`

Nếu muốn tách tài liệu riêng:

- `id`
- `product_id`
- `media_id`
- `title`
- `document_type`
- `visibility`
- `sort_order`
- `created_at`
- `updated_at`

Visibility:

- `public`
- `user`
- `sale`
- `admin`

## 6.4 SEO metadata

Có thể dùng bảng `seo_metadata` dạng polymorphic:

- `entity_type = property_product`
- `entity_id = product_id`

Không tạo bảng SEO riêng nếu đã có `seo_metadata` dùng chung.

---

## 7. Response API Admin Product Detail

`GET /api/v1/admin/property-products/{id}` cần trả đủ:

- Thông tin cơ bản
- Dự án cha
- Thông số sản phẩm
- Giá bán
- Chính sách
- Pháp lý
- Mặt bằng
- Gallery
- Tài liệu
- SEO
- Trạng thái publish

Frontend không phải tự ghép quá nhiều logic.

---

## 8. Response API Public

Trong chi tiết dự án, products section cần dữ liệu:

- `id`
- `name`
- `slug`
- `code`
- `type`
- `area`
- `bedrooms`
- `bathrooms`
- `direction`
- `view_type`
- `price_text`
- `status`
- `thumbnail`
- `is_featured`

Nếu có trang chi tiết sản phẩm riêng:

`GET /api/v1/public/property-products/{slug}` trả thêm:

- gallery
- floor plan
- documents public
- legal info
- handover info
- seo
- json_ld

---

## 9. Validation

## Create/update product

Backend validate:

- `project_id` bắt buộc, exists projects
- `name` bắt buộc, tối đa 255 ký tự
- `slug` bắt buộc, unique
- `code` bắt buộc, unique theo project
- `type` thuộc enum hợp lệ
- `status` thuộc enum hợp lệ
- `listed_price`, `sale_price`, `promotion_price` nullable numeric
- `net_area`, `gross_area`, `land_area` nullable numeric
- `bedrooms`, `bathrooms` nullable integer
- `thumbnail_id` nullable exists media
- `is_featured` boolean
- `is_published` boolean

Rule giá:

- Nếu `promotion_price` có thì không được lớn hơn `sale_price` nếu `sale_price` có.
- Nếu `price_text = Liên hệ` thì có thể bỏ trống giá số.

---

## 10. Phân quyền

Role được thao tác:

- `SUPER_ADMIN`: toàn quyền
- `ADMIN`: toàn quyền
- `SALE_MANAGER`: xem, export, đổi trạng thái nếu được cấp quyền
- `SALE`: xem sản phẩm, xem tài liệu sale, không sửa giá nếu không có quyền
- `CONTENT_EDITOR`: sửa nội dung/media nếu được cấp quyền
- `SEO_EDITOR`: chỉ sửa SEO
- `VIEWER`: chỉ xem

Bắt buộc kiểm tra ở backend bằng Policy/Middleware.

---

## 11. Audit Log

Ghi log khi:

- Tạo sản phẩm
- Sửa sản phẩm
- Xóa sản phẩm
- Đổi giá
- Đổi trạng thái hàng
- Publish/unpublish
- Feature/unfeature
- Gắn/gỡ ảnh
- Upload tài liệu
- Sửa SEO
- Import Excel
- Export Excel nếu cần kiểm soát

Log gồm:

- user_id
- action
- model_type
- model_id
- old_values
- new_values
- ip
- user_agent
- created_at

---

## 12. Cấu trúc frontend module

Tạo/cập nhật:

- `src/features/admin/property-products/types.ts`
- `src/features/admin/property-products/api.ts`
- `src/features/admin/property-products/query.ts`
- `src/features/admin/property-products/mapper.ts`
- `src/features/admin/property-products/schemas.ts`
- `src/features/admin/property-products/components/ProductTable.tsx`
- `src/features/admin/property-products/components/ProductForm.tsx`
- `src/features/admin/property-products/components/ProductBasicForm.tsx`
- `src/features/admin/property-products/components/ProductSpecsForm.tsx`
- `src/features/admin/property-products/components/ProductPricingForm.tsx`
- `src/features/admin/property-products/components/ProductMediaManager.tsx`
- `src/features/admin/property-products/components/ProductDocumentManager.tsx`
- `src/features/admin/property-products/components/ProductSeoForm.tsx`
- `src/features/admin/property-products/components/ProductStatusBadge.tsx`
- `src/features/admin/property-products/components/ProductImportExport.tsx`

Dùng lại:

- `MediaLibraryPicker`
- `MediaUploadDropzone`
- `AdminConfirmDialog`
- `AdminDataTable`
- `AdminPageHeader`
- `AdminEmptyState`

---

## 13. Import/Export Excel

## Export

Cho phép export theo filter hiện tại:

- Dự án
- Loại hình
- Trạng thái
- Khoảng giá
- Hướng

File export gồm:

- Mã sản phẩm
- Tên
- Dự án
- Loại hình
- Block
- Tầng
- Diện tích
- Phòng ngủ
- Hướng
- Giá
- Trạng thái
- Ngày cập nhật

## Import

Giai đoạn đầu có thể làm sau, nhưng cần thiết kế API sẵn:

- Upload Excel
- Validate từng dòng
- Preview lỗi
- Confirm import
- Không import trực tiếp nếu có lỗi nghiêm trọng

Nếu chưa làm import thật, nút Import có thể hiển thị disabled kèm thông báo `Sẽ phát triển ở phase tiếp theo`.

---

## 14. Public/User integration

## Public chi tiết dự án

Section sản phẩm cần lấy từ API:

- Sản phẩm nổi bật
- Loại hình sản phẩm
- Mã căn nếu public
- CTA tư vấn
- CTA lưu quan tâm

## User Dashboard

User có thể:

- Lưu sản phẩm quan tâm nếu có chức năng
- Xem sản phẩm đã lưu
- Đăng ký tư vấn sản phẩm
- Đặt lịch tham quan theo sản phẩm

Nếu database chưa có, bổ sung:

- `saved_property_products`
- hoặc mở rộng `saved_projects` với entity polymorphic.

---

## 15. SEO & Schema

Nếu có trang chi tiết sản phẩm riêng, cần JSON-LD:

- BreadcrumbList
- Product
- Offer nếu có giá

Không spam keyword.

Robots:

- Sản phẩm public: index,follow
- Sản phẩm ẩn/locked: noindex hoặc 404

---

## 16. UI/UX Admin

Giữ đúng nhận diện:

- Navy: `#061B3A`
- Gold: `#C89B3C`
- Cream: `#F8F5EF`
- Text chính: `#10233F`
- Text phụ: `#65758B`
- Border: `#E5EAF2`
- Font: Roboto tiếng Việt

Không được:

- Dùng Bootstrap
- Dùng jQuery
- Dùng template có sẵn
- Hard-code data dài trong component
- Làm vỡ UI admin hiện tại
- Bỏ noindex,nofollow của admin

---

## 17. Thứ tự triển khai khuyến nghị

1. Kiểm tra bảng/model sản phẩm hiện tại.
2. Thống nhất tên bảng `project_products` hoặc `property_products`.
3. Bổ sung migration còn thiếu.
4. Bổ sung relationship Project -> Products.
5. Hoàn thiện Admin Product API.
6. Tạo filter API.
7. Tạo trang `/admin/san-pham` list table.
8. Tạo form thêm/sửa sản phẩm.
9. Tích hợp Media Library.
10. Tích hợp Pricing/Specs/Legal tabs.
11. Tích hợp SEO tab.
12. Tích hợp publish/status actions.
13. Kết nối Public Project Detail với products từ API.
14. Test permission/audit log.
15. Build và fix lỗi.

---

## 18. Test case bắt buộc

## Admin

- Admin tạo sản phẩm mới thuộc dự án.
- Admin chọn ảnh đại diện từ Media Library.
- Admin thêm gallery.
- Admin nhập thông số căn.
- Admin nhập giá bán.
- Admin đổi trạng thái từ available sang reserved.
- Admin publish sản phẩm.
- Admin feature sản phẩm.
- Admin sửa SEO.
- Admin xóa mềm sản phẩm.

## Public

- Sản phẩm published xuất hiện trong chi tiết dự án.
- Sản phẩm hidden không hiển thị.
- Giá hiển thị đúng `price_text`.
- Ảnh hiển thị đúng.
- CTA tư vấn hoạt động.

## Permission

- SALE xem được sản phẩm.
- SALE không sửa giá nếu không có quyền.
- SEO_EDITOR chỉ sửa SEO.
- VIEWER chỉ xem.
- USER không vào được admin.

---

## 19. Tiêu chí hoàn thành

Module Sản phẩm BĐS hoàn thành khi:

- `/admin/san-pham` không còn placeholder.
- Có list/search/filter/sort/pagination.
- Tạo/sửa/xóa mềm sản phẩm được.
- Đổi trạng thái hàng được.
- Publish/unpublish được.
- Feature/unfeature được.
- Chọn ảnh từ Media Library được.
- Quản lý gallery được.
- Quản lý mặt bằng/tài liệu được.
- Quản lý giá/chính sách được.
- Quản lý pháp lý/bàn giao được.
- Quản lý SEO được.
- Public chi tiết dự án hiển thị sản phẩm từ API.
- Có validation frontend/backend.
- Có permission backend.
- Có audit log.
- Build frontend/backend không lỗi.
- Docker vẫn chạy port `43873-43879`.

---

## 20. Git workflow

Branch:

- `phase-admin-property-products`

Commit message:

- `feat: complete admin property products module`

Không commit:

- `.env`
- `.env.local`
- `node_modules`
- `.next`
- `vendor`
- file log
- file upload local không cần thiết
