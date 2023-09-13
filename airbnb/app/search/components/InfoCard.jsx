"use client"
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";

const InfoCard = ({ listing }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const handleFavoriteUpdate = () => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite)
    }
    return (
        <div className="relative max-w-md mx-auto overflow-hidden rounded-lg shadow-md">
            <img
                src={listing.image}
                alt={listing.name}
                className="object-cover w-full h-48 transition-transform duration-300 transform hover:scale-110"
            />
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="mb-2 text-xl font-semibold">{listing.name}</h3>
                    <div className="flex items-center">
                        <StarIcon className="w-5 h-5 mr-1 text-yellow-500" />
                        <span className="text-gray-800">{listing.rating}</span>
                    </div>
                </div>
                <p className="mb-4 text-gray-600">{listing.description}</p>
                <button
                    onClick={handleFavoriteUpdate}
                    className="absolute z-30 p-2 bottom-1 right-4"
                >
                    {isFavorite ? (
                        <FilledHeartIcon className="w-5 h-5 text-primary" />
                    ) : (
                        <HeartIcon className="w-5 h-5 text-primary" />
                    )}
                </button>
            </div>
        </div>
    )
}

export default InfoCard
