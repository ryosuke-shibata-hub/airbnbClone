"use client";
import { useState, useRef } from "react";
import SearchBar from "./components/SearchBar";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { clsx } from 'clsx';
import { useClickAway } from "react-use";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false)
    const ref = useRef(null)
    const toggleExpanded = () => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded)
    }

    useClickAway(ref, () => {
        if (isExpanded) {
            setIsExpanded(false)
        }
    })

    const headerContainerClasses = clsx(
        "container",
        "mx-auto",
        "flex",
        "justify-between",
        "bg-white",
        "py-8",
        "z-50",
        {
            "h-[7.5rem]": !isExpanded,
            "h-[13rem]": isExpanded,
        }
    );
    const searchContainerClasses = clsx(
        "search-container",
        "flex",
        "flex-row",
        "rounded-full",
        "p-4",
        "justify-center",
        "items-center",
        "border",
        "drop-shadow-md",
        "bg-white",
        "w-auto",
        "self-center",
        {
            "border-b-0": !isExpanded,
            "border-b-8": isExpanded,
        }
    );

    const modalClasses = clsx(
        "absolute",
        "top-0",
        "left-0",
        "w-full",
        "h-full",
        "z-40",
        "bg-black",
        "bg-opacity-50",
        "transition-opacity duration-300 wase-in-out",
        {
            hidden: !isExpanded,
            block: isExpanded,
            "opacity-0": !isExpanded,
            "opacity-100": isExpanded,
        }
    )

    const userIconClasses = clsx(
        "text-slate-600 flex", {
        "items-center": !isExpanded,
        "items-start": isExpanded,
    }
    )

    const searchIconContainerVariants = {
        initial: {
            opacity: 1,
            y: 0,
            scale: 1,

        },
        hidden: {
            opacity: 0,
            y: 100,
            scale: 2,
        },
        enter: {
            opacity: 1,
            y: 0,
            scale: 1,
        }
    }

    const tabVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            y: -100,
            scale: 0,
        },
        enter: {
            opacity: 1,
            height: "auto",
            y: 0,
            scale: 1,
        },
        exit: {
            opacity: 0,
            height: 0,
            y: -100,
            scale: 0,
        },
    }
    return (
        <>
            <header ref={ref} className="fixed z-50 flex w-full bg-white border-b">
                <div className={headerContainerClasses}>
                    <div className="text-red-500">
                        <Image src="/images/logo.png" height={50} width={172} alt="logo" />
                    </div>
                    <div className="flex flex-col grow">
                        <motion.div
                            className="flex flex-col justify-center"
                            variants={tabVariants}
                            initial="hidden"
                            animate={isExpanded ? "enter" : "initial"}
                            transition={{ type: "linear" }}
                        >
                            <SearchBar toggleExpanded={toggleExpanded} />
                        </motion.div>
                        {/* {isExpanded ? (
                            <SearchBar toggleExpanded={toggleExpanded} />
                        ) : ( */}
                        <motion.button
                            initial="initial"
                            animate={isExpanded ? "hidden" : "initial"}
                            exit="exit"
                            transition={{ type: "linear" }}
                            variants={searchIconContainerVariants}
                            onClick={toggleExpanded}
                            className={searchContainerClasses}
                        >
                            <div className="flex items-center px-4 border-r input">
                                <p>Any Where</p>
                            </div>
                            <div className="flex items-center px-4 border-r input">
                                <p>Any Date</p>
                            </div>
                            <div className="flex items-center px-4 border-r input">
                                <p>Add Guest</p>
                            </div>
                            <div
                                className="relative w-10 h-10 px-4 rounded-full search-btn bg-primary"
                            >
                                <MagnifyingGlassIcon className="absolute w-5 h-5 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                            </div>
                        </motion.button>
                    </div>
                    {/* )} */}
                    <div className={userIconClasses}>
                        <Image src="/images/user.svg" height={30} width={30} alt="User" />
                    </div>
                </div>
            </header>
            <div className={modalClasses}></div>
        </>
    )
}
