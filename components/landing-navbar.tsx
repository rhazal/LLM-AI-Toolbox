"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { UserButton, useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0, y:20 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 1.5, delay: 1}}
    >
    <nav className="p-4 bg-transparent flex items-center justify-between">
        <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo2.png" />
            </div>
            <h1 className={cn("text-2xl font-bold text-white", font.className)}>
            Ai Toolbox
            </h1>
        </Link>
        <div className="flex items-center gap-x-3">
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="outline" className="rounded-full w-32">
                {isSignedIn? "Dashboard" : "Get Started" } 
            </Button>
            </Link>
            <div className="flex w-full justify-end">
                    <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    </nav>
    </motion.div>
  )
}