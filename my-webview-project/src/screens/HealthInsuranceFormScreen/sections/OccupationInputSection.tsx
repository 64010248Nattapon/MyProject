import React from 'react';
import { ChevronDownIcon } from 'lucide-react';

export const OccupationInputSection: React.FC = () => {
  return (
    <div className="px-4 pt-6 flex flex-col gap-4">
      {/* Title */}
      <h2 className="text-[#002D63] text-base font-bold font-['Ekachon'] leading-6 tracking-[0.4px]">
        ข้อมูลเบื้องต้นเพื่อพิจารณาทำประกัน
      </h2>

      {/* Occupation Dropdown */}
      <div className="w-full bg-white rounded-xl border border-[#B0BCCB] overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex-1 py-2.5">
            <span className="text-[#B0BCCB] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
              อาชีพ
            </span>
          </div>
          
          <button className="p-2 rounded-3xl">
            <ChevronDownIcon className="w-6 h-6 text-[#002D63]" />
          </button>
        </div>
      </div>
    </div>
  );
};