import './App.css'
import GitHubCalendar from 'react-github-calendar';

export default function App() {
  const projects = [
    {
      title: "Mellow Depot",
      desc: "The first client of my online selling platform.",
      imgUrl: "/mellowdepot.png",
      link: "https://www.mellowdepot.com"
    },
    {
      title: "Lookio",
      desc: "A modern redesign of the social media auditing platform ThirdParent.",
      imgUrl: "/lookio.png",
      link: "https://lookio.fly.dev"
    },
    {
      title: "Speedline",
      desc: "My first ever client, a simple carwash website that is not so simple under the hood. (pun intended)",
      imgUrl: "/speedline.png",
      link: "https://speedlinewash.fly.dev"
    }
  ]

  return (
    <div className="app-container">
      <h1>Developed by Bryce Blankinship.</h1>
      <p>You may have discovered me from reading the footer on one of the websites I developed:</p>

      <div className="projects">
        {projects.map((project, i) => {
          return <ProjectCard key={'project_card_' + i} project={project} />
        })}
      </div>

      <div className="github-container">
        <a href='https://github.com/BryceBlankinship'>@BryceBlankinship on GitHub</a>
        <GitHubCalendar username='BryceBlankinship' />
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img className="project-card-img" width={200} height={150} src={project.imgUrl}></img>

      <div className="project-card-details">
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <button onClick={() => window.open(project.link, '_blank').focus()}>View site</button>
      </div>
    </div>
  )
}