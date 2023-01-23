import { getImgUrl } from '../helpers/getImgUrl';

export const OtherProjectCard = ({ project }) => {
  const { img, title, text, url } = project;

  return (
    <a
      href={url}
      className="relative mb-8 overflow-hidden group"
      target="_blank"
    >
      <figure className="relative w-full h-32 md:h-52">
        <img
          className="w-full h-full absolute object-cover"
          src={getImgUrl(img)}
          alt={title}
        />
      </figure>

      <div className="md:absolute top-0 md:translate-y-full  md:h-full w-full grid items-center text-center text-white bg-gray-500 md:group-hover:translate-y-0 transition ease-in-out duration-300">
        <p className="p-4 h-32 text-sm md:text-base">
          <span className="md:text-xl font-bold">{title}: </span>
          {text}
        </p>
      </div>
    </a>
  );
};
