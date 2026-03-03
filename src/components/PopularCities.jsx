"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

import newyorkImg from "../../assets/images/newyork.svg";
import detroitImg from "../../assets/images/detroit.svg";
import washingtonImg from "../../assets/images/washington.svg";
import chicagoImg from "../../assets/images/chicago.svg";
import atlantaImg from "../../assets/images/atlanta.svg";
import miamiImg from "../../assets/images/miami.svg";

const citiesData = [
    {
        id: "01",
        title: "New York",
        subtitle: "NY",
        image: newyorkImg
    },
    {
        id: "02",
        title: "Detroit",
        subtitle: "MI",
        image: detroitImg
    },
    {
        id: "03",
        title: "Washington",
        subtitle: "D.C",
        image: washingtonImg
    },
    {
        id: "04",
        title: "Chicago",
        subtitle: "IL",
        image: chicagoImg
    },
    {
        id: "05",
        title: "Atlanta",
        subtitle: "GA",
        image: atlantaImg
    },
    {
        id: "06",
        title: "Miami",
        subtitle: "FL",
        image: miamiImg
    }
];

export default function PopularCities() {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Auto slider logic (every 2.5 seconds)
        const intervalId = setInterval(() => {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({ left: 300, behavior: "smooth" });
            }
        }, 2500);

        return () => clearInterval(intervalId);
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full py-16 md:py-24 overflow-hidden">
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Text */}
                <div
                    className="mb-12 text-center flex flex-col items-center"
                    data-aos="fade-up"
                >
                    <h2
                        className="text-[#0F172B] tracking-tight mb-4 text-3xl sm:text-4xl md:text-[44px] leading-tight"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        Popular Cities in Our Community
                    </h2>
                </div>

                <div className="relative flex items-center">
                    {/* Left Scroll Button */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 z-20 hidden md:flex w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full items-center justify-center -ml-5 transition-colors"
                        aria-label="Scroll left"
                    >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Horizontal Scrolling Cards */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 snap-x hide-scrollbar scroll-smooth w-full px-2"
                    >
                        {citiesData.map((city) => (
                            <div
                                key={city.id}
                                className="snap-start shrink-0 flex flex-col bg-white rounded-3xl p-5 shadow-sm min-w-[240px] sm:min-w-[260px] max-w-[260px] relative"
                            >
                                {/* Card Number (Top Left Corner Positioned) */}
                                <span
                                    className="text-gray-200 font-semibold text-xs absolute top-4 left-5"
                                    style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                                >
                                    {city.id}
                                </span>

                                {/* Card Header */}
                                <div className="flex flex-col items-center w-full justify-center pt-2 mb-2">
                                    <h3
                                        className="font-semibold text-[20px] text-[#0F172B] leading-tight text-center"
                                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                                    >
                                        {city.title}
                                    </h3>
                                    <p
                                        className="text-[#8E909A] text-[14px] mt-[2px] text-center"
                                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                                    >
                                        {city.subtitle}
                                    </p>
                                </div>

                                {/* Card Image */}
                                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mt-3">
                                    <Image
                                        src={city.image}
                                        alt={city.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 z-20 hidden md:flex w-10 h-10 bg-[#FF6200] hover:bg-[#E55800] rounded-full items-center justify-center -mr-5 transition-colors"
                        aria-label="Scroll right"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Pagination Indicator (Visual Only to match design) */}
                <div className="flex justify-center gap-2 mt-4">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FF6200]"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>

            </div>

            {/* Global style to hide scrollbar */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
}
