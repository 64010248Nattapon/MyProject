import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const products = [
  {
    imageUrl: "https://c.animaapp.com/mh0rcd9w2MaWB5/img/image.png",
    badges: [
      {
        text: "แนะน",
        bgColor: "bg-pagedarkbackground",
        borderColor: "border-[#0050f0]",
      },
      {
        text: "ลดหยอนภาษ",
        bgColor: "bg-component-informationdefault",
        borderColor: "border-[#002d63]",
      },
    ],
    title: "ททบ เหมา เหมา อลตรา แคร",
    description: "คมครองแบบเหมาจาย พรอมรบความคมครอง X2 เมอตองตอสกบ 7 โรครายแรง",
    premiumLabel: "คาเบยเรมตน",
    premiumValue: "7,300",
    coverageLabel: "คมครองคารกษาผปวยในเหมาจายสง",
    coverageValue: "800,000",
  },
  {
    imageUrl: "https://c.animaapp.com/mh0rcd9w2MaWB5/img/image-1.png",
    badges: [
      {
        text: "ขายด",
        bgColor: "bg-pagelightsuccess",
        borderColor: "border-[#1eb950]",
      },
      {
        text: "ลดหยอนภาษ",
        bgColor: "bg-component-informationdefault",
        borderColor: "border-[#002d63]",
      },
    ],
    title: "ททบ เฮลธ แคร พลส",
    description:
      "อนใจ คมครองสขภาพใหคนทงบานคารกษาจายตามจรง เบกคาหองไดไมจกดตอวน",
    premiumLabel: "คาเบยเรมตน",
    premiumValue: "11,315",
    coverageLabel: "คารกษาพยาบาลผปวยในสงสด",
    coverageValue: "300,000",
  },
  {
    imageUrl: "https://c.animaapp.com/mh0rcd9w2MaWB5/img/image-2.png",
    badges: [
      {
        text: "ขายด",
        bgColor: "bg-pagelightsuccess",
        borderColor: "border-[#1eb950]",
      },
      {
        text: "ลดหยอนภาษ",
        bgColor: "bg-component-informationdefault",
        borderColor: "border-[#002d63]",
      },
    ],
    title: "ประกนมะเรง รบเงนกอนทกระยะ",
    description:
      "คมครองมะเรงทกประเภท ทกระยะ สงสด 1.5 ลานบาท แตไมจบ คมครองชวตอก 50,000 บาท",
    premiumLabel: "คาเบยเรมตน",
    premiumValue: "504",
    coverageLabel: "คมครองทกประเภท ทกระยะ รวมสงสด",
    coverageValue: "1,500,000",
  },
];

