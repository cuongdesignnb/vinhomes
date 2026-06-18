import { Search } from "lucide-react";

type NewsEmptyStateProps = {
  onReset?: () => void;
};

export function NewsEmptyState({ onReset }: NewsEmptyStateProps) {
  return (
    <div className="py-16 text-center">
      <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#F8F5EF]">
        <Search className="size-12 text-[#C89B3C]/50" />
      </div>

      <h3 className="mt-6 text-lg font-bold text-[#10233F]">
        Không tìm thấy bài viết phù hợp
      </h3>

      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#65758B]">
        Vui lòng thay đổi bộ lọc hoặc đăng ký nhận bản tin để được cập nhật nội dung mới nhất.
      </p>

      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-[#C89B3C] px-6 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#D8B15A]"
        >
          Đặt lại bộ lọc
        </button>
      )}
    </div>
  );
}
