import { DesignTools, devTools, Technologies } from "../data/Technologies";

const Skills = () => {
  return (
    <div id="skills" className="mainContainer pt-20 text-white">
      <h1 className="text-center text-gold-200 text-5xl font-bold pb-10">
        Skills
      </h1>
      <h1 className="text-center text-gold-200 text-3xl font-bold pb-10">
        Design Tools I Use
      </h1>
      <div className="mb-5 mx-10 flex flex-wrap justify-center gap-4">
        {DesignTools.map((tool) => (
          <a key={tool.id} href={tool.link}>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2">
              <img src={tool.icon} alt={tool.name} width={20} />
              <p className="font-semibold text-black"> {tool.name} </p>
            </div>
          </a>
        ))}
      </div>
      <h1 className="text-center text-gold-200 text-3xl font-bold pb-10">
        Technologies I Use
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-5 mx-10">
        {Technologies.map((tool) => (
          <a key={tool.id} href={tool.link}>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-full">
              <img src={tool.icon} alt={tool.name} width={20} />
              <p className="font-semibold text-black"> {tool.name} </p>
            </div>
          </a>
        ))}
      </div>
      <h1 className="text-center text-gold-200 text-3xl font-bold pb-10 w-3/4 mx-auto">
        Developement & Productivity Tools I Use
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-5 mx-10">
        {devTools.map((tool) => (
          <a key={tool.id} href={tool.link}>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-full">
              <img src={tool.icon} alt={tool.name} width={20} />
              <p className="font-semibold text-black"> {tool.name} </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
