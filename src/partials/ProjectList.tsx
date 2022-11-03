import { GradientText, Section } from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Poster <GradientText>científico.</GradientText>
      </>
    }
  >
    <a
      rel="noopener"
      target="_blank"
      href="https://www.canva.com/design/DAFQMseFB6w/djYSjJ3Itw_MqeWGyfG-Kg/view"
    >
      <img src="/assets/images/poster.png" alt="" />
    </a>
  </Section>
);

export { ProjectList };
