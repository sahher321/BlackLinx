import Image from "next/image";

import exploreEventsImg from "../../assets/images/exploreEvents.svg";
import seeSuccessStoriesImg from "../../assets/images/seesuccessstories.svg";
import joinCommunityImg from "../../assets/images/joincommunity.svg";

const sliderData = [
    {
        id: 1,
        image: exploreEventsImg,
        title: "Explore Events"
    },
    {
        id: 2,
        image: seeSuccessStoriesImg,
        title: "See Success Stories"
    },
    {
        id: 3,
        image: joinCommunityImg,
        title: "Join The Community"
    }
];

export default function CommunitySlider() {
    return (
        <section className="relative w-full py-8 overflow-hidden">
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-16 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

                {/* Left Text Content */}
                <div
                    className="w-full lg:w-4/12 flex flex-col items-start text-left lg:pt-10"
                    data-aos="fade-right"
                >
                    <p
                        className="text-[#00BFA5]  text-lg mb-4"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        What makes Black Linx different?
                    </p>
                    <h2
                        className="text-[#0F172B] tracking-tight mb-6 text-4xl sm:text-5xl md:text-[50px] leading-tight md:leading-[1.2]"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        The most $1M+ communities
                    </h2>
                    <p
                        className="font-normal text-[#4B4B4B] text-base sm:text-lg md:text-[18px] leading-relaxed"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        We're creating a powerful platform to bring Black men and women together, to connect, share interests, grow networks, and build real friendships. From social events to meaningful conversations and exclusive marketplace access for members, everything here is designed to help our community thrive.
                    </p>
                </div>

                {/* Right Cards Grid */}
                <div className="w-full lg:w-8/12 mt-10 lg:mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8">
                        {sliderData.map((item, index) => (
                            <div
                                key={item.id}
                                className="flex flex-col bg-white rounded-3xl p-4 shadow-sm w-full"
                                data-aos="fade-up"
                                data-aos-delay={100 * (index + 1)}
                            >
                                <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden mb-5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <h3
                                    className="font-medium text-[#0F172B] text-lg sm:text-xl text-center pb-2"
                                    style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                                >
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
