import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const productCategories = [
  { id: "all", label: "ทั้งหมด", active: true },
  { id: "health", label: "สุขภาพ", active: false },
  { id: "critical", label: "โรคร้ายแรง", active: false },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start w-full">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start pb-6 w-full">
            <div className="flex flex-col items-start w-full">
              <div className="pt-6 pb-14 px-4 w-full flex flex-col items-start bg-pagedarkbackground">
                <div className="flex flex-col items-start gap-1 w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
                  <h1 className="w-full font-TTB-h3 font-[number:var(--TTB-h3-font-weight)] text-primaryhonestwhite text-[length:var(--TTB-h3-font-size)] tracking-[var(--TTB-h3-letter-spacing)] leading-[var(--TTB-h3-line-height)] [font-style:var(--TTB-h3-font-style)]">
                    ประกน
                  </h1>

                  <p className="w-full font-TTB-paragraphsmall font-[number:var(--TTB-paragraphsmall-font-weight)] text-componentdarkdefault text-[length:var(--TTB-paragraphsmall-font-size)] tracking-[var(--TTB-paragraphsmall-letter-spacing)] leading-[var(--TTB-paragraphsmall-line-height)] [font-style:var(--TTB-paragraphsmall-font-style)]">
                    เลือกสิ่งที่คุณสนใจเพื่อค้นหาผลิตภัณฑ์ที่เหมาะกับคุณ
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 px-4 w-full -mt-8 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
                <Card className="w-full bg-componentlightbackground rounded-2xl border border-solid border-[#dfe6ec] shadow-down-shadow">
                  <CardContent className="flex flex-col items-start gap-4 p-4">
                    <div className="flex flex-col items-start justify-center gap-4 w-full">
                      <div className="inline-flex flex-col gap-2 items-start">
                        <label className="w-[305px] font-TTB-subtitle font-[number:var(--TTB-subtitle-font-weight)] text-componentlightdesc text-[length:var(--TTB-subtitle-font-size)] tracking-[var(--TTB-subtitle-letter-spacing)] leading-[var(--TTB-subtitle-line-height)] [font-style:var(--TTB-subtitle-font-style)]">
                          สนใจผลิตภัณฑ์
                        </label>

                        <div className="flex w-[305px] items-start gap-2 flex-wrap">
                          {productCategories.map((category) => (
                            <Button
                              key={category.id}
                              variant="ghost"
                              className={`h-auto inline-flex items-center gap-1 px-3 py-2 rounded-3xl transition-colors ${category.active
                                  ? "bg-componentdarkbackground hover:bg-componentdarkbackground/90"
                                  : "bg-componentlightbackground hover:bg-componentlightbackground/80 border border-solid border-[#b0bccb]"
                                }`}
                            >
                              <span
                                className={`flex items-center justify-center w-fit font-TTB-labellist font-[number:var(--TTB-labellist-font-weight)] text-[length:var(--TTB-labellist-font-size)] tracking-[var(--TTB-labellist-letter-spacing)] leading-[var(--TTB-labellist-line-height)] whitespace-nowrap [font-style:var(--TTB-labellist-font-style)] ${category.active
                                    ? "text-componentdarkdefault"
                                    : "text-componentlightlabel"
                                  }`}
                              >
                                {category.label}
                              </span>
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 w-full items-start">
                        <label className="w-full font-TTB-subtitle font-[number:var(--TTB-subtitle-font-weight)] text-componentlightdesc text-[length:var(--TTB-subtitle-font-size)] tracking-[var(--TTB-subtitle-letter-spacing)] leading-[var(--TTB-subtitle-line-height)] [font-style:var(--TTB-subtitle-font-style)]">
                          ค่าเบี้ยที่ต้องการจ่าย/ปี (ไม่บังคับ)
                        </label>

                        <div className="flex flex-col items-start gap-0.5 w-full">
                          <div className="flex items-start w-full bg-componentlightbackground rounded-xl overflow-hidden border border-solid border-[#b0bccb]">
                            <div className="flex items-center justify-center gap-2 px-3 py-2 flex-1">
                              <div className="flex flex-col items-start gap-1 flex-1">
                                <div className="inline-flex items-start">
                                  <span className="flex items-center justify-center w-fit font-TTB-labelinput font-[number:var(--TTB-labelinput-font-weight)] text-componentlightlabel text-[length:var(--TTB-labelinput-font-size)] tracking-[var(--TTB-labelinput-letter-spacing)] leading-[var(--TTB-labelinput-line-height)] whitespace-nowrap [font-style:var(--TTB-labelinput-font-style)]">
                                    ค่าเบี้ยต่อปี (ระบุมากกว่า 500 บาท)
                                  </span>
                                </div>

                                <div className="flex h-6 items-center gap-1 w-full">
                                  <Input
                                    type="text"
                                    defaultValue="0.00"
                                    className="flex-1 border-0 p-0 h-6 bg-transparent font-TTB-paragraphmedium font-[number:var(--TTB-paragraphmedium-font-weight)] text-componentlightplaceholder text-[length:var(--TTB-paragraphmedium-font-size)] tracking-[var(--TTB-paragraphmedium-letter-spacing)] leading-[var(--TTB-paragraphmedium-line-height)] [font-style:var(--TTB-paragraphmedium-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                                  />

                                  <span className="w-fit font-TTB-paragraphmedium font-[number:var(--TTB-paragraphmedium-font-weight)] text-componentlightlabel text-[length:var(--TTB-paragraphmedium-font-size)] text-right tracking-[var(--TTB-paragraphmedium-letter-spacing)] leading-[var(--TTB-paragraphmedium-line-height)] whitespace-nowrap [font-style:var(--TTB-paragraphmedium-font-style)]">
                                    บาท
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-10 px-4 items-center justify-between opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          <h2 className="flex items-center justify-center h-8 font-TTB-h3 font-[number:var(--TTB-h3-font-weight)] text-pagelighttextdefault text-[length:var(--TTB-h3-font-size)] tracking-[var(--TTB-h3-letter-spacing)] leading-[var(--TTB-h3-line-height)] [font-style:var(--TTB-h3-font-style)]">
            ผลการค้นหา
          </h2>

          <Button
            variant="ghost"
            className="h-auto inline-flex items-center justify-center gap-1 px-3 py-1 bg-componentsecondarybackground rounded-3xl overflow-hidden border border-solid border-[#f68b1f] hover:bg-componentsecondarybackground/90 transition-colors"
          >
            <span className="flex items-center justify-center w-fit font-TTB-buttonsmall font-[number:var(--TTB-buttonsmall-font-weight)] text-componentprimarybackground text-[length:var(--TTB-buttonsmall-font-size)] text-center tracking-[var(--TTB-buttonsmall-letter-spacing)] leading-[var(--TTB-buttonsmall-line-height)] whitespace-nowrap [font-style:var(--TTB-buttonsmall-font-style)]">
              เทียบประกัน
            </span>

            <ChevronRightIcon className="w-4 h-4 text-componentprimarybackground" />
          </Button>
        </div>
      </div>
    </section>
  );
};
