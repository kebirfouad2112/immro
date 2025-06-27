import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProcessSection = (): JSX.Element => {
  // Process steps data
  const processSteps = [
    {
      step: "Step 1",
      title: "Verified Experts",
      description: "All providers are vetted for quality and professionalism.",
      content: (
        <div className="flex h-[180px] items-center justify-center gap-[5px] p-2.5 relative w-full">
          <div className="flex-col w-[182.5px] h-40 items-center justify-center gap-2.5 p-2.5 flex relative">
            <div className="flex flex-col w-[107px] h-[107px] items-start justify-center relative">
              <div className="relative flex-1 self-stretch w-full grow rounded-[136px] overflow-hidden">
                <div className="relative w-[143px] h-[143px] top-[-18px] left-[-18px]">
                  <div className="absolute w-[107px] h-[74px] top-[34px] left-[18px] opacity-20">
                    <div className="relative w-[74px] h-[74px] left-[17px] rounded-[1000px] border border-solid border-[#df7afe1a]">
                      <div className="absolute w-11 h-11 top-3.5 left-3.5 rounded-[1000px] border border-solid border-[#df7afe1a]" />
                      <div className="absolute w-[22px] h-[22px] top-[25px] left-[25px] rounded-[1000px] border border-solid border-[#df7afe1a]" />
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center absolute top-0 left-0">
                    <div className="relative w-[101px] h-[101.01px] rounded-[169px] rotate-[46.08deg]" />
                  </div>
                  <div className="w-[107px] h-[107px] top-[18px] left-[18px] rounded-[136px] border-[#222222] absolute border border-solid" />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[162.5px] items-start relative flex-[0_0_auto]">
              <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Onest',Helvetica] font-medium text-white text-xs text-center tracking-[-0.48px] leading-3">
                  Analyzing&nbsp;&nbsp;current workflow..
                </div>
              </div>
            </div>
            <div className="w-[182px] h-40 top-0 left-0 border-[#222222] absolute border border-solid" />
          </div>
          <div className="flex-col w-[172.5px] h-40 items-center gap-[5px] px-[5px] py-2.5 flex relative">
            {[
              {
                text: "System check",
                img: "/group.png",
                imgClass: "w-2.5 h-2.5 top-0.5 left-0.5",
                active: true,
              },
              {
                text: "Process check",
                img: "/group-1.png",
                imgClass: "w-[11px] h-[11px] top-px left-px",
                active: false,
              },
              {
                text: "Speed check",
                img: "/group-2.png",
                imgClass: "w-[11px] h-2 top-0.5 left-px",
                active: false,
              },
              {
                text: "Manual work",
                img: "/group-3.png",
                imgClass: "w-[11px] h-[9px] top-0.5 left-px",
                active: false,
              },
              {
                text: "Repetative task",
                img: "/group-4.png",
                imgClass: "w-[11px] h-2.5 top-0.5 left-px",
                active: false,
              },
            ].map((item, index) => (
              <div
                key={`check-${index}`}
                className={`flex w-[162.5px] items-center gap-[5px] p-[5px] relative flex-[0_0_auto] ${item.active ? "bg-loving-help-337691framerappwhite-5" : ""} rounded-sm overflow-hidden`}
              >
                <div className="flex flex-col w-[13px] h-[13px] items-start justify-center relative">
                  <div className="relative self-stretch w-full h-[13px]">
                    <img
                      className={`absolute ${item.imgClass}`}
                      alt="Group"
                      src={item.img}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className={`relative self-stretch mt-[-1.00px] [font-family:'Onest',Helvetica] font-medium ${item.active ? "text-white" : "text-[#cccccc]"} text-xs tracking-[-0.48px] leading-3`}
                    >
                      {item.text}
                    </div>
                  </div>
                </div>
                <div className="w-[162px] h-[23px] top-0 left-0 rounded-sm border-[#222222] absolute border border-solid" />
              </div>
            ))}
            <div className="w-[172px] h-40 top-0 left-0 border-[#222222] absolute border border-solid" />
          </div>
        </div>
      ),
    },
    {
      step: "Step 2",
      title: "AI Development",
      description:
        "Our team builds intelligent automation systems tailored to your business processes.",
      content: (
        <div className="flex h-[180px] items-center justify-center p-2.5 relative w-full">
          <div className="flex flex-col h-40 items-center relative flex-1 grow">
            <div className="flex w-[360px] items-center justify-between pt-1.5 pb-[5px] px-1.5 relative flex-[0_0_auto] bg-loving-help-337691framerappwhite-5">
              <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                <div className="flex flex-col w-2.5 h-[11px] items-start justify-center pt-px pb-0 px-0 relative">
                  <div className="relative self-stretch w-full h-2.5">
                    <img
                      className="absolute w-[7px] h-1.5 top-0.5 left-px"
                      alt="Group"
                      src="/group-5.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-2.5 h-[11px] items-start justify-center pt-px pb-0 px-0 relative">
                  <div className="relative self-stretch w-full h-2.5">
                    <img
                      className="absolute w-[7px] h-1.5 top-0.5 left-px"
                      alt="Group"
                      src="/group-6.png"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[91px] h-2.5 bg-loving-help-337691framerappwhite-5 rounded-sm" />
              <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                {[
                  {
                    src: "/group-7.png",
                    imgClass: "w-2 h-[7px] top-0.5 left-px",
                  },
                  {
                    src: "/group-8.png",
                    imgClass: "w-[7px] h-px top-[5px] left-px",
                  },
                  {
                    src: "/group-9.png",
                    imgClass: "w-1.5 h-1.5 top-0.5 left-0.5",
                  },
                ].map((item, index) => (
                  <div
                    key={`icon-${index}`}
                    className="flex flex-col w-2.5 h-[11px] items-start justify-center pt-px pb-0 px-0 relative"
                  >
                    <div className="relative self-stretch w-full h-2.5">
                      <img
                        className={`absolute ${item.imgClass}`}
                        alt="Group"
                        src={item.src}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-[360px] items-center relative flex-1 grow">
              <div className="flex-col w-[30px] h-[138px] gap-2 pt-2.5 pb-0 px-0 bg-loving-help-337691framerappwhite-5 flex items-center relative">
                {[
                  {
                    src: "/group-10.png",
                    imgClass: "w-3 h-3.5 top-0.5 left-[3px]",
                  },
                  {
                    src: "/group-11.png",
                    imgClass: "w-3.5 h-3.5 top-0.5 left-0.5",
                  },
                  {
                    src: "/group-12.png",
                    imgClass: "w-[15px] h-3.5 top-px left-px",
                  },
                ].map((item, index) => (
                  <div
                    key={`tool-${index}`}
                    className={`flex flex-col w-[18px] h-[18px] items-start justify-center relative ${index === 0 ? "inline-flex items-center justify-center p-px relative flex-[0_0_auto] bg-loving-help-337691framerappwhite-5 rounded-sm" : ""}`}
                  >
                    <div className="relative self-stretch w-full h-[18px]">
                      <img
                        className={`absolute ${item.imgClass}`}
                        alt="Group"
                        src={item.src}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex h-[138px] items-start pt-2.5 pb-0 px-0 relative flex-1 grow">
                <div className="flex flex-col items-start justify-center relative flex-1 self-stretch grow">
                  <img
                    className="max-w-[330px] max-h-32 relative flex-1 w-full grow"
                    alt="Section mask group"
                  />
                </div>
              </div>
            </div>
            <div className="w-[360px] h-40 top-0 left-0 border-[#222222] absolute border border-solid" />
          </div>
        </div>
      ),
    },
    {
      step: "Step 3",
      title: "Seamless Integration",
      description:
        "We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.",
      content: (
        <div className="flex h-[180px] items-center justify-center p-2.5 relative w-full">
          <div className="flex flex-col h-40 items-center justify-center relative flex-1 grow">
            <div className="flex w-[360px] items-center gap-[106px] px-[63px] py-0 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-center justify-center gap-[5px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-center justify-center p-2 relative flex-[0_0_auto] z-[1] bg-loving-help-337691framerappcod-gray-80 rounded-[5px] overflow-hidden">
                  <div className="relative w-12 h-12 overflow-hidden blur-[0.5px]">
                    <div className="relative w-[55px] h-[55px] -top-1 -left-1">
                      <div className="absolute w-12 h-12 top-1 left-1 rounded-[137px] rotate-[-99.72deg] bg-[linear-gradient(141deg,rgba(223,122,254,1)_13%,rgba(223,122,254,0)_35%,rgba(223,122,254,0)_64%,rgba(129,74,200,1)_88%)]" />
                      <div className="absolute w-[30px] h-[30px] top-[13px] left-[13px] rounded-[137px] rotate-[99.65deg] bg-[linear-gradient(141deg,rgba(223,122,254,1)_13%,rgba(223,122,254,0)_35%,rgba(223,122,254,0)_64%,rgba(129,74,200,1)_88%)]" />
                    </div>
                  </div>
                  <div className="w-16 h-16 top-0 left-0 rounded-[5px] border-[#222222] absolute border border-solid" />
                </div>
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto] z-0">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="font-loving-help-337691-framer-app-figtree-regular font-[number:var(--loving-help-337691-framer-app-figtree-regular-font-weight)] text-loving-help-337691framerappwhite-90 text-[length:var(--loving-help-337691-framer-app-figtree-regular-font-size)] tracking-[var(--loving-help-337691-framer-app-figtree-regular-letter-spacing)] leading-[var(--loving-help-337691-framer-app-figtree-regular-line-height)] relative w-fit mt-[-1.00px] whitespace-nowrap [font-style:var(--loving-help-337691-framer-app-figtree-regular-font-style)]">
                      Our solution
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[5px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-end justify-center relative flex-[0_0_auto] z-[1]">
                  <div className="inline-flex items-center justify-center p-2 relative flex-[0_0_auto] bg-loving-help-337691framerappcod-gray-80 rounded-[5px] overflow-hidden">
                    <div className="flex flex-col w-12 h-12 items-start justify-center relative">
                      <div className="relative flex-1 max-w-12 w-full max-h-12 grow">
                        <div className="w-12 h-12">
                          <div className="max-w-12 w-12 max-h-12 h-12 top-[-290px] flex flex-col items-center justify-center gap-2.5 relative">
                            {/* Simplified representation of the stack icons */}
                            <div className="relative self-stretch w-full h-12 mt-[-551.00px] opacity-90 bg-[100%_100%]" />
                            <div className="relative self-stretch w-full h-12 mt-[-493.00px] opacity-90">
                              <div className="relative w-12 h-12 overflow-hidden bg-loving-help-337691framerappwhite">
                                <img
                                  className="absolute w-[47px] h-12 top-0 left-0"
                                  alt="Group"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-16 h-16 top-0 left-0 rounded-[5px] border-[#222222] absolute border border-solid" />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto] z-0">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-loving-help-337691-framer-app-figtree-regular font-[number:var(--loving-help-337691-framer-app-figtree-regular-font-weight)] text-loving-help-337691framerappwhite-90 text-[length:var(--loving-help-337691-framer-app-figtree-regular-font-size)] tracking-[var(--loving-help-337691-framer-app-figtree-regular-letter-spacing)] leading-[var(--loving-help-337691-framer-app-figtree-regular-line-height)] whitespace-nowrap [font-style:var(--loving-help-337691-framer-app-figtree-regular-font-style)]">
                      Your stack
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[216px] items-center justify-center gap-2.5 absolute top-[19px] left-[72px]">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={`connection-${index}`}
                    className="relative w-[216px] h-0.5 bg-loving-help-337691framerappwhite-5"
                  >
                    <div className="relative w-5 h-0.5 left-7 rounded-[56px] bg-[linear-gradient(90deg,rgba(129,74,200,0.1)_0%,rgba(129,74,200,0.6)_88%,rgba(221,121,253,0.6)_100%,rgba(223,122,254,0.6)_100%)]" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[360px] h-40 top-0 left-0 border-[#222222] absolute border border-solid" />
          </div>
        </div>
      ),
    },
    {
      step: "Step 4",
      title: "Continuous Optimization",
      description:
        "We refine performance, analyze insights, and enhance automation for long-term growth.",
      content: (
        <div className="flex h-[180px] items-center justify-center p-2.5 relative w-full">
          <div className="flex flex-col h-40 items-center justify-center gap-2.5 p-2.5 relative flex-1 grow">
            {[
              {
                title: "Chatbot system",
                description: "Efficiency will increase by 20%",
                icon: "/group-13.png",
                iconClass: "w-[15px] h-3.5 top-[3px] left-0.5",
                statusIcon: "/group-14.png",
                statusIconClass:
                  "w-[21px] h-[21px] -top-px -left-0.5 rotate-[-47.64deg]",
              },
              {
                title: "Workflow system",
                description: "Update available..",
                icon: "/group-15.png",
                iconClass: "w-[15px] h-[15px] top-0.5 left-0.5",
                statusIcon: "/group-16.png",
                statusIconClass: "w-2.5 h-3 top-0.5 left-[3px]",
                statusIconContainer: true,
              },
              {
                title: "Sales system",
                description: "Up to date",
                icon: "/group-17.png",
                iconClass: "w-[15px] h-3.5 top-[3px] left-0.5",
                statusIcon: "/group-18.png",
                statusIconClass: "w-[15px] h-[11px] top-1 left-0.5",
              },
            ].map((item, index) => (
              <div
                key={`system-${index}`}
                className="flex w-[340px] items-center justify-center gap-[5px] p-[5px] relative flex-[0_0_auto] rounded overflow-hidden"
              >
                <div
                  className={`items-center gap-[7px] ${index === 0 ? "w-[302px] ml-[-6.65px]" : "flex-1 grow"} flex relative`}
                >
                  <div className="inline-flex items-center justify-center p-[5px] relative flex-[0_0_auto] bg-loving-help-337691framerappwhite-5 rounded overflow-hidden">
                    <div className="flex flex-col w-[18px] h-[18px] items-start justify-center relative">
                      <div className="relative self-stretch w-full h-[18px]">
                        <img
                          className={`absolute ${item.iconClass}`}
                          alt="Group"
                          src={item.icon}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Onest',Helvetica] font-medium text-white text-xs tracking-[-0.48px] leading-3 whitespace-nowrap">
                          {item.title}
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-loving-help-337691-framer-app-figtree-regular font-[number:var(--loving-help-337691-framer-app-figtree-regular-font-weight)] text-loving-help-337691framerappwhite-90 text-[length:var(--loving-help-337691-framer-app-figtree-regular-font-size)] tracking-[var(--loving-help-337691-framer-app-figtree-regular-letter-spacing)] leading-[var(--loving-help-337691-framer-app-figtree-regular-line-height)] whitespace-nowrap [font-style:var(--loving-help-337691-framer-app-figtree-regular-font-style)]">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {item.statusIconContainer ? (
                  <div className="inline-flex items-center justify-center p-0.5 relative flex-[0_0_auto] bg-loving-help-337691framerappwhite-5 rounded overflow-hidden">
                    <div className="flex flex-col w-[15px] h-[15px] items-start justify-center relative">
                      <div className="relative flex-1 max-w-[15px] w-full max-h-[15px] grow">
                        <div className="relative w-[15px] h-[15px]">
                          <div className="absolute w-[15px] h-[15px] top-0 left-0">
                            <div className="max-w-[15px] w-[15px] max-h-[15px] h-[15px] top-[-50px] flex flex-col items-center justify-center gap-2.5 relative">
                              <div className="flex flex-col items-start justify-center flex-[0_0_auto] mt-[-37.50px] relative self-stretch w-full">
                                <div className="relative w-[15px] h-[15px]">
                                  <img
                                    className={`absolute ${item.statusIconClass}`}
                                    alt="Group"
                                    src={item.statusIcon}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[19px] h-[19px] top-0 left-0 rounded border-[#222222] absolute border border-solid" />
                  </div>
                ) : (
                  <div
                    className={`inline-flex ${index === 0 ? "flex-[0_0_auto] mr-[-1.28px] rounded overflow-hidden rotate-[47.64deg]" : "flex-[0_0_auto] rounded overflow-hidden"} items-center justify-center relative`}
                  >
                    <div className="flex flex-col w-[17.99px] h-[17.99px] items-start justify-center relative">
                      <div className="relative self-stretch w-full h-[17.99px]">
                        <img
                          className={`absolute ${item.statusIconClass}`}
                          alt="Group"
                          src={item.statusIcon}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="w-[340px] h-[38px] top-0 left-0 rounded border-[#222222] absolute border border-solid" />
              </div>
            ))}
            <div className="w-[360px] h-40 top-0 left-0 border-[#222222] absolute border border-solid" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[60px] px-10 py-[100px] w-full">
      <div className="flex flex-col w-full max-w-[1840px] items-center justify-center gap-[25px]">
        <Badge
          variant="outline"
          className="bg-loving-help-337691framerappcod-gray-80 text-white font-medium text-sm tracking-[-0.28px] leading-[16.8px] border-[#222222] rounded-md"
        >
          Our Process
        </Badge>

        <div className="flex flex-col w-full items-center">
          <h2 className="text-[50px] font-normal text-center tracking-[-2.00px] leading-[55px] max-w-[700px] bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent [font-family:'Onest',Helvetica]">
            Why Thousands
            <br />
            Trust Our Platform
          </h2>

          <p className="mt-4 text-lg font-medium text-[#cccccc] text-center tracking-[-0.36px] leading-[27px] max-w-[600px] [font-family:'Onest',Helvetica]">
            We make it easy to find professionals you can count on — for every
            need, every time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] w-full">
        {processSteps.map((step, index) => (
          <Card
            key={`process-step-${index}`}
            className="bg-loving-help-337691framerappcod-gray-80 border-[#222222] rounded-lg overflow-hidden"
          >
            <CardContent className="flex flex-col items-center justify-center gap-5 p-[30px]">
              <div className="flex flex-col w-full items-center justify-center gap-[9.2px]">
                <div className="flex flex-col w-full items-start justify-center gap-2.5">
                  <Badge
                    variant="outline"
                    className="bg-loving-help-337691framerappcod-gray-80 text-white font-medium text-xs tracking-[-0.48px] leading-3 border-[#222222] rounded"
                  >
                    {step.step}
                  </Badge>

                  <h3 className="self-stretch mt-[-1.00px] font-loving-help-337691-framer-app-onest-medium font-[number:var(--loving-help-337691-framer-app-onest-medium-font-weight)] text-white text-[length:var(--loving-help-337691-framer-app-onest-medium-font-size)] tracking-[var(--loving-help-337691-framer-app-onest-medium-letter-spacing)] leading-[var(--loving-help-337691-framer-app-onest-medium-line-height)] [font-style:var(--loving-help-337691-framer-app-onest-medium-font-style)]">
                    {step.title}
                  </h3>
                </div>

                <div className="flex flex-col w-full items-start">
                  <p className="self-stretch mt-[-1.00px] font-loving-help-337691-framer-app-semantic-strong font-[number:var(--loving-help-337691-framer-app-semantic-strong-font-weight)] text-[#cccccc] text-[length:var(--loving-help-337691-framer-app-semantic-strong-font-size)] tracking-[var(--loving-help-337691-framer-app-semantic-strong-letter-spacing)] leading-[var(--loving-help-337691-framer-app-semantic-strong-line-height)] [font-style:var(--loving-help-337691-framer-app-semantic-strong-font-style)]">
                    {step.description}
                  </p>
                </div>
              </div>

              {step.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
