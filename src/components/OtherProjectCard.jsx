export const OtherProjectCard = () => {
  return (
    <a href="#" className="relative mb-8 overflow-hidden group">
      <figure className="relative w-full h-52">
        <img
          className="w-full h-full absolute object-cover"
          src="https://via.placeholder.com/150"
          alt=""
        />
      </figure>

      <div className="absolute top-0 translate-y-full h-full w-full grid items-center text-center text-white bg-gray-500 group-hover:translate-y-0 transition ease-in-out duration-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        voluptate!
      </div>
    </a>
  );
};
