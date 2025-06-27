import { ArrowRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FaqsAndCtaSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How do I book a service?",
      answer:
        "You can book a service through our platform by selecting the service you need, choosing a service provider, and selecting a convenient time slot. The booking process is simple and takes just a few minutes.",
    },
    {
      question: "Are the service providers verified",
      answer:
        "Yes, all service providers on our platform undergo a thorough verification process. We check their credentials, experience, and background to ensure you receive quality service.",
    },
    {
      question: "What happens if I'm not satisfied with the service?",
      answer:
        "We have a satisfaction guarantee policy. If you're not satisfied with the service, you can report the issue within 24 hours, and we'll work to resolve it. This may include a partial or full refund or scheduling a new service appointment.",
    },
    {
      question: "Can I schedule services in advance?",
      answer:
        "Yes, you can schedule services days, weeks, or even months in advance. Our platform allows you to book appointments based on your convenience and the service provider's availability.",
    },
  ];

  return (
    <section className="w-full py-24 relative">
      <div className="flex flex-col w-full items-center justify-center gap-6">
        {/* Header section */}
        <div className="flex flex-col items-center justify-center gap-6 mb-8">
          <Badge className="bg-loving-help-337691framerappcod-gray-80 text-white font-medium rounded-md px-3 py-2 relative">
            <span className="relative z-10">FAQs</span>
            <div className="w-full h-full rounded-md border border-solid border-[#222222] absolute top-0 left-0" />
          </Badge>

          <div className="flex flex-col max-w-[700px] items-center text-center">
            <h2 className="[font-family:'Onest',Helvetica] font-normal text-white text-[50px] tracking-[-2.00px] leading-[55px] text-center">
              We&apos;ve Got the Answers
              <br />
              You&apos;re Looking For
            </h2>
          </div>

          <div className="max-w-[600px] text-center">
            <p className="[font-family:'Onest',Helvetica] font-medium text-[#cccccc] text-lg tracking-[-0.36px] leading-[27px]">
              Quick answers to your AI automation questions.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full max-w-[800px] relative">
          <div className="absolute w-full h-[328px] top-[-19px] left-0 overflow-hidden blur-[25px] opacity-30">
            <div className="flex flex-col w-full h-[358px] items-start justify-center relative top-[-15px] opacity-50">
              <div className="relative flex-1 self-stretch w-full grow bg-[url(/svg12160520360.svg)] bg-[100%_100%]" />
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="bg-loving-help-337691framerappwhite-5 rounded-md mb-3 border border-solid border-[#222222] overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-[17px] font-loving-help-337691-framer-app-semantic-strong text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-[#cccccc]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Card */}
        <Card className="max-w-[750px] w-full mt-12 rounded-xl overflow-hidden bg-[linear-gradient(164deg,rgba(12,29,220,1)_0%,rgba(13,13,13,0.8)_20%,rgba(13,13,13,0.8)_29%,rgba(13,13,13,0.8)_81%,rgba(13,14,38,0.81)_81%,rgba(13,14,38,0.81)_81%,rgba(12,29,220,1)_100%)]">
          <CardContent className="flex flex-col items-center justify-center gap-[15px] px-[30px] py-20">
            <div className="max-w-[700px] w-full text-center">
              <h3 className="bg-[linear-gradient(0deg,rgba(253,99,1,1)_0%,rgba(12,29,220,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Onest',Helvetica] font-normal text-transparent text-[50px] tracking-[-2.00px] leading-[55px]">
                Ready to Book
                <br />
                Your First Service?
              </h3>
            </div>

            <div className="max-w-[500px] w-full text-center">
              <p className="[font-family:'Onest',Helvetica] font-medium text-[#cccccc] text-lg tracking-[-0.36px] leading-[27px]">
                Join thousands of satisfied users. Fast, safe, and stress-free.
              </p>
            </div>

            <Button className="mt-2 bg-loving-help-337691framerappdark-blue text-white font-medium text-[15px] tracking-[-0.60px] rounded-md border border-solid border-[#ffffff1a] shadow-[0px_30px_30px_-3.75px_#0000000d,0px_13.65px_13.65px_-3.12px_#0000001a,0px_6.87px_6.87px_-2.5px_#00000021,0px_3.62px_3.62px_-1.88px_#00000024,0px_1.81px_1.81px_-1.25px_#00000024,0px_0.71px_0.71px_-0.62px_#00000026]">
              Book a free call
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
