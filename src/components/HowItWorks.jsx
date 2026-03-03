import Image from "next/image";

import platformWorksImg from "../../assets/images/platformWorks.svg";
import eventsbellImg from "../../assets/images/eventsbell.svg";
import connectpeopleImg from "../../assets/images/connectpeople.svg";
import unlockMarketPlaceImg from "../../assets/images/unlockMarketPlace.svg";

const cardsData = [
    {
        id: 1,
        image: eventsbellImg,
        title: "Discover Events",
        description: "See which local events and meetups are happening for the things you love, social, networking, and cultural activities designed for our community.",
        linkText: "Search Events",
        linkColor: "#FF6200"
    },
    {
        id: 2,
        image: connectpeopleImg,
        title: "Connect With Your People",
        description: "Meet like-minded Black men and women, connect over shared interests, and enjoy meaningful experiences together.",
        linkText: "Find Your Circle",
        linkColor: "#00BFA5"
    },
    {
        id: 3,
        image: unlockMarketPlaceImg,
        title: "Unlock the Marketplace",
        description: "Paid members can access our exclusive marketplace, buy, sell, or trade products and services within your community.",
        linkText: "Search Events",
        linkColor: "#00BFA5"
    }
];

export default function HowItWorks() {
    return (
        <section className="relative w-full py-16 overflow-hidden">
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div
                    className="text-center mb-16 lg:mb-20"
                    data-aos="fade-up"
                >
                    <h2
                        className="text-[#0F172B] tracking-tight text-4xl sm:text-5xl md:text-[50px] leading-tight md:leading-[1.2] "
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        How Our Platform Works
                    </h2>
                </div>

                {/* Layout Container */}
                <div className="relative w-full min-h-[1200px] lg:min-h-[900px] flex flex-col lg:block items-center mt-12 lg:mt-0 px-4 sm:px-0">

                    {/* Card 1: Discover Events */}
                    <div
                        className="relative w-full max-w-[520px] lg:absolute lg:top-0 lg:left-[5%] bg-white rounded-[32px] p-6 sm:p-8 sm:pl-[130px] pt-20 sm:pt-10 drop-shadow-sm mb-20 lg:mb-0"
                        data-aos="fade-right"
                    >
                        {/* Icon over top-left corner */}
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-16 sm:-top-10 w-32 h-32 sm:w-40 sm:h-40 drop-shadow-md">
                            <Image src={cardsData[0].image} alt={cardsData[0].title} fill className="object-contain" />
                        </div>
                        <div className="flex flex-col gap-2 text-center sm:text-left relative z-10">
                            <h3 className="font-medium text-[22px] text-[#0F172B]" style={{ fontFamily: '"NeuSans Trial", sans-serif' }}>
                                {cardsData[0].title}
                            </h3>
                            <p className="font-normal text-[#4B4B4B] text-[16px] leading-[1.6]" style={{ fontFamily: '"NeuSans Trial", sans-serif' }}>
                                {cardsData[0].description}
                            </p>
                            <a href="#" className="text-[14px] font-bold mt-2 hover:opacity-80 transition-opacity flex items-center justify-center sm:justify-start gap-1" style={{ color: cardsData[0].linkColor, fontFamily: '"NeuSans Trial", sans-serif' }}>
                                {cardsData[0].linkText}
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Connect With Your People */}
                    <div
                        className="relative w-full max-w-[520px] lg:absolute lg:top-[22%] lg:right-[5%] bg-white rounded-[32px] p-6 sm:p-8 sm:pl-[130px] pt-20 sm:pt-10 drop-shadow-sm mb-20 lg:mb-0"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-16 sm:-top-10 w-32 h-32 sm:w-40 sm:h-40 drop-shadow-md">
                            <Image src={cardsData[1].image} alt={cardsData[1].title} fill className="object-contain" />
                        </div>
                        <div className="flex flex-col gap-2 text-center sm:text-left relative z-10">
                            <h3 className="font-medium text-[22px] text-[#0F172B]" style={{ fontFamily: '"NeuSans Trial", sans-serif' }}>
                                {cardsData[1].title}
                            </h3>
                            <p className="font-normal text-[#4B4B4B] text-[16px] leading-[1.6]" style={{ fontFamily: '"NeuSans Trial", sans-serif' }}>
                                {cardsData[1].description}
                            </p>
                            <a href="#" className="text-[14px] font-bold mt-2 hover:opacity-80 transition-opacity flex items-center justify-center sm:justify-start gap-1" style={{ color: cardsData[1].linkColor, fontFamily: '"NeuSans Trial", sans-serif' }}>
                                {cardsData[1].linkText}
                            </a>
                        </div>
                    </div>

                    {/* Main Image: Platform Works (Two Girls) */}
                    <div
                        className="relative w-full max-w-[460px] aspect-square object-contain lg:absolute lg:top-[35%] lg:left-[0%] mb-20 lg:mb-0 z-0"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <Image src={platformWorksImg} alt="Platform Works" fill className="object-contain" />
                    </div>

                    {/* Card 3: Unlock the Marketplace */}
                    <div
                        className="relative w-full max-w-[520px] lg:absolute lg:top-[60%] lg:right-[15%] bg-white rounded-[32px] p-6 sm:p-8 sm:pl-[130px] pt-20 sm:pt-10 drop-shadow-sm mb-20 lg:mb-0 z-20"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-16 sm:-top-10 w-32 h-32 sm:w-40 sm:h-40 drop-shadow-md">
                            <Image src={cardsData[2].image} alt={cardsData[2].title} fill className="object-contain" />
                        </div>
                        <div className="flex flex-col gap-2 text-center sm:text-left relative z-10">
                            <h3 className="font-medium text-[22px] text-[#0F172B]" style={{ fontFamily: '"NeuSans Trial", sans-serif' }}>
                                {cardsData[2].title}
                            </h3>
                            <p className="font-normal text-[#4B4B4B] text-[16px] leading-[1.6]" style={{ fontFamily: '"NeuSans Trial", sans-serif' }}>
                                {cardsData[2].description}
                            </p>
                            <a href="#" className="text-[14px] font-bold mt-2 hover:opacity-80 transition-opacity flex items-center justify-center sm:justify-start gap-1" style={{ color: cardsData[2].linkColor, fontFamily: '"NeuSans Trial", sans-serif' }}>
                                {cardsData[2].linkText}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
