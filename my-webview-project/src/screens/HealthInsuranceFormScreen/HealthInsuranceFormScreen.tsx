import React from 'react';

import { StatusBarSection } from './sections/StatusBarSection';
import { HeaderSection } from './sections/HeaderSection';
import { ProgressStepSection } from './sections/ProgressStepSection';
import { OccupationInputSection } from './sections/OccupationInputSection';
import { HealthQuestionsSection } from './sections/HealthQuestionsSection';
import { BottomActionSection } from './sections/BottomActionSection';

export const HealthInsuranceFormScreen: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-white overflow-hidden">
      {/* Status Bar */}
      <StatusBarSection />

      {/* Header */}
      <HeaderSection />

      {/* Scrollable Content */}
      <div className="absolute left-0 top-[85px] w-[390px] h-[calc(100vh-85px-108px)] overflow-y-auto">
        {/* Progress Steps */}
        <ProgressStepSection />

        {/* Occupation Input */}
        <OccupationInputSection />

        {/* Divider */}
        <div className="w-full py-6">
          <div className="w-full h-1 bg-[#F5F6F7]" />
        </div>

        {/* Health Questions */}
        <HealthQuestionsSection />
      </div>

      {/* Bottom Action */}
      <BottomActionSection />
    </div>
  );
};

