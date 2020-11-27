export type FeatureInfo = {
  readonly description: string;
  readonly packageName?: string;
};

export const FeatureInfoConfig: Record<string, FeatureInfo> = {
  UnderConstruction: {
    description: 'Estamos trabajando para traerte una nueva experiencia'
  }
};