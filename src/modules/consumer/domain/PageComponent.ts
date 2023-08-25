export default interface PageComponent {
  id: string;
  builderComponentId: string;
  name: string;
  props: Record<string, string>;
  component: string;
}
