type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-noble-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-4xl leading-tight text-noble-ink sm:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-noble-ink/68">{text}</p> : null}
    </div>
  );
}
