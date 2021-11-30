// Colors

export const colorsArray: string[] = [
  "acapulco",
  "alabaster",
  "athens-gray",
  "black",
  "floral-white",
  "geyser",
  "gin",
  "gun-powder",
  "linen",
  "manhattan",
  "merino",
  "terracotta",
  "white",
];

export const colorsMap: {
  name: string;
  value: string;
}[] = [
  { name: "acapulco", value: "#81b29a" },
  { name: "alabaster", value: "#fafafa" },
  { name: "athens-gray", value: "#ebebeb" },
  { name: "black", value: "#000" },
  { name: "floral-white", value: "#faf9f0" },
  { name: "geyser", value: "#dee2e6" },
  { name: "gin", value: "#e5efea" },
  { name: "gun-powder", value: "#3d405b" },
  { name: "linen", value: "#fbf1ee" },
  { name: "manhattan", value: "#e5efea" },
  { name: "merino", value: "#f4f1de" },
  { name: "terracotta", value: "#d85531" },
  { name: "white", value: "#fff" },
];

// Alternative information for unit's gallery
export const unitsImagesAlts: string[] = [
  "una buena descripción de la foto de la cabaña acá foto - #1",
  "una buena descripción de la foto de la cabaña acá foto - #2",
  "una buena descripción de la foto de la cabaña acá foto - #3",
  "una buena descripción de la foto de la cabaña acá foto - #4",
  "una buena descripción de la foto de la cabaña acá foto - #5",
  "una buena descripción de la foto de la cabaña acá foto - #6",
  "una buena descripción de la foto de la cabaña acá foto - #7",
  "una buena descripción de la foto de la cabaña acá foto - #8",
  "una buena descripción de la foto de la cabaña acá foto - #9",
  "una buena descripción de la foto de la cabaña acá foto - #10",
  "una buena descripción de la foto de la cabaña acá foto - #11",
  "una buena descripción de la foto de la cabaña acá foto - #12",
  "una buena descripción de la foto de la cabaña acá foto - #13",
];

// Alternative information for common spaces gallery
export const commonImagesAlts: string[] = [
  "una buena descripción de la foto del espacio común acá - #1",
  "una buena descripción de la foto del espacio común acá - #2",
  "una buena descripción de la foto del espacio común acá - #3",
  "una buena descripción de la foto del espacio común acá - #4",
];

// animationContainer and animationItem are used to set the groups animation default
export const animationContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.0125,
      delayChildren: 0.25,
    },
  },
};

export const animationItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};
