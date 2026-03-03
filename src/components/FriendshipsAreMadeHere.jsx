import Image from "next/image";

import communityBrunchImg from "../../assets/images/communityBunch.svg";
import closeFriendshipImg from "../../assets/images/closeFirendship.svg";
import circleOfFriendsImg from "../../assets/images/Circel OfFirends.svg";

const cardsData = [
    {
        id: 1,
        image: communityBrunchImg,
        title: "I Made Friends At A Community Brunch",
        description: "Brianna, a New Jersey-based college student, wanted to meet friends in her hometown. She joined a Girls Night Out group on our platform and built meaningful connections with.."
    },
    {
        id: 2,
        image: closeFriendshipImg,
        title: "Turning Casual Connections Into Close Friendships",
        description: "Making close friendships as an adult can be challenging, but it's possible. Here's how our community helps members deepen connections naturally."
    },
    {
        id: 3,
        image: circleOfFriendsImg,
        title: "Do You Have The \"Right\" Circle Of Friends?",
        description: "Research shows friendships come in three tiers. Learn how to cultivate each tier and build a supportive, meaningful social circle within our community."
    }
];

export default function FriendshipsAreMadeHere() {
    return (
        <section className="relative w-full  py-16 overflow-hidden">
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* Header Text */}
                <div
                    className="max-w-4xl mb-12"
                    data-aos="fade-up"
                >
                    <h2
                        className="mb-4 text-[#0F172B] tracking-tight text-4xl sm:text-5xl md:text-[50px] leading-tight md:leading-[1.2]"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        Friendships Are Made Here
                    </h2>
                    <p
                        className="text-base font-regular sm:text-xl text-[#4B4B4B] leading-relaxed"
                        style={{ fontFamily: '"NeuSans Trial", sans-serif' }}
                    >
                        Since our platform launched, members have used it to make new friends, meet like-minded Black men and women, explore hobbies, and connect with locals over shared interests.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardsData.map((card, index) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-[32px] p-6 flex flex-col shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                        >
                            <div className="relative w-full aspect-4/3 rounded-[24px] overflow-hidden mb-6">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <h3
                                className="font-normal mb-3 leading-tight text-[#0F172B]"
                                style={{ fontFamily: '"NeuSans Trial", sans-serif', fontSize: '24px' }}
                            >
                                {card.title}
                            </h3>
                            <p
                                className="text-[#4B4B4B] mb-6 grow"
                                style={{ fontFamily: '"NeuSans Trial", sans-serif', fontSize: '16px', lineHeight: '30px' }}
                            >
                                {card.description}
                            </p>
                            <button className="text-[#E55800] font-medium text-left text-sm hover:underline self-start cursor-pointer">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
