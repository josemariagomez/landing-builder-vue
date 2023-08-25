export default interface BuilderComponent {
  id: string;
  name: string;
  icon: string;
  component: string;
  defaultProps: Record<string, string>;
}
