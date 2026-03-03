"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

import deliciousfoodImg from "../../assets/images/deliciousfood.svg";
import tshirtsandapperalImg from "../../assets/images/tshirtsandapperal.svg";
import phoneaccesoriesImg from "../../assets/images/phoneaccesories.svg";
import snealersImg from "../../assets/images/snealers.svg";
import bodyAndhairImg from "../../assets/images/bodyAndhair.svg";
import jewelryaccessoriesImg from "../../assets/images/jewelryaccessories.svg";

const categoryData = [
    {
        id: "01",
        title: "Delicious Foods",
        image: deliciousfoodImg
    },
    {
        id: "02",
        title: "T-Shirts &\nOther Apparel",
        image: tshirtsandapperalImg
    },
    {
        id: "03",
        title: "Phone\nAccessories",
        image: phoneaccesoriesImg
    },
    {
        id: "04",
        title: "Sneakers &\nFootwear",
        image: snealersImg
    },
    {
        id: "05",
        title: "Body & Hair\nCare Products",
        image: bodyAndhairImg
    },
    {
        id: "06",
        title: "Statement Earrings,\nJewelry & accessories",
        image: jewelryaccessoriesImg
    }
];

export default function BuyAndSell() {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Auto slider logic
        // The user asked for an "auto slider of 0.2 sec", which usually means a transition of 0.2s 
        // or they meant continuous smooth ticking. We'll use a standard interval for sliding.
        // Assuming 2000ms (2s) interval for a readable auto-scroll pacing.
        const intervalId = setInterval(() => {
            // Check if we're near the end of the scroll
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                // Instantly snap back to start (or smooth scroll back to 0)
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Scroll right by approximately one card width plus gap (~324px)
                container.scrollBy({ left: 324, behavior: "smooth" });
            }
        }, 2000);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    return (
        <section className="relative w-full py-16 overflow-hidden">
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
                        Buy & Sell in Our Community
                    </h2>
                    <p
                        className="font-normal text-[#4B4B4B] text-base md:text-lg max-w-2xl"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        Connections & Friendships are Made Here.Shopping, Buy & Sell in Our Community.
                    </p>
                </div>

                {/* Horizontal Scrolling Cards */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 snap-x hide-scrollbar scroll-smooth"
                >
                    {categoryData.map((category) => (
                        <div
                            key={category.id}
                            className="snap-start shrink-0 flex flex-col bg-white rounded-3xl p-5 sm:p-6 shadow-sm min-w-[260px] sm:min-w-[300px] max-w-[300px]"
                        >
                            {/* Card Header (Title + Number) */}
                            <div className="flex justify-between items-start mb-6">
                                <h3
                                    className="font-medium text-[20px] text-[#0F172B] leading-[1.3] whitespace-pre-wrap max-w-[85%]"
                                    style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                                >
                                    {category.title}
                                </h3>
                                <span
                                    className="text-[#FF6200] font-bold text-sm leading-tight ml-2 mt-1"
                                    style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                                >
                                    {category.id}
                                </span>
                            </div>

                            {/* Card Image */}
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mt-auto">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    ))}
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
