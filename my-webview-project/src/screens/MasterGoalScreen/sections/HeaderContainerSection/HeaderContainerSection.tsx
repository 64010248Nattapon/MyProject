import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderContainerSection = (): JSX.Element => {
  return (
    <header className="w-full flex flex-col items-start bg-primaryconfidentblue">
      <div className="flex items-center justify-between px-[27px] py-3 w-full">
        <div className="w-[54px] h-[21px]">
          <div className="w-[54px] h-[21px] flex rounded-3xl">
            <time className="mt-px w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-white text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]">
              9:41
            </time>
          </div>
        </div>

        <img
          className="w-[77.4px] h-[13px]"
          alt="Right side"
          src="https://c.animaapp.com/mh0rcd9w2MaWB5/img/right-side.png"
        />
      </div>

      <nav className="flex items-center gap-2 px-2 py-0 w-full relative">
        <Button
          variant="ghost"
          size="icon"
          className="h-auto p-2 bg-pagedarkcomponentghostbackground hover:bg-pagedarkcomponentghostbackground/80 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6 text-pagedarkcomponentghostdefault" />
        </Button>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-TTB-pagetitle font-[number:var(--TTB-pagetitle-font-weight)] text-pagedarkcomponentghostdefault text-[length:var(--TTB-pagetitle-font-size)] text-center tracking-[var(--TTB-pagetitle-letter-spacing)] leading-[var(--TTB-pagetitle-line-height)] whitespace-nowrap [font-style:var(--TTB-pagetitle-font-style)]">
          เลือกประกัน
        </h1>
      </nav>
    </header>
  );
};
