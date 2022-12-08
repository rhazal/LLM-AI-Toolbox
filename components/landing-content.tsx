"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import {   
    devon,
    christine,
    maggie,
    marc,
    norman,
    simon,
} from '../lib/image-imports';




const testimonials = [
  {
    name: "Devon",
    avatar: devon,
    title: "Software Engineer",
    description: "This is the best application I've ever used!  AI helps me everyday",
  },
  {
    name: "Christine",
    avatar: christine,
    title: "Marketing Guru",
    description: "I use this daily for generating new photos and writing blogs!",
  },
  {
    name: "Simon",
    avatar: simon,
    title: "CEO",
    description: "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Marc",
    avatar: marc,
    title: "CFO",
    description: "The best in class, definitely worth the premium subscription!",
  },
  {
    name: "Maggie",
    avatar: maggie,
    title: "Artist/Designer",
    description: "Love this app, all the tools I use on a daily basis in one place - brilliant",
  },
  {
    name: "Norman",
    avatar: norman,
    title: "Tech-enthusiast",
    description: "So clean and easy to use, can't recommend this app enough",
  },
];

export const LandingContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y:40}}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 1.5, delay: 1}}
    >

    
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {testimonials.map((item) => (
            <Tilt key={item.description}>
            <Card key={item.description} className="bg-[#192339] border-none text-white">
                <CardHeader>
                <CardTitle className="flex items-center gap-x-6">
                    <div className="flex w-full justify-between">
                        <div>
                          <p className="text-lg">{item.name}</p>
                          <p className="text-zinc-400 text-sm">{item.title}</p>
                        </div>
                        <Image src={item.avatar} alt={`${item.name}`} className="rounded-full h-16 w-16 mr-[10px]" />
                    </div>
                </CardTitle>
                <CardContent className="pt-4 px-0 h-20 md:h-28 ">
                    {item.description}
                </CardContent>
                </CardHeader>
            </Card>
           </Tilt>
        ))}
      </div>
    </div>
    </motion.div>
  )
}