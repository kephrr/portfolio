import { Download } from "lucide-react";

export const DownloadButton = () => {
    return (
        <div className="flex gap-2 font-mono text-sm text-white border border-white cursor-pointer
        rounded-md py-2 px-4 hover:bg-[#FF5964] hover:border-[#FF5964] transition-colors ease-in duration-300">
            Download CV
            <Download size={20} />
        </div>
        
    );
};