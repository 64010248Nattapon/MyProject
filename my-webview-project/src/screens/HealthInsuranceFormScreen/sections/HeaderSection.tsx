import React from 'react';
import { ChevronLeftIcon } from 'lucide-react';

export const HeaderSection: React.FC = () => {
  return (
    <div className="w-[390px] h-[44px] bg-white shadow-[0px_4px_0px_rgba(76,87,101,0.06)] flex items-center px-2 relative">
      {/* Back Button */}
      <button className="w-10 h-10 flex items-center justify-center">
        <ChevronLeftIcon className="w-6 h-6 text-[#002D63]" />
      </button>

      {/* Title */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[#002D63] text-xl font-bold font-['Ekachon'] leading-6 tracking-[0.4px]">
          ประกันสุขภาพ
        </h1>
      </div>
    </div>
  );
};