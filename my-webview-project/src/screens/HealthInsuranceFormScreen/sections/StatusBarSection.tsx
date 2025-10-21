import React from 'react';

export const StatusBarSection: React.FC = () => {
  return (
    <div className="w-[390px] h-11 bg-white relative overflow-hidden">
      {/* Time */}
      <div className="absolute left-[27px] top-[13px]">
        <time className="text-[#002D63] text-sm font-semibold font-['SF_Pro'] leading-5">
          9:41
        </time>
      </div>

      {/* Right Icons - Signal, WiFi, Battery */}
      <div className="absolute right-[14px] top-[18px] flex gap-[5px] items-center">
        {/* Signal Icon */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
          <rect x="13.78" width="3.21" height="10.57" fill="#002D63" />
          <rect x="9.19" y="2.3" width="3.21" height="8.27" fill="#002D63" />
          <rect x="4.59" y="4.59" width="3.21" height="5.97" fill="#002D63" />
          <rect y="5.97" width="3.21" height="4.59" fill="#002D63" />
        </svg>

        {/* WiFi Icon */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M7.36 10.57C7.36 11.43 6.66 12.13 5.8 12.13C4.94 12.13 4.24 11.43 4.24 10.57C4.24 9.71 4.94 9.01 5.8 9.01C6.66 9.01 7.36 9.71 7.36 10.57Z" fill="#002D63" />
          <path d="M11.86 7.42C10.81 6.37 9.37 5.77 7.83 5.77C6.29 5.77 4.85 6.37 3.8 7.42" stroke="#002D63" strokeWidth="1.5" />
          <path d="M14.34 4.99C12.64 3.29 10.33 2.36 7.92 2.36C5.51 2.36 3.2 3.29 1.5 4.99" stroke="#002D63" strokeWidth="1.5" />
        </svg>

        {/* Battery Icon */}
        <svg width="25" height="11" viewBox="0 0 25 11" fill="none">
          <rect x="2" y="2" width="18" height="7" rx="2" fill="#002D63" />
          <rect x="22.75" y="3.5" width="1.5" height="4" rx="0.75" opacity="0.5" fill="#002D63" />
        </svg>
      </div>
    </div>
  );
};