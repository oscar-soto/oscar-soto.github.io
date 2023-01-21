import { ProjectGallery } from "./ProjectGallery";
import '../Project.css'

export const ProjectCard = ({ project }) => {
  const {title, text, img} = project
  return (
    <div className="project__card flex flex-wrap py-8 flex-col md:flex-row md:items-center md:justify-center md:py-24">
      <ProjectGallery images={img} title={title} />

      <div
        className="project__card--content py-4 md:w-3/6 lg:w-5/12"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h3 className="font-semibold text-center text-2xl mb-4 md:text-3xl md:text-right">
          { title }
        </h3>
        <div className="description bg-gray-200 border-2 border-gray-600 p-4">
          <p className="text-sm lg:text-base">
            { text }
          </p>
        </div>
      </div>
    </div>
  );
};
