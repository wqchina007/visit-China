export const ImageConfig = {
  hero: {
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
  },
  cityCard: {
    width: 800,
    height: 600,
    aspectRatio: '4/3',
  },
  attraction: {
    width: 1200,
    height: 800,
    aspectRatio: '3/2',
  },
} as const;

export type ImageType = keyof typeof ImageConfig;