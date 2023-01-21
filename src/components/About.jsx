import { Title } from './Title';
import { getImgUrl } from '../helpers/getImgUrl';
import technologies from '../data/technologies';


export const About = () => {
  return (
    <section id="about" className="about container mx-auto px-8 py-36">
      <Title>Sobre Mí</Title>
      <div className="about__container flex flex-wrap md:items-center">
        <div
          className="about__content w-full md:w-7/12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="mb-4" data-aos="fade-right" data-aos-duration="800">
            Hola soy desarrollador web y mi principal area de interés es el
            front-end, comencé en el 2020 recreando diseños en HTML y CSS para
            luego ser utilizado en aplicaciones web principalmente en WordPress.
            Siempre estoy aprendiendo nuevas tecnologías
          </p>

          <p className="mb-4" data-aos="fade-right" data-aos-duration="800">
            Tecnologías que he trabajo :
          </p>

          <ul className="about__content--list">
            {technologies.map((tech, i) => (
              <li
                className="pl-6 mb-2"
                key={tech}
                data-aos="fade-down"
                data-aos-delay={(i + 5) * 100}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex flex-wrap justify-center items-center w-full md:w-5/12 mx-auto"
          data-aos="flip-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div
            className="about__img flex-none hidden md:block md:w-4/12 relative px-4 mx-auto"
            style={{ backgroundImage: `url(${getImgUrl('oscar.jpg')})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
