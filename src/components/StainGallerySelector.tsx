"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { durasealStains, woodSpeciesOptions, type WoodSpecies } from "@/data/stains";

type Stain = (typeof durasealStains)[number];

export function StainGallerySelector() {
  const [species, setSpecies] = useState<WoodSpecies>("White Oak");
  const colorKey = species === "White Oak" ? "whiteOak" : "redOak";
  const groupedStains = useMemo(() => {
    return durasealStains.reduce<Record<string, Stain[]>>((groups, stain) => {
      groups[stain.family] = groups[stain.family] || [];
      groups[stain.family].push(stain);
      return groups;
    }, {});
  }, []);

  return (
    <div className="grid gap-8">
      <div className="flex flex-col gap-4 border border-noble-ink/10 bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-noble-orange">
            Wood species
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase leading-tight text-noble-ink">
            View colors on {species}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {woodSpeciesOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSpecies(option)}
              className={`min-h-12 px-5 text-sm font-extrabold uppercase transition ${
                species === option
                  ? "bg-noble-orange text-white"
                  : "border border-noble-ink/14 bg-cream-50 text-noble-ink hover:border-noble-orange"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8">
        {Object.entries(groupedStains).map(([family, stains]) => (
          <section key={family}>
            <h3 className="border-b border-noble-ink/12 pb-3 text-sm font-black uppercase tracking-[0.16em] text-noble-ink">
              {family}
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {stains.map((stain) => (
                <article
                  key={stain.name}
                  className="grid grid-cols-[5.5rem_1fr] overflow-hidden border border-noble-ink/10 bg-white"
                >
                  <div
                    className="min-h-24 border-r border-noble-ink/10 bg-[var(--stain-color)]"
                    style={{ "--stain-color": stain[colorKey] } as CSSProperties}
                    aria-hidden="true"
                  />
                  <div className="p-4">
                    <h4 className="text-base font-black uppercase leading-tight text-noble-ink">
                      {stain.name}
                    </h4>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-noble-orange">
                      {species}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
