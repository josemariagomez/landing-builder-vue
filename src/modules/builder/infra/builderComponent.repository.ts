import BuilderComponent from '../domain/BuilderComponent';
import BuilderComponentRepository from '../domain/BuilderComponentRepository';

const getBuilderComponents = (): BuilderComponent[] => {
  return [
    {
      id: 'text',
      name: 'Text',
      icon: 'pencil',
      component: 'text',
      defaultProps: {content: 'Your text here...', variant: 'h1'},
    },
    {
      id: 'image',
      name: 'Image',
      icon: 'image',
      component: 'image',
      defaultProps: {
        content: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      },
    },
  ];
};

export default function createBuilderComponentRepository(): BuilderComponentRepository {
  return {
    getBuilderComponents,
  };
}
