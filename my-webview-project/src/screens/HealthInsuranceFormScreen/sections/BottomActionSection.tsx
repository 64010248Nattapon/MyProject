import React from 'react';

export const BottomActionSection: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-[390px] bg-white flex flex-col">
      {/* Action Button Container */}
      <div className="px-4 py-6 bg-white shadow-[0px_-4px_0px_rgba(76,87,101,0.06)] flex flex-col gap-4">
        {/* Next Button - Disabled State */}
        <button 
          disabled
          className="w-full h-12 px-4 py-2 bg-[#F5F6F7] rounded-3xl flex items-center justify-center"
        >
          <span className="text-[#B0BCCB] text-xl font-bold font-['Ekachon'] leading-8 tracking-[0.4px]">
            ถัดไป
          </span>
        </button>
      </div>

      {/* iOS Home Indicator */}
      <div className="h-[34px] relative flex items-center justify-center">
        <div className="w-[134px] h-1 bg-[#002D63] rounded-sm" />
      </div>
    </div>
  );
};