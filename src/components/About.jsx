import Image from "next/image";
import aboutImg from "../../assets/images/aboutBlackLinx.svg";

export default function About() {
    return (
        <section className="relative w-full py-8 overflow-hidden">
            <div className="relative z-10 max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24 justify-center h-full">
                {/* Left Image */}
                <div
                    className="w-full md:w-5/12 flex justify-center md:justify-end"
                    data-aos="fade-right"
                >
                    <div className="relative w-full max-w-[400px] aspect-square rounded-4xl overflow-hidden drop-shadow-xl">
                        <Image
                            src={aboutImg}
                            alt="About BlackLinx"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div
                    className="w-full md:w-7/12 flex flex-col items-start text-left max-w-[600px]"
                    data-aos="fade-left"
                >
                    <h2
                        className="font-medium text-[#0F172B] tracking-tight mb-6 text-4xl sm:text-5xl md:text-[50px] leading-tight md:leading-[1.2]"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        About BlackLinx
                    </h2>
                    <p
                        className="font-normal text-[#4B4B4B] text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-[1.6]"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        We're creating a Unique & powerful platform aimed at Honoring,
                        Respecting, Loving-up on Sistah's/ Black Women/Black
                        Females. Part of our platform will bring Black Women & Men
                        together as well a people from all walks of life in general. The
                        Black Community can connect with each other in meaningful
                        ways. Connections, sharing interests, developing & growing
                        networks, build friendships access resources for better living &
                        more. From Social events to meaningful connection, & exclusive
                        marketplace access for members including, all of which is
                        designed to not only focus on Respecting Sistah's, but help our
                        community thrive!"
                    </p>
                </div>
            </div>
        </section>
    );
}
