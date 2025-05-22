import Image from 'next/image'
import Link from 'next/link'

function ProjectCard({ project }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      {project.image && (
        <figure>
          <img
            src={project.image}
            alt={project.title}
            className="rounded-t-lg"
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="text-sm">{project.description.substring(0, 80)}...</p>
        <div className="card-actions justify-end mt-4">
          {project.live_url && (
            <Link href={project.live_url} target="_blank" className="btn btn-xs btn-primary">
              Lihat Live
            </Link>
          )}
          {project.github_url && (
            <Link href={project.github_url} target="_blank" className="btn btn-xs btn-secondary">
              GitHub
            </Link>
          )}
        </div>
        <div className="mt-2">
          {project.technologies && project.technologies.map((tech) => (
            <span key={tech} className="badge badge-outline mr-2">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard