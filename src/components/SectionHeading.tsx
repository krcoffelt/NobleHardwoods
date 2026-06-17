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
      <h2 className="mt-3 text-4xl font-black uppercase leading-[0.96] tracking-normal text-noble-ink sm:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-noble-ink/68">{text}</p> : null}
    </div>
  );
}
