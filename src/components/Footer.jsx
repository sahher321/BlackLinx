import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { MoveRight } from "lucide-react";

import playStorePng from "../../assets/images/playstore.png";
import appStorePng from "../../assets/images/appstore.png";

export default function Footer() {
    return (
        <footer className="w-full bg-white flex justify-center pb-4 sm:pb-8 font-poppins">
            <div className="w-full mx-4 sm:mx-8 bg-[#1A1A1C] rounded-[32px] px-8 sm:px-12 lg:px-16 pt-16 pb-8 text-white">
                <div className="max-w-[1440px] mx-auto">
                    {/* Top Section: Logo & CTA */}
                    <div
                        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-white/10"
                        data-aos="fade-down"
                    >
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/logo.svg"
                                alt="BlackLinx Logo"
                                width={200}
                                height={55}
                                priority
                                className="w-auto h-10 md:h-12 brightness-0 invert"
                            // Using CSS filter to make the dark logo white
                            />
                        </Link>

                        <div className="flex items-center gap-4 text-sm md:text-base">
                            <span>Create your own Meetup group</span>
                            <Link href="/get-started" className="flex items-center gap-2 text-primary font-medium  transition-colors">
                                Get Started
                                <MoveRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Middle Section: Links Grid */}
                    <div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-14"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >

                        {/* Column 1 */}
                        <div className="flex flex-col gap-5">
                            <h3 className="font-medium text-xl mb-4">Your Account</h3>
                            <Link href="/signup" className="text-base hover:text-primary transition-colors">Sign Up</Link>
                            <Link href="/login" className="text-base hover:text-primary transition-colors">Login</Link>
                            <Link href="/help" className="text-base hover:text-primary transition-colors">Help</Link>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-5">
                            <h3 className="font-medium text-xl mb-4">Discover</h3>
                            <Link href="/friends" className="text-base hover:text-primary transition-colors">Frends</Link>
                            <Link href="/groups" className="text-base hover:text-primary transition-colors">Groups</Link>
                            <Link href="/marketplace" className="text-base hover:text-primary transition-colors">Marketplace</Link>
                            <Link href="/cities" className="text-base hover:text-primary transition-colors">Cities</Link>
                            <Link href="/events" className="text-base hover:text-primary transition-colors">Events</Link>
                            <Link href="/make-friends" className="text-base hover:text-primary transition-colors">Make Frends</Link>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-5">
                            <h3 className="font-medium text-xl mb-4">Quick Links</h3>
                            <Link href="/about" className="text-base hover:text-primary transition-colors">About</Link>
                            <Link href="/blog" className="text-base hover:text-primary transition-colors">Blog</Link>
                            <Link href="/meet-friends" className="text-base hover:text-primary transition-colors">Meet Frends</Link>
                            <Link href="/careers" className="text-base hover:text-primary transition-colors">Careers</Link>
                            <Link href="/app" className="text-base hover:text-primary transition-colors">App</Link>
                            <Link href="/podcast" className="text-base hover:text-primary transition-colors">Podcast</Link>
                        </div>

                        {/* Column 4 */}
                        <div className="flex flex-col gap-5">
                            <h3 className="font-medium text-xl mb-4">Support</h3>
                            <Link href="/terms" className="text-base hover:text-primary transition-colors">Terms of Services</Link>
                            <Link href="/privacy" className="text-base hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link href="/cookies" className="text-base hover:text-primary transition-colors">Cookies Policy</Link>
                            <Link href="/cookie-settings" className="text-base hover:text-primary transition-colors">Cookies Setting</Link>
                            <Link href="/licenses" className="text-base hover:text-primary transition-colors">Licenses Attribution</Link>
                        </div>

                    </div>

                    {/* Bottom Section: Socials & App Links */}
                    <div
                        className="flex flex-col lg:flex-row gap-6 mb-12"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >

                        {/* Socials Card */}
                        <div className="flex-1 bg-white/5 rounded-2xl p-8 flex flex-col items-center justify-center gap-6">
                            <span className="font-medium text-xl">Follow us</span>
                            <div className="flex items-center gap-5 sm:gap-7">
                                <Link href="#" className="hover:text-primary transition-colors">
                                    <Icon icon="mdi:instagram" className="w-7 h-7" />
                                </Link>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    <Icon icon="mdi:facebook" className="w-7 h-7" />
                                </Link>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    <Icon icon="ri:twitter-x-fill" className="w-7 h-7" />
                                </Link>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    <Icon icon="mdi:youtube" className="w-7 h-7" />
                                </Link>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    <Icon icon="mdi:linkedin" className="w-7 h-7" />
                                </Link>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    <Icon icon="ri:google-fill" className="w-7 h-7" />
                                </Link>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    <Icon icon="ic:outline-tiktok" className="w-7 h-7" />
                                </Link>
                            </div>
                        </div>

                        {/* App Links Card */}
                        <div className="flex-1 bg-white/5 rounded-2xl p-8 flex flex-col items-center justify-center gap-6">
                            <span className="font-medium text-xl">Get Started</span>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    <Image src={playStorePng} alt="Get it on Google Play" width={140} height={42} className="h-[42px] w-auto" />
                                </Link>
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    <Image src={appStorePng} alt="Download on the App Store" width={140} height={42} className="h-[42px] w-auto" />
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Copyright */}
                    <div className="pt-8 border-t border-white/10 text-base">
                        © 2026 Black Linx. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
}
