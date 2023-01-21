import { getImgUrl } from "../helpers/getImgUrl";
export const Hero = () => {
  
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `url(${getImgUrl('hero.jpeg')})`,
      }}
    >
      <div className="hero__container container mx-auto h-screen py-8 px-4 flex items-center justify-center md:block md:h-full md:px-8 md:py-36">
        <div className="flex justify-between">
          <div className="hero__content w-full md:w-8/12 lg:w-6/12 px-4">
            <p
              className="font-mono mb-4 text-white"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Hola, mi nombre es
            </p>
            <h1
              className="text-4xl text-gray-400 mb-3 md:text-6xl"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              Oscar Espinoza
            </h1>
            <h2
              className="text-5xl mb-8 font-semibold text-white md:text-4xl"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Front-end Developer
            </h2>
            <p
              className="text-lg leading-8 text-white"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Soy front-end developer especializado en escribir codigo limpio,
              elegante y eficiente. Estoy enfocado en aprender nuevas
              habilidades and improving my english
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
