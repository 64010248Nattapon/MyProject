import React from 'react';

export const HealthQuestionsSection: React.FC = () => {
  return (
    <div className="px-4 flex flex-col gap-6">
      {/* Title */}
      <h2 className="text-[#002D63] text-base font-bold font-['Ekachon'] leading-6 tracking-[0.4px]">
        ตอบคำถามสุขภาพของคุณ
      </h2>

      {/* Weight and Height Inputs */}
      <div className="flex gap-4">
        <div className="flex-1 bg-white rounded-xl border border-[#B0BCCB] px-3 py-2">
          <div className="py-2.5">
            <span className="text-[#B0BCCB] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
              น้ำหนัก (กก.)
            </span>
          </div>
        </div>
        
        <div className="flex-1 bg-white rounded-xl border border-[#B0BCCB] px-3 py-2">
          <div className="py-2.5">
            <span className="text-[#B0BCCB] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
              ส่วนสูง (ซม.)
            </span>
          </div>
        </div>
      </div>

      {/* Question 1 */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6">1.</span>
          <p className="flex-1 text-[#002D63] text-base font-normal font-['Ekachon'] leading-6">
            ใน 6 เดือนที่ผ่านมา น้ำหนักตัวของคุณลดลงมากกว่า 5 กิโลกรัม เนื่องจากเจ็บป่วยหรือไม่ทราบสาเหตุหรือไม่
          </p>
        </div>
        
        <div className="flex">
          {/* Yes Option */}
          <div className="w-[179px] py-2 flex items-center gap-2">
            <div className="p-1">
              <div className="w-4 h-4 bg-white rounded-full border-2 border-[#002D63]" />
            </div>
            <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
              ใช่
            </span>
          </div>
          
          {/* No Option - Selected */}
          <div className="w-[179px] py-2 flex items-center gap-2">
            <div className="p-1">
              <div className="w-4 h-4 bg-white rounded-full relative overflow-hidden" style={{outline: '5px #F68B1F solid', outlineOffset: '-5px'}}>
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
              ไม่ใช่
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full py-1">
        <div className="w-full h-px bg-[#DFE6EC]" />
      </div>

      {/* Question 2 */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6">2.</span>
            <p className="flex-1 text-[#002D63] text-base font-normal font-['Ekachon'] leading-6">
              คุณเคยได้รับการวินิจฉัย หรือการรักษาหรือ ตั้งข้อสังเกตโดยแพทย์ว่าป่วยเป็นโรคตามรายการนี้หรือไม่
            </p>
          </div>

          {/* 2.1 */}
          <div className="px-4">
            <p className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6">
              2.1) กลุ่มที่ 1
            </p>
          </div>

          <div className="pl-6 flex flex-col gap-2">
            <div className="flex gap-1">
              <div className="w-6 h-6 relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#7D8999] rounded-full" />
              </div>
              <p className="flex-1 text-[#7D8999] text-sm font-normal font-['Ekachon'] leading-5">
                กลุ่มโรคที่ 1: โรคอัมพฤกษ์/โรคอัมพาต โรคหลอดเลือดในสมอง โรคความจำเสื่อม โรคชัก โรคพาร์กินสัน โรคหัวใจ โรคเส้นเลือดหัวใจตีบ โรคข้ออักเสบ โรคเอสแอลอี โรคไต โรคมะเร็ง เนื้องอก เนื้องอกก้อนหรือถุงน้ำที่ก่อให้เกิดมะเร็ง โรคพิษสุราเรื้อรัง โรคเอดส์หรือภูมิคุ้มกันบกพร่อง
              </p>
            </div>

            <div className="flex gap-1">
              <div className="w-6 h-6 relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#7D8999] rounded-full" />
              </div>
              <p className="flex-1 text-[#7D8999] text-sm font-normal font-['Ekachon'] leading-5">
                กลุ่มโรคที่ 2: โรคไทรอยด์ โรคความดันโลหิตสูง โรคเบาหวาน โรคจิต โรคระบบประสาท โรคตับหรือทางเดินน้ำดี ม้ามโต โรคหอบหืด โรคปอดหรือปอดอักเสบ พิการทางร่างกาย ดีซ่าน
              </p>
            </div>
          </div>

          {/* Radio buttons for 2.1 */}
          <div className="flex">
            <div className="w-[179px] py-2 flex items-center gap-2">
              <div className="p-1">
                <div className="w-4 h-4 bg-white rounded-full border-2 border-[#002D63]" />
              </div>
              <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
                เคย
              </span>
            </div>
            
            <div className="w-[179px] py-2 flex items-center gap-2">
              <div className="p-1">
                <div className="w-4 h-4 bg-white rounded-full relative overflow-hidden" style={{outline: '5px #F68B1F solid', outlineOffset: '-5px'}}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
                ไม่เคย
              </span>
            </div>
          </div>
        </div>

        {/* 2.2 */}
        <div className="flex flex-col gap-2">
          <div className="px-4">
            <p className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6">
              2.2) กลุ่มที่ 2 โดยเคยเป็นระยะเวลานานกว่า 2 สัปดาห์ หรือไม่
            </p>
          </div>

          <div className="pl-6">
            <div className="flex gap-1">
              <div className="w-6 h-6 relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#7D8999] rounded-full" />
              </div>
              <p className="flex-1 text-[#7D8999] text-sm font-normal font-['Ekachon'] leading-5">
                ปวดศีรษะรุนแรงเรื้อรัง ไอเรื้อรัง ไข้เรื้อรัง ปวดท้องเรื้อรัง อาเจียนหรือถ่ายเป็นเลือด ท้องเสียเรื้อรัง ปวดข้อเรื้อรัง โรคผิวหนังเรื้อรัง เลือดออกผิดปกติทางช่องคลอด หลอดลมอักเสบเรื้อรัง ต่อมทอนซิลอักเสบเรื้อรัง ไซนัสอักเสบ ภูมิแพ้ โรคกระเพาะอาหารอักเสบเรื้อรัง หมอนรองกระดูกเคลื่อนหรือทับเส้นประสาท ความผิดปกติและโรคเกี่ยวกับต่อมลูกหมาก ภาวะการมีโปรตีนปนในปัสสาวะ ภาวะน้ำตาลในเลือดสูงหรือมีน้ำตาลในปัสสาวะ
              </p>
            </div>
          </div>

          {/* Radio buttons for 2.2 */}
          <div className="flex">
            <div className="w-[179px] py-2 flex items-center gap-2">
              <div className="p-1">
                <div className="w-4 h-4 bg-white rounded-full border-2 border-[#002D63]" />
              </div>
              <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
                เคย
              </span>
            </div>
            
            <div className="w-[179px] py-2 flex items-center gap-2">
              <div className="p-1">
                <div className="w-4 h-4 bg-white rounded-full relative overflow-hidden" style={{outline: '5px #F68B1F solid', outlineOffset: '-5px'}}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
                ไม่เคย
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full py-1">
        <div className="w-full h-px bg-[#DFE6EC]" />
      </div>

      {/* Question 3 */}
      <div className="flex flex-col gap-2 pb-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6">3.</span>
            <p className="flex-1 text-[#002D63] text-base font-normal font-['Ekachon'] leading-6">
              ภายในระยะเวลา 3 ปีที่ผ่านมาคุณเคย... ต่อไปนี้หรือไม่
            </p>
          </div>

          <div className="pl-6 flex flex-col gap-2">
            <div className="flex gap-1">
              <div className="w-6 h-6 relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#7D8999] rounded-full" />
              </div>
              <p className="flex-1 text-[#7D8999] text-sm font-normal font-['Ekachon'] leading-5">
                ได้รับการตรวจสุขภาพ หรือการตรวจเพื่อวินิจฉัยโรคและพบว่าผลตรวจผิดปกติ เช่น การตรวจความดันโลหิต การตรวจปัสสาวะ การตรวจเอ็กซเรย์ การตรวจเลือด การตรวจเอ็มอาร์ไอ (MRI) การตรวจอัลตราซาวด์ การตรวจโดยการส่องกล้อง การตรวจเมมโมแกรม การตรวจคลื่นไฟฟ้าหัวใจ การตรวจชิ้นเนื้อ การตรวจด้วยเครื่องมือพิเศษ การตรวจแบบอื่น
              </p>
            </div>

            <div className="flex gap-1">
              <div className="w-6 h-6 relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#7D8999] rounded-full" />
              </div>
              <p className="flex-1 text-[#7D8999] text-sm font-normal font-['Ekachon'] leading-5">
                บาดเจ็บ หรือเจ็บป่วย จนต้องเข้ารับการรักษาในโรงพยาบาล หรือต้องผ่าตัด
              </p>
            </div>

            <div className="flex gap-1">
              <div className="w-6 h-6 relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#7D8999] rounded-full" />
              </div>
              <p className="flex-1 text-[#7D8999] text-sm font-normal font-['Ekachon'] leading-5">
                ได้รับการแนะนำจากแพทย์แผนปัจจุบัน หรือแพทย์ทางเลือกเพื่อรับการรักษาใด ๆ หรือไม่
              </p>
            </div>
          </div>

          <div className="pl-[21px]">
            <p className="text-[#7D8999] text-sm font-normal font-['Ekachon'] leading-5">
              *ไม่รวมถึงการตรวจสุขภาพประจำปีที่ผลตรวจปกติ*
            </p>
          </div>
        </div>

        {/* Radio buttons for Question 3 */}
        <div className="flex flex-col">
          {/* Option 1 - Selected */}
          <div className="w-full py-2 flex items-center gap-2">
            <div className="p-1">
              <div className="w-4 h-4 bg-white rounded-full relative overflow-hidden" style={{outline: '5px #F68B1F solid', outlineOffset: '-5px'}}>
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
              ไม่เคย
            </span>
          </div>

          {/* Option 2 */}
          <div className="w-full py-2 flex items-center gap-2">
            <div className="p-1">
              <div className="w-4 h-4 bg-white rounded-full border-2 border-[#002D63]" />
            </div>
            <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
              เคย เเต่ปัจจุบันผลปกติ/รักษาหายเเล้ว
            </span>
          </div>

          {/* Option 3 */}
          <div className="w-full py-2 flex items-center gap-2">
            <div className="p-1">
              <div className="w-4 h-4 bg-white rounded-full border-2 border-[#002D63]" />
            </div>
            <span className="text-[#002D63] text-base font-normal font-['Ekachon'] leading-6 tracking-[0.4px]">
              เคย ผลตรวจผิดปกติ/รอผลตรวจ/กำลังรอรับการรักษาอยู่/อยู่ระหว่างการรักษาต่อเนื่อง
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};