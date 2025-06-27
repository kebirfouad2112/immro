import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { BenefitsSection } from "./sections/BenefitsSection/BenefitsSection";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { FaqsAndCtaSection } from "./sections/FaqsAndCtaSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { PricingSection } from "./sections/PricingSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const ElementLight = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "testimonials", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="flex flex-col w-full items-start relative bg-black">
      <div className="relative w-full bg-black overflow-hidden">
        {/* Fixed Navigation */}
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex w-full items-start fixed top-0 left-0 z-50"
        >
          <nav className="flex items-center justify-center w-full py-2.5 px-10 bg-black/90 backdrop-blur-sm">
            <div className="flex max-w-[1200px] w-[1200px] items-center justify-between relative rounded">
              {/* Logo */}
              <div className="inline-flex items-center gap-1">
                <div className="flex w-[30px] items-start justify-center">
                  <div className="relative w-[30px] h-[30px] bg-white">
                    <img
                      className="absolute w-[25px] h-[25px] top-0.5 left-0.5"
                      alt="Group"
                      src="/group-70.png"
                    />
                  </div>
                </div>
                <div className="[font-family:'Figtree',Helvetica] font-bold text-white text-[21px] tracking-[-0.26px] leading-[25.2px]">
                  IMRO
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center justify-center gap-4 py-1">
                <NavigationMenu>
                  <NavigationMenuList className="flex items-center gap-0.5 py-0.5">
                    {navItems.map((item, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          className="inline-flex items-center justify-center px-3.5 py-2 font-medium text-white text-sm tracking-[-0.28px] leading-[16.8px] hover:text-blue-400 transition-colors duration-300"
                          href={item.href}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>

                {/* Call to Action Button */}
                <Link to="/book-call">
                  <Button className="px-[13px] py-[9px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-md shadow-lg border border-blue-500/20 transition-all duration-300 hover:shadow-blue-500/25">
                    <span className="font-medium text-white text-sm tracking-[-0.28px] leading-[16.8px]">
                      Book a call
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <Separator className="absolute w-full h-[1px] bottom-0 left-0 border-gray-800" />
          </nav>
        </motion.header>

        {/* Main Content Sections */}
        <main className="flex flex-col w-full">
          {/* Hero Section - Black Background */}
          <div className="bg-black">
            <HeroSection />
          </div>

          {/* Services Section - White Background */}
          <div className="bg-white">
            <ServicesSection />
          </div>

          {/* Trusted By Section - Black Background */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center px-10 py-[50px] w-full bg-black"
          >
            <div className="flex-col w-full max-w-[1840px] items-center justify-center gap-[24.99px] flex">
              <div className="inline-flex flex-col items-start">
                <div className="flex flex-col items-start w-full">
                  <div className="[font-family:'Onest',Helvetica] font-medium text-white text-sm tracking-[-0.28px] leading-[16.8px]">
                    Over 50+ business trust us
                  </div>
                </div>
              </div>

              <div className="flex flex-col max-w-[700px] w-[700px] h-[50px] items-start justify-center">
                <img
                  className="w-full h-full"
                  alt="Section mask group"
                  src="/section-mask-group.svg"
                />
              </div>
            </div>
          </motion.section>

          {/* Process Section - White Background */}
          <div className="bg-white">
            <ProcessSection />
          </div>

          {/* Case Studies Section - Black Background */}
          <div className="bg-black">
            <CaseStudiesSection />
          </div>

          {/* Benefits Section - White Background */}
          <div className="bg-white">
            <BenefitsSection />
          </div>

          {/* Pricing Section - Black Background */}
          <div className="bg-black">
            <PricingSection />
          </div>

          {/* Testimonials Section - White Background */}
          <div className="bg-white">
            <TestimonialsSection />
          </div>

          {/* FAQs and CTA Section - Black Background */}
          <div className="bg-black">
            <FaqsAndCtaSection />
          </div>

          {/* Main Content Section - White Background */}
          <div className="bg-white">
            <MainContentSection />
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col w-full bg-black">
          <div className="px-10 py-[25px] flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-[1840px] items-center justify-between pt-0 pb-px px-0 flex">
              <div className="inline-flex flex-col items-start mt-[-1.10px] mb-[-1.10px]">
                <div className="flex flex-col items-start w-full">
                  <div className="inline-flex items-start px-0 py-[0.5px]">
                    <div className="font-medium text-[#cccccc] text-sm tracking-[-0.28px] leading-[16.8px]">
                      Logo by flaticon
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col items-start mt-[-1.10px] mb-[-1.10px]">
                <div className="flex flex-col items-start w-full">
                  <div className="inline-flex items-start px-0 py-[0.5px]">
                    <div className="[font-family:'Onest',Helvetica] font-normal text-sm leading-[14px]">
                      <span className="font-medium text-[#cccccc] tracking-[-0.28px] leading-[16.8px]">
                        Visioned and Crafted&nbsp;&nbsp;by
                      </span>
                      <span className="font-medium text-white tracking-[-0.28px] leading-[16.8px]">
                        {" "}
                        Kanishk Dubey
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col items-start mt-[-0.60px] mb-[-0.60px]">
                <div className="flex flex-col items-start w-full">
                  <div className="[font-family:'Onest',Helvetica] font-medium text-[#cccccc] text-sm tracking-[-0.28px] leading-[16.8px]">
                    © All right reserved
                  </div>
                </div>
              </div>
            </div>
            <Separator className="w-full h-[2px] border-t-2 border-gray-800" />
          </div>
        </footer>
      </div>

      {/* Iframe mask overlay */}
      <img
        className="absolute w-full h-[1200px] top-0 left-0 pointer-events-none"
        alt="Iframe mask group"
        src="/iframe-mask-group.svg"
      />

      {/* "Made with" badge */}
      <div className="flex w-full items-start justify-end p-5 fixed bottom-0 right-0 z-40">
        <div className="inline-flex flex-col items-start self-stretch">
          <div className="flex items-start w-full">
            <div className="relative w-[142px] h-9 bg-white rounded-[10px] overflow-hidden shadow-lg">
              <div className="inline-flex items-center gap-2.5 relative top-2.5 left-3.5">
                <div className="flex flex-col w-[11px] h-4 items-start">
                  <img
                    className="w-[11px] h-4"
                    alt="Image"
                    src="/image-1.svg"
                  />
                </div>
                <div className="flex flex-col w-[92px] h-[11px] items-start">
                  <img
                    className="w-[92px] h-[11px]"
                    alt="Image"
                    src="/image-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};