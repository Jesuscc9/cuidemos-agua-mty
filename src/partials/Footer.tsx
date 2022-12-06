/* eslint-disable no-eval */
import { FooterCopyright, Section } from 'astro-boilerplate-components';
import { useEffect } from 'react';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  useEffect(() => {
    // Not proud of this code :c

    eval(`
			const footerText = document?.querySelector('#hola')?.querySelector('.border-t.border-gray-600.pt-5')
			footerText.innerHTML="Autor: Gerardo Alberto Rodríguez Bravo"
		`);
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
