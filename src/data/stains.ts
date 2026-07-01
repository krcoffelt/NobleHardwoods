export const woodSpeciesOptions = ["White Oak", "Red Oak"] as const;

export type WoodSpecies = (typeof woodSpeciesOptions)[number];

export const durasealSourceUrl = "https://www.duraseal.com/stain-gallery/";

export const durasealStains = [
  { name: "Aged Barrel", family: "Warm brown", whiteOak: "#a77852", redOak: "#9d6445" },
  { name: "Antique Brown", family: "Deep brown", whiteOak: "#6d4a35", redOak: "#6a3f30" },
  { name: "Cherry", family: "Red brown", whiteOak: "#9b4e35", redOak: "#9a4334" },
  { name: "Chestnut", family: "Classic brown", whiteOak: "#875737", redOak: "#805035" },
  { name: "Classic Gray", family: "Gray", whiteOak: "#9a9288", redOak: "#8f8177" },
  { name: "Coffee Brown", family: "Dark brown", whiteOak: "#5b3828", redOak: "#543124" },
  { name: "Colonial Maple", family: "Golden", whiteOak: "#b8753e", redOak: "#ae6539" },
  { name: "Country White", family: "Light neutral", whiteOak: "#d3c7b2", redOak: "#c9ad96" },
  { name: "Dark Gray", family: "Gray", whiteOak: "#5f5f5c", redOak: "#5a514e" },
  { name: "Dark Walnut", family: "Dark brown", whiteOak: "#4d3022", redOak: "#4a2a21" },
  { name: "Early American", family: "Medium brown", whiteOak: "#8f5f3d", redOak: "#895338" },
  { name: "Ebony", family: "Black", whiteOak: "#24211d", redOak: "#201b19" },
  { name: "English Chestnut", family: "Medium brown", whiteOak: "#7b4a2f", redOak: "#79422e" },
  { name: "Espresso", family: "Black brown", whiteOak: "#32241d", redOak: "#2e1f1b" },
  { name: "Fruitwood", family: "Honey", whiteOak: "#b77b47", redOak: "#ae6b3f" },
  { name: "Golden Brown", family: "Golden brown", whiteOak: "#a36c3d", redOak: "#9d5f39" },
  { name: "Golden Oak", family: "Golden", whiteOak: "#bf8744", redOak: "#b77941" },
  { name: "Golden Pecan", family: "Golden", whiteOak: "#c28b52", redOak: "#b97847" },
  { name: "Gunstock", family: "Amber brown", whiteOak: "#935633", redOak: "#934735" },
  { name: "Heritage Brown", family: "Warm brown", whiteOak: "#76513b", redOak: "#704735" },
  { name: "Jacobean", family: "Deep brown", whiteOak: "#443024", redOak: "#40271f" },
  { name: "Medium Brown", family: "Medium brown", whiteOak: "#735037", redOak: "#704330" },
  { name: "Neutral", family: "Natural", whiteOak: "#d1ad7a", redOak: "#c58f67" },
  { name: "Nutmeg", family: "Warm brown", whiteOak: "#9a623b", redOak: "#935537" },
  { name: "Provincial", family: "Brown", whiteOak: "#7f5437", redOak: "#794934" },
  { name: "Red Mahogany", family: "Red brown", whiteOak: "#81382f", redOak: "#843030" },
  { name: "Rosewood", family: "Red brown", whiteOak: "#73362f", redOak: "#783030" },
  { name: "Royal Mahogany", family: "Red brown", whiteOak: "#5d2f29", redOak: "#632927" },
  { name: "Rustic Beige", family: "Light neutral", whiteOak: "#bda27e", redOak: "#b18c73" },
  { name: "Sedona Red", family: "Red", whiteOak: "#9f442e", redOak: "#a33a30" },
  { name: "Silvered Gray", family: "Gray", whiteOak: "#aaa497", redOak: "#9c8d84" },
  { name: "Special Walnut", family: "Walnut brown", whiteOak: "#79563c", redOak: "#744b35" },
  { name: "Spice Brown", family: "Warm brown", whiteOak: "#7a4b31", redOak: "#774331" },
  { name: "True Black", family: "Black", whiteOak: "#171615", redOak: "#151313" },
  { name: "Warm Gray", family: "Warm gray", whiteOak: "#8f8679", redOak: "#88786f" },
  { name: "Weathered Oak", family: "Weathered neutral", whiteOak: "#a89883", redOak: "#9b8272" }
] as const;
