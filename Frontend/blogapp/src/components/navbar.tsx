"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from "@/components/themebtn"


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-opacity-50 border-b-[0.1px] border-gray-600 backdrop-blur-md shadow-lg z-50 ">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <div className="text-2xl font-semibold">
                            <Link href="/"><span className='dark:text-primary text-primary-foreground'>Dev.</span>SHAKIB</Link>
                        </div>
                    </div>

                    {/* Centered Menu Items */}
                    <div className="flex-1 flex justify-center">
                        <div className="hidden sm:flex space-x-8">
                            <Link href="/" className=" dark:hover:text-[#FACC15] hover:text-primary-foreground transition duration-300 ease-in-out text-lg p-2 rounded">Home</Link>
                            <Link href="/about" className=" dark:hover:text-[#FACC15] hover:text-primary-foreground transition duration-300 ease-in-out text-lg p-2 rounded">About</Link>
                            <Link href="/blog" className=" dark:hover:text-[#FACC15] hover:text-primary-foreground transition duration-300 ease-in-out text-lg p-2 rounded">Blog</Link>
                            <Link href="/contact" className=" dark:hover:text-[#FACC15] hover:text-primary-foreground transition duration-300 ease-in-out text-lg p-2 rounded">Contact</Link>
                        </div>
                    </div>

                    {/* Contact Me Button (on the right) */}
                    <div className="hidden sm:flex items-center">
                        <Link href="/login">
                            <Button className='bg-[#FACC15] mr-2 text-gray-900' variant="outline"> Log In </Button>
                        </Link>
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">

                        <Sheet>
                            <SheetTrigger>

                                <button
                                    onClick={toggleMenu}
                                    className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-600"
                                    aria-controls="mobile-menu"
                                    aria-expanded={isOpen}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {isOpen ? (
                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    )}
                                </button>

                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Brand</SheetTitle>
                                    <SheetDescription>
                                        {/* Mobile Menu */}
                                        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                                            <div className=" bg-opacity-50 backdrop-blur-lg px-2 pt-2 pb-3 space-y-1">
                                                <Link href="/" className=" hover:bg-[#FACC15] hover:text-gray-950 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                                                <Link href="/about" className=" hover:bg-[#FACC15] hover:text-gray-950 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                                                <Link href="/blog" className=" hover:bg-[#FACC15] hover:text-gray-950 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                                                <Link href="/contact" className=" hover:bg-[#FACC15] hover:text-gray-950 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                                                <Link href="/login">
                                                    <Button className='bg-[#FACC15] mt-8 text-gray-900' variant="outline"> Log In </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>


                    </div>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
