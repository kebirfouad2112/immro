import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const CaseStudiesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-[60px] px-10 py-[100px] w-full">
      <div className="flex flex-col items-center justify-center gap-[25px] max-w-[1840px] w-full">
        <div className="inline-flex flex-col items-start relative">
          <Badge className="relative px-3 py-2 bg-loving-help-337691framerappcod-gray-80 text-white rounded-md border border-solid border-[#222222]">
            <span className="[font-family:'Onest',Helvetica] font-medium text-sm tracking-[-0.28px] leading-[16.8px]">
              Case Studies
            </span>
          </Badge>
        </div>

        <div className="flex flex-col items-center justify-center gap-[15px] w-full">
          <div className="flex flex-col max-w-[700px] w-full items-center">
            <h2 className="[font-family:'Onest',Helvetica] font-normal text-white text-[50px] text-center tracking-[-2.00px] leading-[55px]">
              See How Smart AI Automation
              <br />
              Transforms Businesses
            </h2>
          </div>

          <div className="flex flex-col max-w-[600px] w-full items-center">
            <p className="[font-family:'Onest',Helvetica] font-medium text-[#cccccc] text-lg text-center tracking-[-0.36px] leading-[27px]">
              See how AI automation streamlines operations, boosts and drives
              growth.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2.5 max-w-[1000px] w-full">
        <Card className="w-full h-[500px] border-0">
          <CardContent className="p-0 h-full">
            {/* Image placeholder - would need actual src from data */}
            <div className="w-full h-full bg-loving-help-337691framerappmine-shaft rounded-md"></div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center gap-2.5 w-full">
          <div className="flex items-center justify-center w-5 h-5">
            <img
              className="w-[15px] h-[13px]"
              alt="Left arrow"
              src="/group-19.png"
            />
          </div>

          <div className="flex items-center">
            <span className="[font-family:'Onest',Helvetica] font-medium text-[#cccccc] text-sm tracking-[-0.28px] leading-[16.8px]">
              DRAG TO EXPLORE
            </span>
          </div>

          <div className="flex items-center justify-center w-5 h-5">
            <img
              className="w-[15px] h-[13px]"
              alt="Right arrow"
              src="/group-20.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
