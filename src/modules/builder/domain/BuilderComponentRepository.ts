import type BuilderComponent from './BuilderComponent';

export default interface BuilderComponentRepository {
  getBuilderComponents: () => BuilderComponent[];
}
