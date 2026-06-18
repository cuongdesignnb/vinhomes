import { AlertTriangle } from "lucide-react";

type NewsErrorStateProps = {
  onRetry?: () => void;
};

export function NewsErrorState({ onRetry }: NewsErrorStateProps) {
  return (
    <div className="py-16 text-center">
      <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-red-50">
        <AlertTriangle className="size-12 text-red-400" />
      </div>

      <h3 className="mt-6 text-lg font-bold text-[#10233F]">
        Không thể tải danh sách bài viết
      </h3>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-[#C89B3C] px-6 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#D8B15A]"
        >
          Thử lại
        </button>
      )}
    </div>
  );
}
