/**
 * FAUSAN Haute Couture — Google Imagen / Gemini Asset Generation Pipeline
 */

const GEMINI_IMAGEN_SPEC = {
  aspectRatio: "16:9",
  numberOfImages: 1,
  outputOptions: {
    mimeType: "image/jpeg"
  },
  prompt: "Cinematic close up of luxury Parisian haute couture silk embroidery, gold metallic thread woven into deep obsidian black crepe de chine, macro depth of field, dramatic rim lighting."
};

console.log('✨ [Gemini / Imagen Pipeline] Configured Couture Asset Spec:');
console.log(JSON.stringify(GEMINI_IMAGEN_SPEC, null, 2));
