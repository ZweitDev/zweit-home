import React, { useState, useEffect } from "react";
import { Menu, X, Code, ChevronDown } from "lucide-react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-magenta-600 shadow-md py-2"
                    : "bg-magenta-600 py-4"
            }`}
        >
            <div className="animate-fade-in container font-geist mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Code className="h-8 w-8 " />
                        <span className="ml-2 text-xl font-semibold">
                            Zweit Studios
                        </span>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {["Services", "Case Studies", "Team", "Blog"].map(
                            (item) => (
                                <div key={item} className="relative group">
                                    <a
                                        href={`#${item
                                            .toLowerCase()
                                            .replace(" ", "-")}`}
                                        className="font-medium hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                                </div>
                            )
                        )}
                    </nav>

                    <button className="hidden md:block bg-gray-50 text-black hover:text-white hover:bg-gray-900 font-medium py-2 px-4 rounded-md transition-colors">
                        Contact Us
                    </button>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="bg-white text-black rounded-lg px-2 md:hidden mt-4 pt-4 pb-4">
                        <nav className="flex flex-col space-y-4">
                            {["Services", "Case Studies", "Team", "Blog"].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href={`#${item
                                            .toLowerCase()
                                            .replace(" ", "-")}`}
                                        className="font-medium transition-colors py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                            <button className="bg-magenta-500 hover:bg-magenta-700 text-white font-medium py-2 px-4 rounded-md transition-colors self-start">
                                Contact Us
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
