import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="font-geist pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden text-black dark:text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 w-full lg:pr-12">
                        <div
                            className={`transition-all duration-1000 delay-300 transform ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                            }`}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                You've got the{" "}
                                <div className="relative inline-block">
                                    <span className="relative z-10 text-magenta-500">
                                        Vision
                                    </span>
                                    {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-0"></span> */}
                                </div>
                            </h1>

                            <p className="mt-4 md:text-lg lg:text-xl max-w-2xl">
                                We've got the tech. Whether you're building a
                                brand, selling online, or automating the messy
                                parts of your workflow — we help you launch the
                                tools you need, without the hassle. Custom
                                software. Clean design. Clear results.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center justify-center bg-magenta-500 hover:bg-magenta-700 text-white font-medium py-3 px-6 rounded-md transition-colors group">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </button>
                                <button className="inline-flex items-center justify-center bg-white border border-gray-300 hover:border-magenta-500 hover:text-magenta-600 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors">
                                    See Our Work
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`lg:w-full w-full mt-8 lg:mt-0 transition-all duration-1000 delay-500 transform ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                        }`}
                    >
                        {/* Abstract vector graphic representation of workflow automation */}
                        <div className="relative max-w-lg mx-auto">
                            {/* <div className="absolute -top-12 -right-12 w-48 h-48 bg-magenta-500 rounded-full filter blur-3xl opacity-60"></div> */}
                            {/* <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-magenta-500 rounded-full filter blur-3xl opacity-60"></div> */}

                            <div className="relative z-10 bg-magenta-500 rounded-xl shadow-xl p-6 border border-magenta-900">
                                <div className="text-white text-2xl font-bold mb-2">
                                    <h2>Get in Touch</h2>
                                </div>
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {[1, 2, 3].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-lg bg-linear-to-br bg-white flex items-center justify-center"
                                        >
                                            <div className="h-3 not-[]:bg-magenta-600 rounded-full"></div>
                                        </div>
                                    ))}
                                </div>

                                <div className="h-12 flex flex-row mb-2">
                                    <input
                                        className="rounded-lg p-2 w-full bg-white text-black"
                                        placeholder="Name"
                                    ></input>
                                </div>
                                <div className="h-12 flex flex-row mb-2">
                                    <input
                                        className="rounded-lg p-2 w-full bg-white text-black"
                                        placeholder="Company or Project Name"
                                    ></input>
                                </div>
                                <div className="h-12 flex flex-row mb-2">
                                    <input
                                        className="rounded-lg p-2 w-full bg-white text-black"
                                        placeholder="Email"
                                    ></input>
                                </div>
                                <button className="mt-2 rounded-md text-white border-gray-100 border-1 text-lg hover:bg-white hover:text-black transition-all p-2">
                                    Send a message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
