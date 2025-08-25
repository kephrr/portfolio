import { DownloadButton } from "./ui/download-button";
import { EmailButton } from "./ui/email-button";
import { GithubButton } from "./ui/github-button";
import shoto from "../assets/images/shoto.jpg"
import { TypingText } from "./ui/react-typing-text-tailwind";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "./hooks/use-scroll-animation";

export const Introduction = () => {
    const [heroRef, heroVisible] = useScrollAnimation(0.1);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return <div ref={heroRef} className="w-full bg-zinc-900 min-h-[450px] 
    overflow-hidden relative ">
        <div className="circlePosition w-[290px] h-[150px] 
                bg-[#FF5964] rounded-[100%] absolute z-1 
                top-[65%] left-[35%] translate-x-[-50%] 
                translate-y-[-50%] blur-[150px]"
            ></div>
            <div className="circlePosition w-[290px] h-[150px] 
                bg-[#11B5E4] rounded-[100%] absolute z-1 
                top-[35%] left-[65%] translate-x-[-50%] 
                translate-y-[-50%] blur-[150px]"
            ></div>
          <div className="flex w-80% h-[450px] 
          px-40 items-center justify-start gap-10 relative z-10 text-white">
            <div className="flex flex-col gap-2">
                <h1 className={`font-roc-regular text-4xl transition-all delay-300 leading-tight duration-1000 ${
                        heroVisible ? 'translate-x-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>Hello 😄 fellow, my name is
                    <span className="font-roc-normal"> Kephren NZE</span></h1>
                <h2 className={`transition-all delay-400 leading-tight duration-1000 ${
                        heroVisible ? 'translate-x-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <TypingText
                        words={[
                            "Software Engineer & Web Designer",
                        ]}
                        typingSpeed={70}       // vitesse de frappe
                        deletingSpeed={40}     // vitesse d'effacement
                        pauseTime={3000}       // ⏱️ pause de 3 secondes avant effacement
                        transitionPause={300}  // temps après effacement avant le mot suivant
                        loop={false}           // (si tu veux que ça s'arrête après le mot)
                        cursor
                        className="text-2xl font-semibold"
                        />
                </h2>
                <p className={`font-mono max-w-96 transition-all delay-500 leading-tight duration-1000 ${
                        heroVisible ? 'translate-x-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        I want to share you all my passion about development but first... Let’s see the CODE</p>
                
                <div className={`flex mt-14 gap-4 transition-all delay-600 leading-tight duration-1000 ${
                        heroVisible ? 'translate-x-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <EmailButton />
                    <DownloadButton />
                    <GithubButton />
                </div>
            </div>
            <img className={`w-50 h-50 rounded-full transition-all delay-400 leading-tight duration-1000 ${
                        heroVisible ? 'translate-x-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}  src={shoto} alt="Logo" />
          </div>
          
    </div>
};