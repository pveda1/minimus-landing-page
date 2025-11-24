import svgPaths from "./svg-0kpk6jl2yx";
import img from "figma:asset/1ea9e073d7a80600447cc501bde41e284733550c.png";
import img1 from "figma:asset/59d8f7e934db11a36b1ce1b6acedbc508350e6b5.png";
import img2 from "figma:asset/f3095f5b681dcaeb3b8df5718fa8fbacde19cdde.png";
import { useActiveBreakpoint } from "figma:react";

function ArrowDesktop() {
  return <div className="content-stretch flex gap-[10px] h-full items-center shrink-0 w-[7px]" data-name="Arrow" />;
}

function InnerScreenDesktop() {
  return (
    <div className="absolute h-[607.439px] left-1/2 rounded-[16px] top-[18.5px] translate-x-[-50%] w-[869.742px]" data-name="Inner screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="Data points on top of landscape" className="absolute h-[105.27%] left-0 max-w-none top-[0.65%] w-full" src={img} />
      </div>
    </div>
  );
}

function IpadDesktop() {
  return (
    <div aria-label="Visual chart illustrating a 78% increase in efficiency across 33 regions between 2021 and 2024, with clear upward trends year over year" className="absolute bg-black h-[644px] left-[calc(50%+0.5px)] rounded-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[907px]" data-name="Ipad">
      <div className="h-[644px] overflow-clip relative rounded-[inherit] w-[907px]">
        <InnerScreenDesktop />
      </div>
      <div aria-hidden="true" className="absolute border-[2px_2px_0px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeaderDesktop() {
  return (
    <header className="box-border content-stretch flex flex-col gap-[50px] items-center p-0 relative size-full" data-name="Header">
      <h1 className="block font-['Crimson_Text:Regular',sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-[min-content]">minimus.</h1>
      <button className="bg-[#485c11] box-border content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0 w-[181px]" data-name="Button linkout">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Join the Waitlist
        </p>
        <div className="flex flex-row items-center self-stretch">
          <ArrowDesktop />
        </div>
      </button>
      <h1 className="block font-['Crimson_Text:Regular',sans-serif] h-[100px] leading-[0.9] not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-full whitespace-pre-wrap"> </h1>
      <div className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full" data-name="Hero image">
        <IpadDesktop />
      </div>
    </header>
  );
}

function ArrowTablet() {
  return <div className="content-stretch flex gap-[10px] h-full items-center shrink-0 w-[7px]" data-name="Arrow" />;
}

function InnerScreenTablet() {
  return (
    <div className="absolute h-[453.1px] left-1/2 rounded-[11.935px] top-[13.8px] translate-x-[-50%] w-[648.757px]" data-name="Inner screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[11.935px]">
        <img alt="Data points on top of landscape" className="absolute left-0 max-w-none size-full top-0" src={img} />
      </div>
    </div>
  );
}

function IpadTablet() {
  return (
    <div aria-label="Visual chart illustrating a 78% increase in efficiency across 33 regions between 2021 and 2024, with clear upward trends year over year" className="absolute bg-black h-[422.936px] left-[calc(50%+0.27px)] rounded-tl-[17.902px] rounded-tr-[17.902px] top-[calc(50%-29.53px)] translate-x-[-50%] translate-y-[-50%] w-[676.548px]" data-name="Ipad">
      <div className="h-[422.936px] overflow-clip relative rounded-[inherit] w-[676.548px]">
        <InnerScreenTablet />
      </div>
      <div aria-hidden="true" className="absolute border-[#929292] border-[1.492px_1.492px_0px] border-solid inset-0 pointer-events-none rounded-tl-[17.902px] rounded-tr-[17.902px] shadow-[0px_-2.984px_14.918px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeaderTablet() {
  return (
    <header className="box-border content-stretch flex flex-col gap-[41px] items-center p-0 relative size-full" data-name="Header">
      <h1 className="block font-['Crimson_Text:Regular',sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-[min-content]">minimus.</h1>
      <button className="bg-[#485c11] box-border content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0 w-[181px]" data-name="Button linkout">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Join the Waitlist
        </p>
        <div className="flex flex-row items-center self-stretch">
          <ArrowTablet />
        </div>
      </button>
      <h1 className="block font-['Crimson_Text:Regular',sans-serif] h-[50px] leading-[0.9] not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-full whitespace-pre-wrap"> </h1>
      <div className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full" data-name="Hero image">
        <IpadTablet />
      </div>
    </header>
  );
}

function ArrowMobile() {
  return <div className="content-stretch flex gap-[10px] h-full items-center shrink-0 w-[7px]" data-name="Arrow" />;
}

function UiElementsMobile() {
  return (
    <div className="absolute h-[22.195px] left-[20.2px] top-[8.06px] w-[207.243px]" data-name="UI elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 23">
        <g id="UI elements">
          <path d={svgPaths.p2d90ce80} fill="var(--fill-0, black)" id="Mockup elements 08" />
          <g id="Mockup elements 07">
            <path d={svgPaths.p18cd2400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18437400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a8dd800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3c7f6e00} fill="var(--fill-0, white)" />
          </g>
          <g id="Union">
            <path d={svgPaths.p37ab3000} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p2f276740} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p3fb1d770} fill="var(--fill-0, white)" />
          </g>
          <g id="Vector">
            <path d={svgPaths.p125ae4f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1ca2d700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f22b200} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function InnerScreenMobile() {
  return (
    <div className="absolute h-[521.757px] left-[10.95px] overflow-clip right-[10.95px] rounded-[27.365px] top-[10.03px]" data-name="Inner screen">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27.365px]">
        <img alt="Data points on top of landscape" className="absolute max-w-none object-50%-50% object-cover rounded-[27.365px] size-full" src={img1} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[27.365px]" />
        <img alt="Data points on top of landscape" className="absolute max-w-none object-50%-50% object-cover rounded-[27.365px] size-full" src={img2} />
      </div>
      <UiElementsMobile />
    </div>
  );
}

function IPhoneMobile() {
  return (
    <div className="absolute bg-black h-[541.824px] left-[calc(50%+0.5px)] rounded-[34.662px] top-[calc(50%+41px)] translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="iPhone">
      <div className="h-[541.824px] overflow-clip relative rounded-[inherit] w-[270px]">
        <InnerScreenMobile />
      </div>
      <div aria-hidden="true" className="absolute border border-[#929292] border-solid inset-0 pointer-events-none rounded-[34.662px] shadow-[0px_-2.342px_11.709px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeaderMobile() {
  return (
    <header className="relative size-full" data-name="Header">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[26px] items-center max-w-inherit pb-0 pt-[120px] px-[16px] relative size-full">
          <h1 className="block font-['Crimson_Text:Regular',sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-[min-content]">minimus.</h1>
          <button className="bg-[#485c11] box-border content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0 w-[182px]" data-name="Button linkout">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Join the Waitlist
            </p>
            <div className="flex flex-row items-center self-stretch">
              <ArrowMobile />
            </div>
          </button>
          <p className="font-['Crimson_Text:Regular',sans-serif] h-[53px] leading-[0.9] not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-[192px]"> </p>
          <div className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full" data-name="Hero image">
            <IPhoneMobile />
          </div>
        </div>
      </div>
    </header>
  );
}

function Header() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <HeaderMobile />;
  }
  if (width < 1280) {
    return <HeaderTablet />;
  }
  return <HeaderDesktop />;
}

export default Header;