import { FileCode2, SplinePointer } from "lucide-react";
import react from "../assets/images/react.png";
import flutter from "../assets/images/flutter.png";
import tailwindcss from "../assets/images/tailwindcss.png";
import python from "../assets/images/python.png";
import angular from "../assets/images/angular.png";
import docker from "../assets/images/docker.png";
import figma from "../assets/images/figma.png";
import github from "../assets/images/github.png";
import { useScrollAnimation } from "./hooks/use-scroll-animation";

export const Skills = () => {
    const img_style = "w-auto h-10";
    const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

    return <div className="min-h-[450px] ">
        <div className="circlePosition w-[190px] h-[120px] 
                bg-[#8A38F5] rounded-[100%] absolute z-0 
                top-[120%] left-[35%] translate-x-[-50%] 
                translate-y-[-50%] blur-[150px]"
            ></div>
        <h1 className="font-mono font-bold text-4xl mt-20">First, 
             <span className="text-[#8A38F5]">What</span> can I do and how so ?</h1>
        <div ref={cardsRef} className="flex gap-4 w-4xl relative mt-16">
            <div className={`flex w-[50%] flex-col border border-[#B3B3B3] p-5 bg-white rounded-lg
                        transition-all delay-300 leading-tight duration-800 ${
                        cardsVisible ? 'translate-x-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    >
                <div className="flex gap-1.5">
                    <FileCode2 />
                    <h2 className="font-mono font-bold text-md">Skills and competencies</h2>
                </div>
                <p className="text-xs">I can help analyse, improve and build digital solutions that will help you to grow your project</p>
                <ul className="list-disc list-inside text-[14px]">
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Mobile development</li>
                    <li>DataBase design</li>
                    <li>API integration</li>
                </ul>
            </div>
            <div className={`w-[70%] border border-[#B3B3B3] p-5 bg-white rounded-lg
                        transition-all delay-300 leading-tight duration-800 ${
                        cardsVisible ? 'translate-x-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                <div className="flex">
                    <SplinePointer />
                    <h2 className="font-mono font-bold text-md">Tools and technologies</h2>
                </div>
                <p className="text-xs">Data-wise, I’m able to use MongoDB, PostgreSQL and MySQL depending on the project</p>
                <div className="flex justify-between mt-10">
                    <img className={img_style} src={react} alt="react" />
                    <img className={img_style} src={flutter} alt="flutter" />
                    <img className={img_style} src={tailwindcss} alt="tailwindcss" />
                    <img className={img_style} src={python} alt="python" />
                    <img className={img_style} src={angular} alt="angular" />
                    <img className={img_style} src={docker} alt="docker" />
                    <img className={img_style} src={figma} alt="figma" />
                    <img className={img_style} src={github} alt="github" />
                </div>
            </div>
        </div>
    </div>;
}