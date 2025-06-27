import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const MainContentSection = (): JSX.Element => {
  // Data for footer links
  const footerSections = [
    {
      title: "Links",
      links: ["Services", "Process", "Case studies", "Benefits", "Pricing"],
    },
    {
      title: "Pages",
      links: ["Home", "About", "Blog", "Contact", "404"],
    },
    {
      title: "Socials",
      links: ["Instagram", "Facebook", "Linkedin", "Twitter"],
    },
  ];

  return (
    <footer className="w-full flex flex-col items-start relative border-t-2 border-[#222222]">
      <div className="w-full px-10 py-16 [background:radial-gradient(50%_50%_at_50%_3%,rgba(129,74,200,0.3)_0%,rgba(129,74,200,0)_100%)] flex flex-col items-center justify-center">
        <div className="flex max-w-[1200px] items-start justify-center gap-5 w-full">
          {/* Left column with logo, tagline and newsletter */}
          <div className="flex-1 flex flex-col items-start justify-center gap-[15px]">
            {/* Logo section */}
            <div className="flex flex-col items-start justify-center gap-[19.19px] w-full">
              <div className="inline-flex items-center gap-1">
                <div className="w-10 h-10 relative bg-loving-help-337691framerappwhite">
                  <img
                    className="absolute w-[33px] h-[33px] top-[3px] left-[3px]"
                    alt="Xtract logo"
                    src="/group-69.png"
                  />
                </div>
                <div className="[font-family:'Figtree',Helvetica] font-bold text-white text-3xl tracking-[-0.54px] leading-9">
                  XTRACT
                </div>
              </div>

              <div className="max-w-[300px]">
                <p className="font-loving-help-337691-framer-app-semantic-strong font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-[#cccccc] text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)]">
                  Xtract – Automate Smarter, Optimize <br />
                  Faster, and Grow Stronger.
                </p>
              </div>
            </div>

            {/* Newsletter section */}
            <div className="flex flex-col items-start justify-center gap-2.5 w-full">
              <div className="max-w-[300px]">
                <h3 className="[font-family:'Onest',Helvetica] font-medium text-white text-lg tracking-[-0.36px] leading-[27px]">
                  Join our newsletter
                </h3>
              </div>

              <div className="max-w-xs w-80 relative">
                <div className="flex items-center">
                  <Input
                    className="h-[50px] pl-[15px] pr-[115px] py-[15px] bg-loving-help-337691framerappcod-gray-80 rounded-lg text-[#cccccc] font-medium shadow-[inset_0px_0px_0px_1px_#222222]"
                    placeholder="name@email.com"
                  />
                  <Button className="absolute right-0 top-[5px] h-[39px] w-[100px] bg-loving-help-337691framerappdark-blue rounded-[3px] font-loving-help-337691-framer-app-semantic-input font-[number:var(--loving-help-337691-framer-app-semantic-input-font-weight)] text-white text-[length:var(--loving-help-337691-framer-app-semantic-input-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-input-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-input-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-input-font-style)]">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right columns with links */}
          <div className="flex-1 flex items-start justify-center gap-2.5">
            {footerSections.map((section, index) => (
              <div
                key={`section-${index}`}
                className="flex-1 flex flex-col items-start justify-center gap-1.5"
              >
                <h3 className="font-loving-help-337691-framer-app-figtree-medium font-[number:var(--loving-help-337691-framer-app-figtree-medium-font-weight)] text-white text-[length:var(--loving-help-337691-framer-app-figtree-medium-font-size)] tracking-[var(--loving-help-337691-framer-app-figtree-medium-letter-spacing)] leading-[var(--loving-help-337691-framer-app-figtree-medium-line-height)] [font-style:var(--loving-help-337691-framer-app-figtree-medium-font-style)]">
                  {section.title}
                </h3>

                {section.links.map((link, linkIndex) => (
                  <a
                    key={`link-${index}-${linkIndex}`}
                    href="#"
                    className="[font-family:'Onest',Helvetica] font-medium text-[#cccccc] text-base tracking-[-0.32px] leading-[22.4px]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
