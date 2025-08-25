import { Copy } from "lucide-react";

export const EmailButton = () => {
    return (
        <div className="flex gap-2 font-mono text-sm text-white border border-white cursor-pointer
        rounded-md py-2 px-4 hover:bg-white hover:text-zinc-900 transition-colors ease-in duration-300">
            Mail address
            <Copy size={20} />
        </div>
        
    );
};