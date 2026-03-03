import Image from "next/image";

import discoverEventLeftImg from "../../assets/images/discoveeventleft.png";
import discoverEventRightImg from "../../assets/images/discoveeventright.png";

export default function DiscoverEvents() {
    return (
        <section className="relative w-full py-20 overflow-visible bg-transparent z-20">
            <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mt-12 mb-12">

                {/* 
                    Main Center White Card: 
                    Placed in the center with a very high z-index and explicit negative margins 
                    for the side images to overlap.
                 */}
                <div
                    className="relative z-20 bg-white rounded-[40px] px-8 py-16 sm:px-20 w-full max-w-[1000px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center"
                    data-aos="zoom-in"
                >

                    {/* Left Overlapping Image */}
                    {/* Positioned absolutely relative to the white card to spill out over the left edge */}
                    <div
                        className="hidden lg:block absolute -left-[260px] top-1/2 -translate-y-1/2 w-[480px] aspect-[4/3] z-10"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <Image
                            src={discoverEventLeftImg}
                            alt="Group of friends"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Right Overlapping Image */}
                    {/* Positioned absolutely relative to the white card to spill out over the right edge */}
                    <div
                        className="hidden lg:block absolute -right-[280px] top-[60%] -translate-y-[45%] w-[520px] aspect-[4/3] z-10"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <Image
                            src={discoverEventRightImg}
                            alt="Two friends"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Center Text Content */}
                    <h2
                        className="text-[#0F172B] tracking-tight mb-6 text-3xl sm:text-4xl md:text-[44px] leading-tight max-w-lg mx-auto relative z-30"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        Discover Events,<br />
                        Post Your own, or<br />
                        start a group
                    </h2>

                    <p
                        className="text-[#4B4B4B] text-base md:text-[16px] leading-[1.6] max-w-lg mx-auto mb-8 relative z-30"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        People join our platform to connect with like-minded Black men and women, build real friendships, discover new opportunities, and grow together. From social events to shared passions, this is your space to belong. Start free, and upgrade anytime to unlock our members-only marketplace.
                    </p>

                    <button className="bg-[#FF6200] hover:bg-[#E55800] text-white font-medium rounded-full px-8 py-3 transition-colors cursor-pointer relative z-30">
                        Sign up Free
                    </button>

                </div>
            </div>
        </section>
    );
}
