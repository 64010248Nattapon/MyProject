import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const NavigationHeaderSection = (): JSX.Element => {
  return (
    <header className="w-full bg-pagedarkbackground px-4 pt-6 pb-6">
      <div className="flex items-center gap-3 mb-2 translate-y-[-1rem] animate-fade-in opacity-0">
        <Button
          variant="ghost"
          size="icon"
          className="h-auto w-auto p-0 hover:bg-transparent"
          aria-label="Go back"
        >
          <ChevronLeftIcon className="w-6 h-6 text-primaryhonestwhite" />
        </Button>
        <h1 className="font-TTB-h3 font-[number:var(--TTB-h3-font-weight)] text-primaryhonestwhite text-[length:var(--TTB-h3-font-size)] tracking-[var(--TTB-h3-letter-spacing)] leading-[var(--TTB-h3-line-height)] [font-style:var(--TTB-h3-font-style)]">
          เลอกประกน
        </h1>
      </div>
      <p className="font-TTB-paragraphsmall font-[number:var(--TTB-paragraphsmall-font-weight)] text-componentdarkdefault text-[length:var(--TTB-paragraphsmall-font-size)] tracking-[var(--TTB-paragraphsmall-letter-spacing)] leading-[var(--TTB-paragraphsmall-line-height)] [font-style:var(--TTB-paragraphsmall-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        เลอกสงทคณสนใจเพอคนหาผลตภณฑทเหมาะกบคณ
      </p>
    </header>
  );
};
