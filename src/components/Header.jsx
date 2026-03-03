"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, User, Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Helper to close one when the other opens
    const toggleMobileSearch = () => {
        setIsMobileSearchOpen(!isMobileSearchOpen);
        if (!isMobileSearchOpen) setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) setIsMobileSearchOpen(false);
    };

    return (
        <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm relative">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                {/* Left: Logo */}
                <Link href="/" className="flex-shrink-0 flex items-center">
                    {/* We assume logo.svg is in the public folder */}
                    <Image
                        src="/logo.svg"
                        alt="BlackLinx Logo"
                        width={180}
                        height={48}
                        priority
                        className="w-auto h-8 md:h-10 lg:h-12"
                    />
                </Link>

                {/* Middle: Search Bar (Hidden on Mobile) */}
                <div className="hidden lg:flex flex-1 max-w-[700px] mx-8 bg-[#F8F9FA] rounded-full p-1.5 border border-gray-200 focus-within:ring-2 focus-within:ring-primary/20 transition-all items-center">

                    <div className="flex-1 flex items-center px-4">
                        <Search className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent w-full text-base outline-none placeholder:text-gray-400 text-foreground"
                        />
                    </div>

                    <div className="w-[1px] h-7 bg-gray-200 mx-1 flex-shrink-0"></div>

                    <div className="flex-[0.8] flex items-center px-4">
                        <MapPin className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Your Location"
                            className="bg-transparent w-full text-base outline-none placeholder:text-gray-400 text-foreground truncate"
                        />
                    </div>

                    <button className="bg-primary hover:bg-[#E55800] transition-colors p-3 rounded-full text-white flex-shrink-0 shadow-sm">
                        <Search className="w-5 h-5" />
                    </button>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Mobile Search Toggle */}
                    <button
                        className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                        onClick={toggleMobileSearch}
                        aria-label="Toggle mobile search"
                    >
                        {isMobileSearchOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Search className="w-5 h-5" />
                        )}
                    </button>

                    <Link
                        href="/login"
                        className="hidden sm:flex items-center gap-2 text-[#4B4B4B] font-medium hover:text-primary transition-colors text-sm lg:text-base"
                    >
                        <User className="w-[22px] h-[22px]" />
                        <span>Log In</span>
                    </Link>

                    <Link
                        href="/signup"
                        className="hidden sm:block bg-primary hover:bg-[#E55800] shadow-sm transition-colors text-white px-6 py-2.5 lg:px-7 lg:py-[11px] rounded-full font-medium text-sm lg:text-base whitespace-nowrap"
                    >
                        Sign up
                    </Link>

                    {/* Mobile Menu Button - Also acts as Login/Signup breadcrumb trigger */}
                    <button
                        className="sm:hidden p-2 text-foreground hover:text-primary transition-colors"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

            </div>

            {/* Mobile Search Bar (Expandable) */}
            {isMobileSearchOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full px-4 pb-4 pt-2 bg-white border-t border-gray-100 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-md">
                    <div className="flex items-center bg-[#F8F9FA] rounded-full p-2 border border-gray-200 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                        <Search className="text-gray-400 w-4 h-4 ml-2 mr-2 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent w-full text-sm outline-none placeholder:text-gray-400 text-foreground py-1"
                            autoFocus
                        />
                    </div>

                    <div className="flex items-center bg-[#F8F9FA] rounded-full p-2 border border-gray-200 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                        <MapPin className="text-gray-400 w-4 h-4 ml-2 mr-2 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Location..."
                            className="bg-transparent w-full text-sm outline-none placeholder:text-gray-400 text-foreground py-1"
                        />
                    </div>

                    <button className="w-full bg-primary hover:bg-[#E55800] transition-colors p-3 rounded-full text-white font-medium text-sm shadow-sm flex items-center justify-center gap-2">
                        <Search className="w-4 h-4" />
                        Search
                    </button>
                </div>
            )}

            {/* Mobile Breadcrumb Menu (Expandable) */}
            {isMobileMenuOpen && (
                <div className="sm:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 shadow-md">
                    <div className="flex flex-col">
                        <Link
                            href="/login"
                            className="flex items-center justify-between px-6 py-4 border-b border-gray-50 text-[#4B4B4B] font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="flex items-center gap-3">
                                <User className="w-5 h-5 text-gray-400" />
                                <span>Log In</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                        </Link>

                        <div className="px-6 py-4">
                            <Link
                                href="/signup"
                                className="block w-full text-center bg-primary hover:bg-[#E55800] transition-colors text-white py-3 rounded-full font-medium shadow-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
