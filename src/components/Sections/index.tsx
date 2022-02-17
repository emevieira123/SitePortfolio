import { About } from '../../pages/About';
import { Contact } from '../../pages/Contact';
import { Home } from '../../pages/Home';
import { SoftSkills } from '../../pages/SoftSkills';

export function Sections() {
  return (
    <section>
        <section id="home">
          <Home />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="skills">
          <SoftSkills />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </section>
  );
}