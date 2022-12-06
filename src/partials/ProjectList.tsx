import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { GradientText, Section } from 'astro-boilerplate-components';
import { Carousel } from 'react-responsive-carousel';

const IMAGES_NAMES: string[] = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
];

const InstalationSteps = () => {
  return (
    <div>
      <Carousel
        autoPlay
        statusFormatter={(current, total) => `${current} de ${total}`}
      >
        {IMAGES_NAMES.map((e) => {
          return (
            <img title="Step image" src={`/assets/images/steps/${e}`} key={e} />
          );
        })}
      </Carousel>
    </div>
  );
};

const ProjectList = () => (
  <>
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
        <img src="/assets/images/poster.svg" alt="" />
      </a>
    </Section>

    <Section title={<h1>Instrucciones</h1>}>
      <InstalationSteps />
    </Section>
  </>
);

export { ProjectList };
