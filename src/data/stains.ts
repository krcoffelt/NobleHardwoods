export const woodSpeciesOptions = ["White Oak", "Red Oak"] as const;

export type WoodSpecies = (typeof woodSpeciesOptions)[number];

export const durasealSourceUrl = "https://www.duraseal.com/stain-gallery/";

export const stainToneOptions = [
  "All colors",
  "Light & natural",
  "Warm & golden",
  "Classic brown",
  "Deep & dark",
  "Gray & weathered",
  "Red tones"
] as const;

export type StainTone = Exclude<(typeof stainToneOptions)[number], "All colors">;

export const durasealStains = [
  { name: "Aged Barrel", slug: "aged-barrel", tone: "Gray & weathered" },
  { name: "Antique Brown", slug: "antique-brown", tone: "Classic brown" },
  { name: "Cherry", slug: "cherry", tone: "Red tones" },
  { name: "Chestnut", slug: "chestnut", tone: "Classic brown" },
  { name: "Classic Gray", slug: "classic-gray", tone: "Gray & weathered" },
  { name: "Coffee Brown", slug: "coffee-brown", tone: "Deep & dark" },
  { name: "Colonial Maple", slug: "colonial-maple", tone: "Warm & golden" },
  { name: "Country White", slug: "country-white", tone: "Light & natural" },
  { name: "Dark Gray", slug: "dark-gray", tone: "Gray & weathered" },
  { name: "Dark Walnut", slug: "dark-walnut", tone: "Deep & dark" },
  { name: "Early American", slug: "early-american", tone: "Classic brown" },
  { name: "Ebony", slug: "ebony", tone: "Deep & dark" },
  { name: "English Chestnut", slug: "english-chestnut", tone: "Classic brown" },
  { name: "Espresso", slug: "espresso", tone: "Deep & dark" },
  { name: "Fruitwood", slug: "fruitwood", tone: "Warm & golden" },
  { name: "Golden Brown", slug: "golden-brown", tone: "Warm & golden" },
  { name: "Golden Oak", slug: "golden-oak", tone: "Warm & golden" },
  { name: "Golden Pecan", slug: "golden-pecan", tone: "Warm & golden" },
  { name: "Gunstock", slug: "gunstock", tone: "Red tones" },
  { name: "Heritage Brown", slug: "heritage-brown", tone: "Classic brown" },
  { name: "Jacobean", slug: "jacobean", tone: "Deep & dark" },
  { name: "Medium Brown", slug: "medium-brown", tone: "Classic brown" },
  { name: "Neutral", slug: "neutral", tone: "Light & natural" },
  { name: "Nutmeg", slug: "nutmeg", tone: "Warm & golden" },
  { name: "Provincial", slug: "provincial", tone: "Classic brown" },
  { name: "Red Mahogany", slug: "red-mahogany", tone: "Red tones" },
  { name: "Rosewood", slug: "rosewood", tone: "Red tones" },
  { name: "Royal Mahogany", slug: "royal-mahogany", tone: "Red tones" },
  { name: "Rustic Beige", slug: "rustic-beige", tone: "Light & natural" },
  { name: "Sedona Red", slug: "sedona-red", tone: "Red tones" },
  { name: "Silvered Gray", slug: "silvered-gray", tone: "Gray & weathered" },
  { name: "Special Walnut", slug: "special-walnut", tone: "Classic brown" },
  { name: "Spice Brown", slug: "spice-brown", tone: "Classic brown" },
  { name: "True Black", slug: "true-black", tone: "Deep & dark" },
  { name: "Warm Gray", slug: "warm-gray", tone: "Gray & weathered" },
  { name: "Weathered Oak", slug: "weathered-oak", tone: "Gray & weathered" }
] as const satisfies ReadonlyArray<{
  name: string;
  slug: string;
  tone: StainTone;
}>;

export function getDurasealStainImage(slug: string, species: WoodSpecies) {
  const speciesFolder = species === "White Oak" ? "white-oak" : "red-oak";
  return `/images/stains/duraseal/${speciesFolder}/${slug}.webp`;
}
