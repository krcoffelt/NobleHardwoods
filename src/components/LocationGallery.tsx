import Image from "next/image";
import Link from "next/link";
import type { LocalGalleryImage } from "@/data/serviceAreaPages";

type LocationGalleryProps = {
  city: string;
  images: LocalGalleryImage[];
};

export function LocationGallery({ city, images }: LocationGalleryProps) {
  if (!images.length) return null;

  return (
    <section className="bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-noble-orange">
            Verified local gallery
          </p>
          <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.96] text-noble-ink sm:text-5xl">
            Hardwood work documented in {city}.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {images.map((image, index) => {
            const media = (
              <>
                <div className="relative min-h-72 overflow-hidden bg-noble-mist sm:min-h-96">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                  />
                </div>
                {image.caption ? (
                  <p className="mt-3 text-sm leading-6 text-noble-ink/62">{image.caption}</p>
                ) : null}
              </>
            );

            const className = `group ${index === 0 ? "lg:col-span-8" : "lg:col-span-4"}`;

            return image.projectHref ? (
              <Link key={`${image.src}-${index}`} href={image.projectHref} className={className}>
                {media}
              </Link>
            ) : (
              <figure key={`${image.src}-${index}`} className={className}>
                {media}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
