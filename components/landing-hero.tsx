"use client";

import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-32 text-center space-y-5">
      
      <motion.div 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold"
        initial={{ opacity: 0, y:-20 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 1.5}}
      >
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-2">
          <TypewriterComponent
            options={{
              strings: [
                //"",
                "Chatbot.",
                "Photo Generation.",
                "Code Assistant.",
                "Blog Writing.",
                "Video Generation.",
                "Mail Writing.",
                "Audio Generation."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1, y:0}}
        transition={{ duration: 1.5, delay: 0.3}}
        className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster.
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1, y:0}}
        transition={{ duration: 1.5, delay: 0.6}}
      >
        <motion.div
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.8 }}
        >
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
              Start Generating For Free
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ y:10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8}}
        className="text-zinc-400 text-xs md:text-sm font-normal"
      >
        No credit card required.
      </motion.div>


    </div>
  );
};