import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSection = (): JSX.Element => {
  // Define benefit cards data for easy mapping
  const benefitCards = [
    {
      icon: "/group-21.png",
      iconWidth: "w-[17px]",
      iconHeight: "h-[23px]",
      iconPosition: "top-px left-1",
      title: "Verified Experts",
      description: "All providers are vetted for quality and professionalism.",
    },
    {
      icon: "/group-22.png",
      iconWidth: "w-[25px]",
      iconHeight: "h-[17px]",
      iconPosition: "top-[5px] left-0",
      title: "Fast Booking",
      description: "Get connected and schedule services in minutes.",
    },
    {
      icon: "/group-23.png",
      iconWidth: "w-5",
      iconHeight: "h-5",
      iconPosition: "top-0.5 left-0.5",
      title: "Fair Pricing",
      description:
        "No surprises — our rates are fair, fixed, and fully transparent.",
    },
    {
      icon: "/group-24.png",
      iconWidth: "w-5",
      iconHeight: "h-5",
      iconPosition: "top-0.5 left-0.5",
      title: "24/7 Support",
      description: "We're here to help, anytime — tailored to your location..",
    },
    {
      icon: "/group-25.png",
      iconWidth: "w-5",
      iconHeight: "h-5",
      iconPosition: "top-0.5 left-0.5",
      title: "Secure & Private",
      description:
        "Your data stays private — all transactions are encrypted and secure.",
    },
    {
      icon: "/group-26.png",
      iconWidth: "w-5",
      iconHeight: "h-[18px]",
      iconPosition: "top-[3px] left-0.5",
      title: "Location-Based Matching",
      description:
        "Find nearby professionals for faster service and lower costs.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[60px] px-10 py-[100px] w-full">
      <div className="flex flex-col w-full max-w-[1840px] items-center justify-center gap-[25px]">
        <div className="relative z-[1]">
          <Badge className="bg-loving-help-337691framerappcod-gray-80 text-white font-medium text-sm tracking-[-0.28px] leading-[16.8px] relative">
            Benefits
            <div className="w-[77px] h-[33px] top-0 left-0 rounded-md border-[#222222] absolute border border-solid" />
          </Badge>
        </div>

        <div className="flex flex-col w-full items-center justify-center gap-[15px] relative z-0">
          <div className="flex flex-col max-w-[700px] w-full items-center">
            <h2 className="text-[50px] font-normal tracking-[-2.00px] leading-[55px] text-center bg-[linear-gradient(0deg,rgba(253,99,1,1)_0%,rgba(12,29,220,1)_100%)] bg-clip-text text-transparent font-['Onest',Helvetica]">
              Why Thousands
              <br />
              Trust Our Platform
            </h2>
          </div>

          <div className="flex flex-col max-w-[600px] w-full items-center">
            <p className="text-[#cccccc] font-medium text-lg text-center tracking-[-0.36px] leading-[27px] font-['Onest',Helvetica]">
              We make it easy to find professionals you can count on — for every
              need,
              <br />
              every time.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] w-full">
        {benefitCards.map((card, index) => (
          <Card
            key={`benefit-card-${index}`}
            className="relative h-[190px] rounded-lg overflow-hidden border-[#222222] [background:radial-gradient(50%_50%_at_50%_100%,rgba(12,29,220,0.62)_0%,rgba(12,29,220,0)_100%)]"
          >
            <CardContent className="p-0 h-full">
              <div className="flex w-[300px] items-center absolute top-5 left-[43px]">
                <div className="inline-flex p-[5px] rounded overflow-hidden items-center justify-center">
                  <div className="flex flex-col w-[25px] h-[25px] items-start justify-center">
                    <div className="relative self-stretch w-full h-[25px]">
                      <img
                        className={`absolute ${card.iconWidth} ${card.iconHeight} ${card.iconPosition}`}
                        alt={`${card.title} icon`}
                        src={card.icon}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] gap-[9px] absolute top-[88px] left-[43px] flex flex-col">
                <h3 className="text-white text-[23px] font-medium tracking-[-0.46px] leading-[27.6px] font-['Onest',Helvetica]">
                  {card.title}
                </h3>
                <p className="text-[#cccccc] text-[16px] font-medium tracking-[-0.32px] leading-[22.4px] font-['Onest',Helvetica]">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
