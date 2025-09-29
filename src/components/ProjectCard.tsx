import { useState } from "react";
import ProjectTechStack from "./ProjectTechStack";

type TProps = {
    title: string;
    description: string;
    logo: string;
    repoLink: string;
    technologies: {
        icon: React.ReactNode;
        name: string;
    }[];
    link: string;
    thumbnail: string;
    previewImages?: string[];
};

export default function ProjectCard({
    title,
    description,
    logo,
    technologies,
    link,
    repoLink,
    thumbnail,
    previewImages = ["/Portfolio.png"],
}: TProps) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="bg-background/80 border border-violet-500/10 rounded-lg p-4 w-full max-w-sm flex flex-col gap-3 shadow-lg">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mb-2">
                <img src={logo} alt={title} className="w-8 h-8 rounded" />
                <h2 className="text-lg font-bold text-foreground">{title}</h2>
            </a>
            <p className="text-muted-foreground text-sm mb-2">{description}</p>
            <div className="aspect-video rounded-md overflow-hidden mb-2">
                <img src={thumbnail} alt={title + " preview"} className="w-full h-full object-cover" />
            </div>
            <ProjectTechStack technologies={technologies} />
            <div className="flex gap-2 mt-2">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary underline">Live</a>
                {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground underline">Repo</a>}
            </div>
        </div>
    );
}
