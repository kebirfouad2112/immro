import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Service data for mapping
const services = [
  {
    id: 1,
    title: "Cleaning",
    boldText: "From home to office cleaning",
    description: "— book trusted professionals who keep your spaces spotless.",
    imageUrl: "/nkeyftw4qls0b15lztjtmqlh8e-png.png",
    imagePosition: "left",
    borderRadius: "rounded-[40px]",
  },
  {
    id: 2,
    title: "Plumbing",
    boldText: "Leaks, clogs, or installations?",
    description: " Get reliable plumbers at your doorstep quickly.",
    imageUrl: "/02jxv4oharvxr4siecon1zqkpa-jpg.png",
    imagePosition: "right",
    borderRadius: "rounded-[40px]",
  },
  {
    id: 3,
    title: "Electrical Services",
    boldText: "Lighting, wiring, or urgent repairs",
    description: "— hire certified electricians for safe and fast fixes.",
    imageUrl: "/f7fjve1ib5i7bqw6gv1zpmjv8-jpg.png",
    imagePosition: "left",
    borderRadius: "rounded-[18px]",
  },
  {
    id: 4,
    title: "Dépannage (Emergency Help)",
    boldText: "Car trouble or lockouts?",
    description: " Our dépannage experts are available 24/7 to assist you.",
    imageUrl: "/iwpbfvhoh0mvojfvwljp6lyqy-jpeg.png",
    imagePosition: "right",
    borderRadius: "rounded-[18px]",
  },
  {
    id: 5,
    title: "Mechanics",
    boldText: "Vehicle maintenance and repairs",
    description: " done by qualified local mechanics at fair prices.",
    imageUrl: "/chcgr8gvoy1frfqfeggokwl5yy-jpg.png",
    imagePosition: "left",
    borderRadius: "rounded-[40px]",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-[60px] px-10 py-[100px] w-full">
      <div className="flex flex-col items-center justify-center gap-[25px] max-w-[1840px] w-full">
        <div className="inline-flex flex-col items-start relative z-[1]">
          <Badge className="px-3 py-2 bg-loving-help-337691framerappcod-gray-80 rounded-md border border-solid border-[#222222]">
            <span className="font-['Onest',Helvetica] font-medium text-white text-sm tracking-[-0.28px] leading-[16.8px]">
              Our Services
            </span>
          </Badge>
        </div>

        <div className="relative w-full max-w-[1840px] text-center">
          <div className="flex flex-col items-center justify-center max-w-[700px] mx-auto">
            <h2 className="[font-family:'Onest',Helvetica] font-normal text-white text-[50px] tracking-[-2.00px] leading-[55px] text-center">
              All the Home Services You Need
              <br />
              <span className="inline-block mt-3">In One Place</span>
            </h2>
          </div>

          <div className="flex flex-col max-w-[600px] mx-auto mt-[30px]">
            <p className="[font-family:'Onest',Helvetica] font-medium text-[#cccccc] text-lg text-center tracking-[-0.36px] leading-[27px]">
              From everyday cleaning to urgent home repairs, our platform
              connects
              <br />
              you with trusted professionals across multiple services — fast,
              easy, and
              <br />
              hassle-free.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-[1000px] w-full items-center justify-center gap-[100px]">
        {services.map((service) => (
          <Card
            key={service.id}
            className="flex flex-wrap w-full items-center justify-center gap-[0px_80px] bg-transparent border-0 shadow-none"
          >
            <CardContent className="p-0 flex flex-wrap w-full items-center justify-center gap-[0px_80px]">
              {service.imagePosition === "left" ? (
                <>
                  <div
                    className={`relative w-[450px] h-[350px] ${service.borderRadius} bg-cover bg-[50%_50%]`}
                    style={{ backgroundImage: `url(${service.imageUrl})` }}
                  />
                  <div className="flex flex-col w-[470px] h-[350px] items-start justify-center">
                    <h3 className="font-loving-help-337691-framer-app-semantic-heading-3 font-[number:var(--loving-help-337691-framer-app-semantic-heading-3-font-weight)] text-white text-[length:var(--loving-help-337691-framer-app-semantic-heading-3-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-heading-3-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-heading-3-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-heading-3-font-style)] mb-4">
                      {service.title}
                    </h3>
                    <p className="[font-family:'Onest',Helvetica] text-base leading-[22.4px]">
                      <span className="font-bold text-[#cccccc] tracking-[-0.05px]">
                        {service.boldText}
                      </span>
                      <span className="font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-[#cccccc] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] font-loving-help-337691-framer-app-semantic-strong [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)] text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)]">
                        {service.description}
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col w-[470px] h-[350px] items-start justify-center">
                    <h3 className="font-loving-help-337691-framer-app-semantic-heading-3 font-[number:var(--loving-help-337691-framer-app-semantic-heading-3-font-weight)] text-white text-[length:var(--loving-help-337691-framer-app-semantic-heading-3-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-heading-3-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-heading-3-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-heading-3-font-style)] mb-4">
                      {service.title}
                    </h3>
                    <p className="[font-family:'Onest',Helvetica] text-base leading-[22.4px]">
                      <span className="font-bold text-[#cccccc] tracking-[-0.05px]">
                        {service.boldText}
                      </span>
                      <span className="font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-[#cccccc] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] font-loving-help-337691-framer-app-semantic-strong [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)] text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)]">
                        {service.description}
                      </span>
                    </p>
                  </div>
                  <div
                    className={`relative w-[450px] h-[350px] ${service.borderRadius} bg-cover bg-[50%_50%]`}
                    style={{ backgroundImage: `url(${service.imageUrl})` }}
                  />
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
