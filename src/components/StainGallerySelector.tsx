"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowMark } from "@/components/ArrowMark";
import {
  durasealStains,
  getDurasealStainImage,
  stainToneOptions,
  woodSpeciesOptions,
  type StainTone,
  type WoodSpecies
} from "@/data/stains";

type ToneFilter = "All colors" | StainTone;

export function StainGallerySelector() {
  const [species, setSpecies] = useState<WoodSpecies>("White Oak");
  const [tone, setTone] = useState<ToneFilter>("All colors");
  const [query, setQuery] = useState("");
  const [selectedSlug, setSelectedSlug] = useState("aged-barrel");

  const selectedStain =
    durasealStains.find((stain) => stain.slug === selectedSlug) ?? durasealStains[0];

  const filteredStains = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return durasealStains.filter((stain) => {
      const matchesTone = tone === "All colors" || stain.tone === tone;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        stain.name.toLowerCase().includes(normalizedQuery) ||
        stain.tone.toLowerCase().includes(normalizedQuery);

      return matchesTone && matchesQuery;
    });
  }, [query, tone]);

  return (
    <div className="grid gap-10 sm:gap-14">
      <section
        className="overflow-hidden bg-noble-ink text-white shadow-[0_28px_90px_rgba(87,51,31,0.16)]"
        aria-labelledby="selected-stain-title"
      >
        <div className="grid lg:grid-cols-[0.74fr_1.26fr]">
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-noble-orange">
                Compare wood species
              </p>
              <h2
                id="selected-stain-title"
                className="mt-4 text-3xl font-bold leading-none sm:text-4xl"
              >
                {selectedStain.name}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/64 sm:text-base sm:leading-8">
                The same stain can read differently on White Oak and Red Oak. Compare both
                manufacturer samples here, then confirm your favorite on your own floor.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-bold uppercase text-white transition hover:text-noble-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noble-orange"
            >
              Ask about this color <ArrowMark />
            </Link>
          </div>

          <div className="grid grid-cols-2 border-t border-white/12 lg:border-l lg:border-t-0">
            {woodSpeciesOptions.map((option) => (
              <figure
                key={option}
                className="group relative min-w-0 border-white/12 first:border-r"
              >
                <div className="relative aspect-square overflow-hidden bg-[#2c2926]">
                  <Image
                    src={getDurasealStainImage(selectedStain.slug, option)}
                    alt={`${selectedStain.name} DuraSeal stain shown on ${option}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    sizes="(min-width: 1024px) 31vw, 50vw"
                    priority={selectedStain.slug === "aged-barrel"}
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 via-black/34 to-transparent px-4 pb-4 pt-12 sm:px-6 sm:pb-6">
                  <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/72 sm:text-xs">
                    Shown on
                  </span>
                  <span className="mt-1 block text-base font-bold text-white sm:text-xl">
                    {option}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="browse-stains-title">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-noble-orange">
              Official DuraSeal samples
            </p>
            <h2
              id="browse-stains-title"
              className="mt-3 text-3xl font-bold leading-none text-noble-ink sm:text-4xl"
            >
              Browse all 36 colors
            </h2>
          </div>

          <div
            className="grid grid-cols-2 border border-noble-ink/14 bg-white p-1"
            aria-label="Choose a wood species"
          >
            {woodSpeciesOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSpecies(option)}
                aria-pressed={species === option}
                className={`min-h-11 px-4 text-xs font-bold uppercase tracking-[0.08em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noble-orange sm:px-6 sm:text-sm ${
                  species === option
                    ? "bg-noble-ink text-white"
                    : "text-noble-ink hover:bg-cream-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 grid gap-4 border-y border-noble-ink/12 py-5 lg:grid-cols-[18rem_1fr] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search stain colors</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-noble-ink/45"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search colors"
              className="min-h-12 w-full border border-noble-ink/14 bg-white pl-12 pr-4 text-sm text-noble-ink outline-none transition placeholder:text-noble-ink/45 focus:border-noble-orange focus:ring-1 focus:ring-noble-orange"
            />
          </label>

          <div
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:justify-end lg:overflow-visible lg:pb-0"
            aria-label="Filter by color family"
          >
            {stainToneOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTone(option)}
                aria-pressed={tone === option}
                className={`min-h-10 shrink-0 border px-4 text-[0.68rem] font-bold uppercase tracking-[0.08em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noble-orange sm:text-xs ${
                  tone === option
                    ? "border-noble-orange bg-noble-orange text-white"
                    : "border-noble-ink/14 bg-white text-noble-ink hover:border-noble-orange"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-5 text-sm text-noble-ink/58" aria-live="polite">
          Showing {filteredStains.length} {filteredStains.length === 1 ? "color" : "colors"} on{" "}
          {species}
        </p>

        {filteredStains.length > 0 ? (
          <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4">
            {filteredStains.map((stain) => {
              const isSelected = selectedStain.slug === stain.slug;

              return (
                <article key={stain.slug} className="min-w-0">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSlug(stain.slug);
                      document
                        .getElementById("selected-stain-title")
                        ?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    aria-pressed={isSelected}
                    className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noble-orange"
                  >
                    <span
                      className={`relative block aspect-square overflow-hidden bg-noble-mist transition ${
                        isSelected
                          ? "ring-4 ring-noble-orange ring-offset-2 ring-offset-cream-50"
                          : "ring-1 ring-noble-ink/10 group-hover:ring-noble-orange"
                      }`}
                    >
                      <Image
                        src={getDurasealStainImage(stain.slug, species)}
                        alt={`${stain.name} DuraSeal stain shown on ${species}`}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.035]"
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 31vw, 47vw"
                      />
                      <span
                        className={`absolute right-3 top-3 grid h-8 w-8 place-items-center border bg-white/94 text-noble-ink shadow-sm transition ${
                          isSelected
                            ? "border-noble-orange opacity-100"
                            : "border-white/70 opacity-0 group-hover:opacity-100"
                        }`}
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </span>
                    <span className="mt-3 block text-base font-bold leading-tight text-noble-ink sm:text-lg">
                      {stain.name}
                    </span>
                    <span className="mt-1 block text-[0.66rem] font-bold uppercase tracking-[0.1em] text-noble-orange sm:text-xs">
                      {stain.tone}
                    </span>
                  </button>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-6 border border-noble-ink/12 bg-white px-6 py-12 text-center">
            <h3 className="text-xl font-bold text-noble-ink">No stain colors match that search.</h3>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setTone("All colors");
              }}
              className="mt-4 text-sm font-bold uppercase text-noble-orange underline transition hover:text-noble-orange-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noble-orange"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
