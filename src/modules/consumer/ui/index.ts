import BuilderImageVue from './BuilderImage.vue';
import BuilderTextVue from './BuilderText.vue';

export const builderComponents: Record<string, any> = {
  text: BuilderTextVue,
  image: BuilderImageVue,
};
