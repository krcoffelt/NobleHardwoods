import { JsonLd } from "./JsonLd";
import type { FAQ } from "@/data/launch";

type FAQSectionProps = {
  eyebrow?: string;
  title?: string;
  faqs: FAQ[];
  className?: string;
};

export function FAQSection({
  eyebrow = "FAQs",
  title = "Hardwood flooring questions",
  faqs,
  className = "bg-noble-mist"
}: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className={`${className} py-16 sm:py-20`}>
      <JsonLd data={schema} />
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-extrabold uppercase tracking-[0.18em] text-noble-orange">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-center font-serif text-4xl leading-tight text-noble-ink">
          {title}
        </h2>
        <div className="mt-10 divide-y divide-noble-ink/12 border border-noble-ink/12 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-noble-ink">
                {faq.question}
                <span className="text-2xl text-noble-orange transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-noble-ink/68">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
