import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="font-geist pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden h-screen text-black dark:text-white">
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
                                Custom Software for your{" "}
                                <div className="relative inline-block">
                                    <span className="relative z-10 text-purple-500">
                                        Passion
                                    </span>
                                    {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-0"></span> */}
                                </div>
                            </h1>

                            <p className="mt-4 text-xl max-w-2xl">
                                Custom software solutions that streamline your
                                business processes, reduce manual work, and
                                accelerate your growth.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors group">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </button>
                                <button className="inline-flex items-center justify-center bg-white border border-gray-300 hover:border-purple-500 hover:text-purple-600 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors">
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
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-400 rounded-full filter blur-3xl opacity-60"></div>
                            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-purple-700 rounded-full filter blur-3xl opacity-60"></div>

                            <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {[1, 2, 3].map((item) => (
                                        <div
                                            key={item}
                                            className="h-16 rounded-lg bg-linear-to-br from-purple-50 to-purple-100 flex items-center justify-center"
                                        >
                                            <div className="w-8 h-2 bg-purple-600 rounded-full"></div>
                                        </div>
                                    ))}
                                </div>

                                <div className="h-24 rounded-lg bg-linear-to-r from-purple-500 to-purple-600 mb-4 p-3">
                                    <div className="flex gap-2 mb-2">
                                        {[1, 2, 3].map((item) => (
                                            <div
                                                key={item}
                                                className="w-2 h-2 bg-white rounded-full opacity-70"
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="h-3 w-3/4 bg-white bg-opacity-20 rounded-full mb-2"></div>
                                    <div className="h-3 w-1/2 bg-white bg-opacity-20 rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="h-20 rounded-lg bg-linear-to-br from-gray-50 to-gray-100 p-3">
                                        <div className="h-2 w-3/4 bg-gray-300 rounded-full mb-2"></div>
                                        <div className="h-2 w-1/2 bg-gray-300 rounded-full mb-2"></div>
                                        <div className="h-2 w-2/3 bg-gray-300 rounded-full"></div>
                                    </div>
                                    <div className="h-20 rounded-lg bg-linear-to-br from-purple-50 to-purple-100 p-3">
                                        <div className="h-2 w-3/4 bg-purple-400 rounded-full mb-2"></div>
                                        <div className="h-2 w-1/2 bg-purple-400 krounded-full mb-2"></div>
                                        <div className="h-2 w-2/3 bg-purple-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
