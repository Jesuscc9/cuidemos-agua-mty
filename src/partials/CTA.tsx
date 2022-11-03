import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Descarga el mundo <GradientText>Minecraft</GradientText>
        </>
      }
      description="Si quieres aprender de manera divertida, ve al siguiente enlace para que puedas descargar el Mundo y jugarlo en tu propia computadora."
    />
  </Section>
);

export { CTA };
