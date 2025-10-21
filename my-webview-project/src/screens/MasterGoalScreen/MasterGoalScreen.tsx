import React from "react";
import { HeaderContainerSection } from "./sections/HeaderContainerSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ProductDisplaySection } from "./sections/ProductDisplaySection";

export const MasterGoalScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="923:34361"
    >

      <HeaderContainerSection />

      <MainContentSection />

      <ProductDisplaySection />

      <footer className="flex flex-col items-center justify-center relative self-stretch w-full bg-appwhite">
        <div className="relative self-stretch w-full h-[34px]">
          <div className="absolute left-[calc(50.00%_-_67px)] bottom-[9px] w-[134px] h-1 bg-apponon-white rounded-sm" />
        </div>
      </footer>
    </div>
  );
};
