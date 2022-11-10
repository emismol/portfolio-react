//Add Projects
import Project from "../components/Project";

const projectData = [
  {
    image: "https://picsum.photos/200/300",
    title: "Portfolio Project 1",
    deployed: "https://emismol.github.io/horiseon-challenge/",
    repo: "https://github.com/emismol/portfolio.git",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "Portfolio",
    deployed: "google.com",
    repo: "google.com",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "Portfolio",
    deployed: "google.com",
    repo: "google.com",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Project 1</h1>
      <div className="grid">
        {projectData.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </div>
  );
}
