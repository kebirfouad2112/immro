import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      quote:
        '"I booked a plumber in under 5 minutes — and he showed up the same day! This platform is a lifesaver."',
      name: "— Sami A., Algiers",
      position: "CEO at TechFlow Solutions",
      avatar: "/ja6vnrdyxr6dop2is9crmnsqxso-jpg.png",
    },
    {
      id: 2,
      quote:
        '"With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!"',
      name: "Sophia Martinez",
      position: "Operations Manager at NexaCorp",
      avatar: "/prjvkx4ybef6ysyzs9ezdabpto-jpg.png",
    },
    {
      id: 3,
      quote:
        '"Super easy to use, and every provider I\'ve hired so far was professional and on time. Highly recommended!"',
      name: "— Fatima Z., Oran",
      position: "Head of Sales at GrowthPeak",
      avatar: "/hdiezwzzph6mztbfyg3fs721u-jpg.png",
    },
    {
      id: 4,
      quote:
        '"Had an emergency with my electricity, and the app found someone 2 blocks away. Fixed in no time!"',
      name: "— Yacine B., Constantine",
      position: "Customer Success Lead at SupportHive",
      avatar: "/ja6vnrdyxr6dop2is9crmnsqxso-jpg-1.png",
    },
  ];

  // Star rating images for each testimonial
  const starImages = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    src: `/group-${45 + index}.png`,
  }));

  return (
    <section className="flex flex-col items-center justify-center gap-[60px] px-10 py-[100px] w-full">
      <div className="flex flex-col w-full max-w-[1840px] items-center justify-center gap-[25px]">
        <div className="relative z-[1]">
          <Badge className="relative px-3 py-2 bg-loving-help-337691framerappcod-gray-80 text-white font-medium text-sm tracking-[-0.28px] leading-[16.8px] border border-solid border-[#222222]">
            Testimonials
          </Badge>
        </div>

        <div className="flex flex-col w-full items-center justify-center gap-[15px] relative z-0">
          <div className="flex flex-col max-w-[700px] w-full items-center">
            <h2 className="[font-family:'Onest',Helvetica] font-normal text-white text-[50px] text-center tracking-[-2.00px] leading-[55px]">
              Why Businesses
              <br />
              Love Our AI Solutions
            </h2>
          </div>

          <div className="flex flex-col max-w-[600px] w-full items-center">
            <p className="[font-family:'Onest',Helvetica] font-medium text-[#cccccc] text-lg text-center tracking-[-0.36px] leading-[27px]">
              Real businesses, real results with AI automation.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] w-full">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="flex flex-col items-start justify-center rounded-lg border border-[#222222] overflow-hidden [background:radial-gradient(50%_50%_at_84%_95%,rgba(12,29,220,1)_0%,rgba(13,13,13,0.8)_100%)]"
          >
            <CardContent className="flex flex-col items-start justify-center gap-5 p-[30px] w-full">
              <div className="flex items-center gap-[5px] w-full">
                {starImages.map((star) => (
                  <div key={star.id} className="w-5 h-5 relative">
                    <img
                      className="absolute w-[17px] h-[17px] top-px left-px"
                      alt="Star rating"
                      src={star.src}
                    />
                  </div>
                ))}
              </div>

              <div className="w-full overflow-hidden">
                <p className="font-loving-help-337691-framer-app-semantic-strong font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-[#cccccc] text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)]">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-2.5 w-full">
                <Avatar className="w-[45px] h-[45px] rounded-[139px] overflow-hidden">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-[139px] object-cover"
                  />
                  <AvatarFallback className="rounded-[139px]">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 h-[38.39px] relative">
                  <div className="absolute -top-px left-0 w-full">
                    <p className="font-loving-help-337691-framer-app-semantic-strong font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-white text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)]">
                      {testimonial.name}
                    </p>
                  </div>

                  <div className="absolute top-[26px] left-0 w-full">
                    <p className="[font-family:'Onest',Helvetica] font-medium text-[#cccccc] text-xs tracking-[-0.48px] leading-3">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
