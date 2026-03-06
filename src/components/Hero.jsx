import Image from "next/image";

import bannerLeftImg from "../../assets/images/bannerLeft.png";
import bannerRightImg from "../../assets/images/bannerright.png";
import heartArrowImg from "../../assets/images/heartspahewith arrow.svg";
import peopleIconImg from "../../assets/images/people.svg";
import spiralIconImg from "../../assets/images/Spiral.svg";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden font-sans py-16 md:py-32 flex items-center justify-center mt-[100px]">

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row items-center justify-center h-full">

                {/* Left Image Group */}
                <div
                    className="relative w-full md:w-auto hidden md:flex flex-1 justify-center md:justify-end mt-12 md:mt-0 order-2 md:order-1 px-4 animate-float-up-down"
                >
                    <div className="relative max-w-[400px] w-full">
                        <Image
                            src={bannerLeftImg}
                            alt="Two friends smiling"
                            width={500}
                            height={500}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Center Content */}
                <div
                    className="flex flex-col items-center justify-center text-center w-full md:max-w-3xl z-20 relative px-4 order-1 md:order-2"
                    data-aos="zoom-in"
                >

                    <div className="relative mb-6 w-full flex justify-center px-2 md:px-0">
                        <h1
                            className="font-medium text-[#0F172B] tracking-tight relative z-10 text-4xl sm:text-5xl md:text-[50px] leading-tight md:leading-[60px]"
                            style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                        >
                            <span className="inline-block whitespace-nowrap">
                                Where{' '}
                                <span className="inline-block align-middle relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-1 -mt-2">
                                    <Image src={peopleIconImg} alt="People icon" fill style={{ objectFit: 'contain' }} />
                                </span>
                                {' '}People
                            </span>
                            {' '}connect,<br className="hidden md:block" />
                            {' '}Interests grow,{' '}
                            <span className="inline-block align-middle relative w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rotate-12 mx-1 -mt-1">
                                <Image src={spiralIconImg} alt="Spiral" fill style={{ objectFit: 'contain' }} />
                            </span>
                            <br className="hidden md:block" />
                            {' '}<span className="hidden md:inline-block align-middle relative w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mx-1 -mt-2">
                                <Image src={heartArrowImg} alt="Heart arrow" fill style={{ objectFit: 'contain' }} />
                            </span>
                            {' '}Friendships begin.
                        </h1>
                    </div>

                    <p
                        className="text-[#4B4B4B] font-normal mb-8 max-w-[90%] sm:max-w-lg mx-auto text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-normal"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Where Sistah's are honored & cherished, People Connect,
                        Dreams Interests are born, & Friendships begin & grow.
                    </p>
                    <button
                        className="bg-[#FF6200] hover:bg-[#E55800] text-white font-medium rounded-full px-8 py-3 transition-colors cursor-pointer"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Get Started
                    </button>
                </div>

                {/* Right Image Group */}
                <div
                    className="relative w-full md:w-auto hidden md:flex flex-1 justify-center md:justify-start mt-12 md:mt-0 order-3 px-4 animate-float-down-up"
                >
                    <div className="relative max-w-[450px] w-full">
                        <Image
                            src={bannerRightImg}
                            alt="Three friends walking"
                            width={500}
                            height={500}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
