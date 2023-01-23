import otherProjects from "../data/otherProjects";
import { OtherProjectCard } from "./OtherProjectCard";
import { Title } from "./Title";

export const OtherProjects = () => {
  return (
    <section className="container mx-auto px-8 mb-20" data-aos="fade-down"
    data-aos-delay="200"
    data-aos-duration="1000">
      <Title>Otros Proyectos</Title>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-center items-center">
        {
          otherProjects.map(project => (
            <OtherProjectCard 
              key={project.title} 
              project={project} 
            />
          ))
        }
      </div>
    </section>
  );
};
