"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

type TextAnimationProps = {
    text: string;
};

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRefs = useRef<HTMLSpanElement[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;
        const elements = containerRef.current.querySelectorAll("span");

        gsap.fromTo(
            elements,
            { opacity: 0.2 },
            {
                opacity: 1,
                stagger: 0.8,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 200%",
                    end: "bottom top",
                    scrub: true,
                    markers: false,
                },
            }
        );
    }, []);

    const splitText = (text: string) => {
        return text.split(" ").map((word, wordIndex) => (
            <p key={wordIndex} className="inline-flex flex-wrap">
                {word.split("").map((letter, letterIndex) => (
                    <span
                        key={`${wordIndex}-${letterIndex}`}
                        ref={(el) => {
                            if (el) textRefs.current.push(el);
                        }}
                        className="inline-block"
                    >
                        {letter}
                    </span>
                ))} {" "}
            </p>
        ));
    };

    return (
        <main
            ref={containerRef}
            className="flex absolute items-end justify-center p-10 text-gray-200"
        >
            <div className="flex flex-wrap gap-2">{splitText(text)}</div>
        </main>
    );
};

export default TextAnimation;
