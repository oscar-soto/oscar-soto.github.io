import { Title } from './Title';

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div
        className="contact__title text-center"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <Title>Contact</Title>
        <p className="my-4" data-aos="fade-down" data-aos-duration="1000">
          Si quieres ponerte en contacto o hablar conmigo sobre alguna
          colaboración en un proyecto
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <a
            href="mailto:oscarantonio.soto1998@gmail.com"
            className="inline-block border-2 border-black my-8 py-3 px-8 hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out"
          >
            <i className="far fa-envelope mr-1"></i>
            Email
          </a>
        </div>
      </div>
      <div className="contanct__rrss container mx-auto my-8 flex justify-center items-center">
        <div
          data-aos="zoom-in-down"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <a
            href="https://github.com/oscar-soto"
            className="github inline-block border-2 border-black my-8 mx-8 py-2 px-6 text-sm hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out md:mx-20 md:text-base"
            target="_blank"
          >
            <i className="fab fa-github mr-1"></i>
            Github
          </a>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <a
            href="https://www.linkedin.com/in/oscarespinoza-soto/"
            className="linkedin inline-block border-2 border-black my-8 mx-8 py-2 px-6 text-sm hover:bg-gray-700 hover:text-white transition duration-150 ease-in-out md:mx-16 md:text-base
          "
            target="_blank"
          >
            <i className="fab fa-linkedin-in mr-1"></i>
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
};
