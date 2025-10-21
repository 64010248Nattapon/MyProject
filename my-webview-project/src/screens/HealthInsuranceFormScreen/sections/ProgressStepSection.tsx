import React from 'react';

export const ProgressStepSection: React.FC = () => {
  return (
    <div className="px-4 pt-4">
      <div className="w-full h-20 px-4 py-2 bg-[#F5F6F7] rounded-2xl border border-[#DFE6EC] shadow-[0px_4px_0px_rgba(76,87,101,0.06)] flex flex-col gap-1">
        {/* Step Labels */}
        <div className="flex justify-between items-center">
          <span className="text-[#002D63] text-sm font-normal font-['Ekachon'] leading-5 tracking-[0.4px]">
            ระบุข้อมูล
          </span>
          <span className="text-[#002D63] text-sm font-normal font-['Ekachon'] leading-5 tracking-[0.4px]">
            ตรวจสอบ
          </span>
          <span className="text-[#002D63] text-sm font-normal font-['Ekachon'] leading-5 tracking-[0.4px]">
            ชำระเงิน
          </span>
        </div>

        {/* Progress Indicators */}
        <div className="flex items-center justify-between px-5 pr-[25px]">
          {/* Step 1 - Active */}
          <div className="w-4 h-4 bg-[#0050F0] rounded-full border border-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)]" />
          
          {/* Line 1 */}
          <div className="w-[119px] h-0.5 bg-[#0050F0] opacity-20" />
          
          {/* Step 2 - Inactive */}
          <div className="w-[15px] h-[15px] bg-[#0050F0] opacity-20 rounded-full border border-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)]" />
          
          {/* Line 2 */}
          <div className="w-[119px] h-0.5 bg-[#0050F0] opacity-20" />
          
          {/* Step 3 - Inactive */}
          <div className="w-[15px] h-[15px] bg-[#0050F0] opacity-20 rounded-full border border-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)]" />
        </div>
      </div>
    </div>
  );
};