import projects from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Title } from './Title';

export const Project = () => {
  return (
    <section
      id="project"
      className="project container mx-auto px-8 mb-20"
      data-aos="fade-down"
      data-aos-delay="500"
    >
      <Title>Proyectos</Title>
      <div className="project__container flex flex-wrap pt-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
