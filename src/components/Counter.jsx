"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const counterData = [
    {
        id: 1,
        count: 4.3,
        suffix: "M+",
        decimals: 1,
        label: "Woman Connect"
    },
    {
        id: 2,
        count: 9,
        suffix: "+",
        decimals: 0,
        label: "Year of Experience"
    },
    {
        id: 3,
        count: 358,
        suffix: "+",
        decimals: 0,
        label: "Excellence Awards"
    },
    {
        id: 4,
        count: 47,
        suffix: "+",
        decimals: 0,
        label: "Brand Partners"
    }
];

export default function Counter() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="relative w-full overflow-hidden" ref={ref}>
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto max-w-[1050px] divide-y md:divide-y-0 md:divide-x divide-gray-200/60 pb-8 md:pb-0">
                    {counterData.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center justify-center py-6 md:py-8 px-4 w-full md:flex-1 text-center"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                        >
                            <h3
                                className="font-medium text-[#0F172B] tracking-tight whitespace-nowrap text-4xl md:text-[50px] leading-tight mb-3"
                                style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                            >
                                {inView ? (
                                    <CountUp
                                        start={0}
                                        end={item.count}
                                        duration={2.5}
                                        separator=","
                                        decimals={item.decimals}
                                        suffix={item.suffix}
                                    />
                                ) : "0" + item.suffix}
                            </h3>
                            <p
                                className="font-normal text-[#4B4B4B] text-base md:text-[20px] whitespace-nowrap"
                                style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                            >
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

