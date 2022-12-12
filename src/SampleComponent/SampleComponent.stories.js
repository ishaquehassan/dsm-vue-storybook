import SampleComponent from "../components/atoms/AGButton";

export default {
  title: "Example/SampleComponent",
  component: SampleComponent
};

export const Default = () => ({
  components: { SampleComponent },
  template:
    '<SampleComponent headingText="blah blah blah!" bodyText="bodytext" />'
});
