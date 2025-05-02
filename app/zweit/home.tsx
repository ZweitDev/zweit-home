import { useState } from "react";
import zweitLogo from "./zweit_logo.png";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react";

export function ZweitHome() {
    const [displayServices, setDisplayServices] = useState(false);

    return (
        <div className="flex flex-row items-center justify-center space-x-8 mt-2">
            <div className="flex flex-col">
                <h1>Home</h1>
            </div>
            <div className="flex flex-col">
                <Popover
                    className="relative"
                    onMouseEnter={() => setDisplayServices(true)}
                    onMouseLeave={() => setDisplayServices(false)}
                >
                    <PopoverButton>Services</PopoverButton>
                    <Transition show={displayServices}>
                        <PopoverPanel
                            anchor="bottom"
                            className="flex flex-col border-2 border-white rounded-md p-2 mt-2
							transition duration-200 ease-in data-closed:opacity-0"
                        >
                            <a href="offers/development">
                                Cloud and Software Development
                            </a>
                            <a href="offers/support">Support</a>
                            <a href="offers/automation">Automation</a>
                            <a href="offers/ecommerce">E-Commerce</a>
                            <a href="offers/products">Product Management</a>
                        </PopoverPanel>
                    </Transition>
                </Popover>
            </div>
            <div className="flex items-center">
                {/* <div className="w-[100px] max-w-[100vw] p-2">
                    <img
                        src={zweitLogo}
                        alt="Zweit Logo"
                        className="block w-full"
                    />
                </div> */}
                <div>
                    <h1 className="font-bold text-2xl">ZWEIT</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <h1>About</h1>
            </div>
            <div className="flex flex-col">
                <h1>Blog</h1>
            </div>
        </div>
    );
}