export const ProductDisplaySection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start p-4 w-full">
      <div className="gap-4 flex flex-col items-start w-full">
        {products.map((product, index) => (
          <Card
            key={index}
            className="w-full rounded-2xl overflow-hidden border border-solid border-[#dfe6ec] shadow-down-shadow bg-[linear-gradient(24deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] translate-y-[-1rem] animate-fade-in opacity-0"
            style={
              { "--animation-delay": `${index * 200}ms` } as React.CSSProperties
            }
          >
            <CardContent className="p-0">
              <div className="flex flex-col items-start justify-end w-full">
                <div
                  className="flex h-[132px] items-end gap-2 p-4 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                >
                  {product.badges.map((badge, badgeIndex) => (
                    <Badge
                      key={badgeIndex}
                      className={`${badge.bgColor} ${badge.borderColor} inline-flex items-center gap-1 px-2 py-1 rounded border border-solid h-auto`}
                    >
                      <span className="font-TTB-allcap font-[number:var(--TTB-allcap-font-weight)] text-page-lightbackground text-[length:var(--TTB-allcap-font-size)] text-center tracking-[var(--TTB-allcap-letter-spacing)] leading-[var(--TTB-allcap-line-height)] [font-style:var(--TTB-allcap-font-style)]">
                        {badge.text}
                      </span>
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col items-start px-0 py-4 w-full bg-primaryhonestwhite">
                  <div className="flex flex-col items-start pt-0 pb-2 px-4 w-full">
                    <h3 className="font-TTB-h3 font-[number:var(--TTB-h3-font-weight)] text-component-lightdefault text-[length:var(--TTB-h3-font-size)] tracking-[var(--TTB-h3-letter-spacing)] leading-[var(--TTB-h3-line-height)] [font-style:var(--TTB-h3-font-style)] w-full">
                      {product.title}
                    </h3>

                    <p className="font-TTB-paragraphxsmall font-[number:var(--TTB-paragraphxsmall-font-weight)] text-componentlightdesc text-[length:var(--TTB-paragraphxsmall-font-size)] tracking-[var(--TTB-paragraphxsmall-letter-spacing)] leading-[var(--TTB-paragraphxsmall-line-height)] [font-style:var(--TTB-paragraphxsmall-font-style)] w-full">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 px-4 py-0 w-full">
                    <div className="inline-flex flex-col items-start gap-4 px-0 py-2">
                      <span className="font-TTB-labelxsmall font-[number:var(--TTB-labelxsmall-font-weight)] text-componentlightlabel text-[length:var(--TTB-labelxsmall-font-size)] tracking-[var(--TTB-labelxsmall-letter-spacing)] leading-[var(--TTB-labelxsmall-line-height)] whitespace-nowrap [font-style:var(--TTB-labelxsmall-font-style)]">
                        {product.premiumLabel}
                      </span>

                      <span className="font-TTB-labelxsmall font-[number:var(--TTB-labelxsmall-font-weight)] text-componentlightlabel text-[length:var(--TTB-labelxsmall-font-size)] tracking-[var(--TTB-labelxsmall-letter-spacing)] leading-[var(--TTB-labelxsmall-line-height)] whitespace-nowrap [font-style:var(--TTB-labelxsmall-font-style)]">
                        {product.coverageLabel}
                      </span>
                    </div>

                    <div className="flex flex-col items-start gap-[3px] px-0 py-2 flex-1">
                      <div className="w-full [font-family:'Ekachon-Bold',Helvetica] font-normal text-component-lightdefault text-sm text-right leading-[14px]">
                        <span className="font-bold tracking-[0.01px] leading-6">
                          {product.premiumValue}
                        </span>
                        <span className="font-TTB-labelxsmall text-[length:var(--TTB-labelxsmall-font-size)] tracking-[var(--TTB-labelxsmall-letter-spacing)] leading-[var(--TTB-labelxsmall-line-height)] [font-style:var(--TTB-labelxsmall-font-style)] font-[number:var(--TTB-labelxsmall-font-weight)]">
                          {" "}
                          บาท/ป
                        </span>
                      </div>

                      <div className="w-full [font-family:'Ekachon-Bold',Helvetica] font-normal text-component-lightdefault text-sm text-right leading-[14px]">
                        <span className="font-bold text-[#002d63] tracking-[0.01px] leading-6">
                          {product.coverageValue}
                        </span>
                        <span className="font-[number:var(--TTB-labelxsmall-font-weight)] text-[#002d63] text-[length:var(--TTB-labelxsmall-font-size)] tracking-[var(--TTB-labelxsmall-letter-spacing)] leading-[var(--TTB-labelxsmall-line-height)] font-TTB-labelxsmall [font-style:var(--TTB-labelxsmall-font-style)]">
                          &nbsp;
                        </span>
                        <span className="font-TTB-labelxsmall text-[#002d63] text-[length:var(--TTB-labelxsmall-font-size)] tracking-[var(--TTB-labelxsmall-letter-spacing)] leading-[var(--TTB-labelxsmall-line-height)] [font-style:var(--TTB-labelxsmall-font-style)] font-[number:var(--TTB-labelxsmall-font-weight)]">
                          บาท/ป
                        </span>
                      </div>
                    </div>
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
