import { About } from '../../pages/About';
// import { Contact } from '../../pages/Contact';
import { Home } from '../../pages/Home';
import { Portfolio } from '../../pages/Portfolio';
import { SoftSkills } from '../../pages/SoftSkills';
import { Footer } from '../Fotter';

export function Sections() {
  return (
    <section>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <SoftSkills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="footer">
          <Footer />
        </section>        
      </section>
  );
}