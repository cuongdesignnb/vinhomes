import { Quote } from "lucide-react";

type Props = { quote: string };

export function ArticleQuoteBox({ quote }: Props) {
  return (
    <blockquote className="rounded-[18px] border border-[#E8DDC8] border-l-4 border-l-[#C89B3C] bg-[#F8F5EF] p-5 sm:p-7">
      <div className="flex gap-4">
        <Quote
          className="mt-0.5 size-10 shrink-0 text-[#C89B3C] opacity-40"
          aria-hidden
        />
        <p className="text-base italic leading-relaxed text-[#10233F] sm:text-lg">
          {quote}
        </p>
      </div>
    </blockquote>
  );
}
