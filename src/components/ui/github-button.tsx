import { Github } from "lucide-react";

export const GithubButton = () => {
    return (
        <div className="flex gap-2 font-mono text-sm text-white cursor-pointer
        rounded-md py-2 px-4 bg-[#8A38F5] hover:bg-[#FF5964] transition-colors ease-in duration-300">
            Go to Github
            <Github size={20} />
        </div>
        
    );
};