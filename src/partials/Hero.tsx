import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola, soy <GradientText>Gerardo</GradientText> 👋
        </>
      }
      description={
        <>
          Soy Gerardo, actualmente estoy participando en Expociencias NL 2022,
          con mi proyecto{' '}
          <span className="text-cyan-400">
            “Diseño de casas sustentables en Minecraft para la concientizacion
            del cuida del agua”.
          </span>{' '}
          Por lo cual te invito al darle clic en el sig botón para que
          descargues el mundo Minecraft y que mientras juegas, aprendamos juntos
          de las diferentes alternativas que podemos utilizar en nuestros
          hogares para cuidar, ahorrar y reciclar agua.
        </>
      }
      avatar={
        <img
          className="h-80 w-72 rounded-lg object-cover object-top"
          src="/assets/images/gerardo.jpeg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://www.mediafire.com/file/e979iclqdrll632/MC_Water_Project.zip/file"
            className="mt-4"
            target="_blank"
            rel="noopener"
          >
            <button className="rounded-lg bg-cyan-500 px-8 py-4 transition-colors hover:bg-cyan-600">
              DESCARGA EL MUNDO
            </button>
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
