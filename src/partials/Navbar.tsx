import { Logo, NavbarTwoColumns, Section } from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              title="logo"
              src="../assets/images/icon.png"
              className="mr-2 w-10"
            />
          }
          name="Cuidemos el Agua MTY"
        />
      </a>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
