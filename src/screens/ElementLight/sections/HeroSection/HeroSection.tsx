import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full pt-[180px] pb-[100px] px-10">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="relative w-full h-full opacity-50">
          <div className="w-full h-full bg-black">
            <div className="w-full h-full bg-gradient-to-br from-blue-900/30 via-black to-orange-900/20 blur-[5px] opacity-60" />
          </div>
        </div>
        <div className="absolute w-[410px] h-[410px] top-[395px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-900/20 to-orange-900/20 rounded-[296px] blur-3xl" />
      </div>

      {/* Content container */}
      <div className="flex flex-col items-center justify-center gap-[25px] z-[3]">
        {/* New badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-start relative"
        >
          <Badge className="flex items-center gap-[5px] pl-0.5 pr-2.5 py-0.5 bg-gray-900/80 rounded-[20px] border border-solid border-gray-700 backdrop-blur-sm">
            <span className="inline-flex items-center justify-center px-2 py-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl">
              <span className="[font-family:'Onest',Helvetica] font-medium text-white text-sm tracking-[-0.28px] leading-[16.8px]">
                New
              </span>
            </span>
            <span className="[font-family:'Onest',Helvetica] font-medium text-white text-sm tracking-[-0.28px] leading-[16.8px]">
              Automated Lead Generation
            </span>
          </Badge>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center gap-[25px] max-w-[1840px] w-full z-[2]">
          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-2.5 w-full"
          >
            <div className="flex flex-col max-w-[900px] w-full items-center text-center">
              <h1 className="[font-family:'Onest',Helvetica] font-extrabold text-white text-[70px] tracking-[-2.20px] leading-[77px]">
                Find Trusted Service
                <br />
                Providers Near You —{" "}
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  Instantly
                </span>
                .
              </h1>
            </div>

            {/* Description text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col max-w-[600px] w-full items-center mt-6"
            >
              <p className="[font-family:'Onest',Helvetica] font-bold text-[#cccccc] text-lg text-center tracking-[-0.36px] leading-[27px]">
                Connect with verified professionals for cleaning, plumbing, electrical work, and more — all in one easy-to-use platform designed for speed, safety, and reliability.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-[15px] p-0.5"
          >
            <Link to="/book-call">
              <Button className="flex items-center justify-center gap-[5px] px-[13px] py-[9px] bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-md border border-solid border-orange-400/20 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                <span className="[font-family:'Onest',Helvetica] font-medium text-white text-[15px] tracking-[-0.60px] leading-[18px]">
                  Get in touch
                </span>
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </Link>

            <Button
              variant="outline"
              className="flex items-center justify-center px-[13px] py-[9px] bg-gray-900/80 hover:bg-gray-800/80 rounded-md border border-solid border-gray-600 shadow-lg backdrop-blur-sm transition-all duration-300"
            >
              <span className="[font-family:'Onest',Helvetica] font-medium text-white text-[15px] tracking-[-0.60px] leading-[18px]">
                View services
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};