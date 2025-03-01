"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

const darkBg = "/spheres-dark.png";
const lightBg = "/spheres-light.png";
const banner = "/banner.webp";


const Home: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [titleUrl, setTitleUrl] = useState<string | null>(null);
    const [bioUrl, setBioUrl] = useState<string | null>(null);

    // fetch hero image
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/heroimg/");
                if (!response.ok) throw new Error("Failed to fetch image");

                const data = await response.json();
                setImageUrl(data.image_url);
            } catch (error) {
                console.error("Error fetching image:", error);
            }
        };

        fetchImage();
    }, []);

    // fetch hero title
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/");
                if (!response.ok) throw new Error("Failed to fetch data");

                const data = await response.json();
                setTitleUrl(data.title);
                setBioUrl(data.body);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <section className="h-screen bg-gray-100 dark:bg-gray-950 w-screen md:flex justify-center items-center">
                {titleUrl && bioUrl ? (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center  flex flex-col justify-center p-8 bg-contain bg-no-repeat bg-center 
               bg-[url('/spheres-light.png')] dark:bg-[url('/spheres-dark.png')]"
                    >
                        <h1 className="text-[35px] font-bold uppercase">Sheikh Shamiul Shakib</h1>
                        <h1 className="text-[55px] font-bold text-primary-foreground dark:bg-gradient-to-b dark:from-[#FACC15] dark:to-[#ad8f16] dark:bg-clip-text dark:text-transparent">
                            <Typewriter
                                options={{
                                    strings: [titleUrl],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100, // Slower typing speed
                                    deleteSpeed: 50, // Slower deleting speed
                                    cursor: "_", // Custom cursor (optional)
                                }}
                            />
                        </h1>

                        <p className="text-[20px] dark:text-[#d4d4d4] font-semibold mt-2">{bioUrl}</p>

                        <div className="flex gap-4 justify-center mt-14">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="dark:bg-primary bg-primary-foreground dark:text-primary-foreground text-primary text-[15px] px-10 py-6" variant="outline">
                                    <FaGithub /> GitHub
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="text-[15px] px-10 py-6" variant="outline">
                                    <FaCloudDownloadAlt /> Resume
                                </Button>
                            </motion.div>
                        </div>

                    </motion.div>

                ) : (
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="w-8 h-8 border-4 border-gray-900 border-t-primary rounded-full animate-spin"></div>
                    </div>
                )}

                {/* {imageUrl ? (
                    <motion.img
                        src={imageUrl}
                        alt="Hero Image"
                        className="w-[35%] mr-[10%] h-auto rounded-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                ) : (
                    <p>...</p>
                )} */}
            </section>
            <section className="h-auto w-screen">
                <img className="mt-[-10%]" src="/banner.png" alt="" />
            </section>
        </>
    );
};

export default Home;
