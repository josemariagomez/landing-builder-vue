import type BuilderComponent from '../domain/BuilderComponent';
import type BuilderComponentRepository from '../domain/BuilderComponentRepository';

// If components have to be API driven in the future, you can pass another repo and everything will still work
export function getBuilderComponents(repo: BuilderComponentRepository): BuilderComponent[] {
  return repo.getBuilderComponents();
}
