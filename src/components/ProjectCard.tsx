
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink: string;
}

export default function ProjectCard({ title, description, imageUrl, technologies, githubLink }: ProjectCardProps) {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <a href={githubLink} className="btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </div>
  );
}
