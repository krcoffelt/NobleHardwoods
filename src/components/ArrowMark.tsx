type ArrowMarkProps = {
  className?: string;
};

export function ArrowMark({ className = "" }: ArrowMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex h-4 w-7 shrink-0 items-center ${className}`}
    >
      <span className="h-[3px] w-full rounded-full bg-current" />
      <span className="absolute right-0 size-3 rotate-45 border-r-[3px] border-t-[3px] border-current" />
    </span>
  );
}
