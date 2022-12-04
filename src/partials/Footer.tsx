/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-eval */
import { FooterCopyright, Section } from 'astro-boilerplate-components';
import { useEffect } from 'react';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  useEffect(() => {
    // Not proud of this code :c

    const el = document
      .querySelector('#hola')
      ?.querySelector<HTMLDivElement>('.border-t.border-gray-600.pt-5');

    eval('el.innerHTML="Autor: Gerardo Alberto Rodríguez Bravo"');
  }, []);

  return (
    <Section>
      <div id="hola">
        <FooterCopyright site_name={AppConfig.site_name} />
      </div>
    </Section>
  );
};

export { Footer };
