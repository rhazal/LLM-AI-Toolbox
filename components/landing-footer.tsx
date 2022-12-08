"use client";

import { motion } from "framer-motion";

import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb"



const LandingFooter = () => {
    return (
        <div className="text-white font-bold py-6 text-center space-y-5">
            <div className="text-sm sm:text-base md:text-lg lg:text-xl space-y-5 font-extrabold">
                <h1>About the Developer</h1>
                <p className="text-sm font-normal px-10 md:px-32 text-zinc-400"> 
                    Hello, my name is Devon Gifford! <br/> I am a dedicated full-stack developer with a strong passion for learning and problem-solving.<br/> My expertise lies in front-end and back-end development, specializing in creating user-friendly and responsive web applications
                </p>
                <div className="flex justify-around px-10 sm:px-32 ">
                    
                    <motion.div 
                      initial={{ opacity: 0, y:20 }}
                      whileInView={{ opacity: 1, y:0 }}
                      transition={{ duration: 1.5,}}
                    >
                        <a href="https://github.com/DevonGifford" target='_blank' >
                          <div className="text-zinc-200 hover:text-green-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                            <span className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center '>
                                <SiGithub />
                            </span>
                            <h3>Github</h3>
                          </div>
                        </a>
                    </motion.div>


                    {/* LinkedIn Icon */}
                    <motion.div 
                      initial={{ opacity: 0, y:20 }}
                      whileInView={{ opacity: 1, y:0 }}
                      transition={{ duration: 1.5,}}
                    >
                        <a href="https://www.linkedin.com/in/dbgifford/" target='_blank' className="text-zinc-200 hover:text-green-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                          <div className="text-zinc-200 hover:text-green-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                            <span className='w-10 h-10 text-xl bg-bodyColorrounded-full inline-flex items-center justify-center'>
                            <BsLinkedin />
                            </span>
                            <h3>LinkedIn</h3>  
                          </div>
                        </a>

                    </motion.div>

                     {/* Portfolio Icon 🎯*/} 
                     <motion.div 
                      initial={{ opacity: 0, y:20 }}
                      whileInView={{ opacity: 1, y:0 }}
                      transition={{ duration: 1.5,}}
                    > 
                        <a href="https://devongifford.vercel.app/" target='_blank' className="text-zinc-200 hover:text-green-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                          <div className="text-zinc-200 hover:text-green-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                            <span className='w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center'>
                            <TbWorldWww />
                            </span>
                            <h3>Portfoliio</h3>
                          </div>
                        </a>
                    </motion.div>

                </div>
            </div>
        </div>
     );
}
 
export default LandingFooter;