import React from 'react';
import StatusBarSection from './sections/StatusBarSection';
import HeaderSection from './sections/HeaderSection';
import ProgressStepSection from './sections/ProgressStepSection';
import OccupationInputSection from './sections/OccupationInputSection';
import HealthQuestionsSection from './sections/HealthQuestionsSection';
import BottomActionSection from './sections/BottomActionSection';

const HealthInsuranceFormScreen: React.FC = () => {
  return (
    <div className="p-4">
      <StatusBarSection />
      <HeaderSection title="ประกันสุขภาพ" />
      <ProgressStepSection />
      <OccupationInputSection />
      <HealthQuestionsSection />
      <BottomActionSection />
    </div>
  );
};

export default HealthInsuranceFormScreen;