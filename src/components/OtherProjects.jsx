import { OtherProjectCard } from "./OtherProjectCard";
import { Title } from "./Title";

export const OtherProjects = () => {
  return (
    <section className="container mx-auto px-8 mb-20">
      <Title>Otros Proyectos</Title>
      <div className="grid grid-cols-4 gap-10 justify-center items-center">
        <OtherProjectCard />

        <OtherProjectCard />
        <OtherProjectCard />
        <OtherProjectCard />
        <OtherProjectCard />
        <OtherProjectCard />
        <OtherProjectCard />
        <OtherProjectCard />
      </div>
    </section>
  );
};
