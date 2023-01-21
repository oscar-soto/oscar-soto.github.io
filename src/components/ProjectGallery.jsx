import LightGallery from 'lightgallery/react';
import { getImgUrl } from '../helpers/getImgUrl';

import 'lightgallery/css/lightgallery.css';

export const ProjectGallery = ({ images, title }) => {
  return (
    <div
      id="lightgallery"
      className="project__card--link lg:w-7/12 md:w-3/6 md:px-4"
    >
      <LightGallery speed={500}>
        {images.map((img) => (
          <a
            key={img}
            data-src={getImgUrl(img)}
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              alt={title}
              src={getImgUrl(img)}
              className="h-48 w-full object-cover md:h-full"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};
