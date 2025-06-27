import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../components/ui/card";
import { Switch } from "../../../../components/ui/switch";

export const PricingSection = (): JSX.Element => {
  // Pricing plan data
  const pricingPlans = [
    {
      icon: "/group-27.png",
      title: "Starter",
      price: "$37",
      description: "Perfect for small businesses starting with AI automation.",
      buttonText: "Choose this plan",
      buttonVariant: "outline",
      features: [
        { text: "Basic workflow automation", icon: "/group-28.png" },
        { text: "AI-powered personal assistant", icon: "/group-29.png" },
        { text: "Standard analytics & reporting", icon: "/group-30.png" },
        { text: "Email & chat support", icon: "/group-31.png" },
        { text: "Up to 3 AI integrations", icon: "/group-32.png" },
      ],
      background:
        "radial-gradient(50% 50% at 50% 100%, rgba(129,74,200,0.3) 0%, rgba(129,74,200,0) 100%)",
      badge: null,
    },
    {
      icon: "/group-33.png",
      title: "Professional",
      price: "$75",
      description: "Perfect for small businesses starting with AI automation.",
      buttonText: "Choose this plan",
      buttonVariant: "default",
      features: [
        { text: "Advanced workflow automation", icon: "/group-34.png" },
        { text: "AI-driven sales & marketing tools", icon: "/group-35.png" },
        { text: "Enhanced data analytics & insights", icon: "/group-36.png" },
        { text: "Priority customer support", icon: "/group-37.png" },
        { text: "Up to 10 AI integrations", icon: "/group-38.png" },
      ],
      background:
        "radial-gradient(50% 50% at 52% 0%, rgba(129,74,200,0.45) 0%, rgba(129,74,200,0) 100%)",
      badge: "Popular",
    },
    {
      icon: "/group-39.png",
      title: "Enterprise",
      price: "Custom",
      description: "Perfect for small businesses starting with AI automation.",
      buttonText: "Schedule a call",
      buttonVariant: "outline",
      features: [
        { text: "Fully customizable AI automation", icon: "/group-40.png" },
        { text: "Dedicated AI business consultant", icon: "/group-41.png" },
        { text: "Enterprise-grade compliance", icon: "/group-42.png" },
        { text: "24/7 VIP support", icon: "/group-43.png" },
        { text: "Unlimited AI integrations", icon: "/group-44.png" },
      ],
      background:
        "radial-gradient(50% 50% at 50% 100%, rgba(129,74,200,0.3) 0%, rgba(129,74,200,0) 100%)",
      badge: null,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[60px] py-[100px] px-10 w-full">
      <div className="flex flex-col items-center justify-center gap-[25px] max-w-[1840px] w-full">
        <div className="inline-flex flex-col items-start relative">
          <Badge
            variant="outline"
            className="bg-loving-help-337691framerappcod-gray-80 text-white border-[#222222] font-medium text-sm tracking-[-0.28px]"
          >
            Pricing
          </Badge>
        </div>

        <div className="flex flex-col items-center justify-center gap-[15px] w-full">
          <div className="flex flex-col items-center max-w-[700px] w-full">
            <h2 className="text-[50px] text-white text-center tracking-[-2.00px] leading-[55px] font-normal [font-family:'Onest',Helvetica]">
              The Best AI Automation,
              <br />
              at the Right Price
            </h2>
          </div>

          <div className="flex flex-col items-center max-w-[600px] w-full">
            <p className="text-[#cccccc] text-lg text-center tracking-[-0.36px] leading-[27px] font-medium [font-family:'Onest',Helvetica]">
              Choose a plan that fits your business needs and start automating
              with AI
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center justify-center gap-[30px] w-full">
          <div className="flex items-center justify-center gap-2.5 max-w-[1840px] w-full">
            <span className="text-[#cccccc] font-loving-help-337691-framer-app-semantic-strong font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] whitespace-nowrap [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)]">
              Monthly
            </span>

            <div className="relative">
              <Switch
                className="bg-loving-help-337691framerappdark-blue border-[#222222] data-[state=checked]:bg-loving-help-337691framerappdark-blue"
                defaultChecked
              />
            </div>

            <span className="text-white font-loving-help-337691-framer-app-semantic-strong font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] whitespace-nowrap [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)]">
              Annually
            </span>
          </div>

          <div className="flex items-start justify-center gap-5 max-w-[1200px] w-full">
            {pricingPlans.map((plan, index) => (
              <Card
                key={`plan-${index}`}
                className="flex flex-col w-[386.66px] gap-[35px] px-[30px] py-5 rounded-lg border-[#222222] overflow-hidden"
                style={{ background: plan.background }}
              >
                <CardHeader className="p-0 space-y-[15px]">
                  <div className="flex items-center gap-[5px] w-full">
                    <div className="inline-flex p-[5px] rounded overflow-hidden items-center justify-center">
                      <div className="w-[25px] h-[25px] relative">
                        <img
                          className="absolute w-5 h-5 top-[3px] left-0.5"
                          alt={`${plan.title} icon`}
                          src={plan.icon}
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <span className="font-loving-help-337691-framer-app-onest-medium font-[number:var(--loving-help-337691-framer-app-onest-medium-font-weight)] text-[#cccccc] text-[length:var(--loving-help-337691-framer-app-onest-medium-font-size)] tracking-[var(--loving-help-337691-framer-app-onest-medium-letter-spacing)] leading-[var(--loving-help-337691-framer-app-onest-medium-line-height)] [font-style:var(--loving-help-337691-framer-app-onest-medium-font-style)]">
                        {plan.title}
                      </span>
                    </div>

                    {plan.badge && (
                      <Badge
                        variant="outline"
                        className="bg-loving-help-337691framerappcod-gray-80 text-white border-[#222222] font-medium text-sm tracking-[-0.28px]"
                      >
                        {plan.badge}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-end">
                    <span className="text-white text-[35px] tracking-[-1.40px] leading-[38.5px] font-medium [font-family:'Figtree',Helvetica]">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="ml-1 text-[#cccccc] font-loving-help-337691-framer-app-semantic-heading-2 font-[number:var(--loving-help-337691-framer-app-semantic-heading-2-font-weight)] text-[length:var(--loving-help-337691-framer-app-semantic-heading-2-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-heading-2-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-heading-2-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-heading-2-font-style)]">
                        /month
                      </span>
                    )}
                  </div>

                  <p className="text-[#cccccc] font-loving-help-337691-framer-app-semantic-strong font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)]">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="p-0">
                  <Button
                    variant={
                      plan.buttonVariant === "default" ? "default" : "outline"
                    }
                    className={`w-full h-9 text-white text-[15px] tracking-[-0.60px] leading-[18px] font-medium [font-family:'Onest',Helvetica] ${
                      plan.buttonVariant === "default"
                        ? "bg-loving-help-337691framerappdark-blue border-[#ffffff1a]"
                        : "bg-loving-help-337691framerappwhite-5 border-[#ffffff1a]"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>

                <CardFooter className="flex flex-col items-start p-0 space-y-8">
                  <span className="text-[#cccccc] font-loving-help-337691-framer-app-semantic-strong font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)]">
                    What's Included:
                  </span>

                  <div className="flex flex-col space-y-[32px] w-full">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={`feature-${featureIndex}`}
                        className="flex items-center gap-2.5"
                      >
                        <div className="w-5 h-5 relative">
                          <img
                            className="absolute w-4 h-3 top-[5px] left-0.5"
                            alt="Checkmark"
                            src={feature.icon}
                          />
                        </div>
                        <span className="text-white font-loving-help-337691-framer-app-semantic-strong font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)]">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
