import { useState, useRef, useEffect } from 'react';
import svgPaths from "./svg-v8fst5y303";
import imgInnerScreen from "figma:asset/59d8f7e934db11a36b1ce1b6acedbc508350e6b5.png";
import imgInnerScreen1 from "figma:asset/f3095f5b681dcaeb3b8df5718fa8fbacde19cdde.png";
import imgHeroImage from "figma:asset/6cc9837f67f565960a9090a6a7743733c2b6479c.png";
import imgImage from "figma:asset/2242711475cf01ba32ef27340142848497975805.png";
import imgImage1 from "figma:asset/a0044f89696c79abe3685b659409e40307839942.png";
import imgGroup22 from "figma:asset/1cc6392ab3472df9fc591be68555352e29c6a7c2.png";

function Arrow() {
  return <div className="content-stretch flex gap-[10px] h-full items-center shrink-0 w-[7px]" data-name="Arrow" />;
}

function ButtonLinkout() {
  return (
    <button className="bg-[#485c11] box-border content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0 w-[182px]" data-name="Button linkout">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Join the Waitlist
      </p>
      <div className="flex flex-row items-center self-stretch">
        <Arrow />
      </div>
    </button>
  );
}

function UiElements() {
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

function InnerScreen() {
  return (
    <div className="absolute h-[521.757px] left-[10.95px] overflow-clip right-[10.95px] rounded-[27.365px] top-[10.03px]" data-name="Inner screen">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27.365px]">
        <img alt="Data points on top of landscape" className="absolute max-w-none object-50%-50% object-cover rounded-[27.365px] size-full" src={imgInnerScreen} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[27.365px]" />
        <img alt="Data points on top of landscape" className="absolute max-w-none object-50%-50% object-cover rounded-[27.365px] size-full" src={imgInnerScreen1} />
      </div>
      <UiElements />
    </div>
  );
}

function IPhone() {
  return (
    <div className="absolute bg-black h-[541.824px] left-[calc(50%+0.5px)] rounded-[34.662px] top-[calc(50%+41px)] translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="iPhone">
      <div className="h-[541.824px] overflow-clip relative rounded-[inherit] w-[270px]">
        <InnerScreen />
      </div>
      <div aria-hidden="true" className="absolute border border-[#929292] border-solid inset-0 pointer-events-none rounded-[34.662px] shadow-[0px_-2.342px_11.709px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full" data-name="Hero image">
      <IPhone />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute box-border content-stretch flex flex-col gap-[26px] h-[693px] items-center left-0 max-w-[1600px] overflow-clip pb-0 pt-[120px] px-[16px] top-0 w-[375px]" data-name="Header">
      <h1 className="block font-['Crimson_Text:Regular',sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-[min-content]">minimus.</h1>
      <ButtonLinkout />
      <p className="font-['Crimson_Text:Regular',sans-serif] h-[53px] leading-[0.9] not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-[192px]"> </p>
      <HeroImage />
    </header>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start pl-0 pr-[20px] py-0 relative w-full">
          <h2 className="block font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#485c11] text-[12px] tracking-[-0.12px] w-full">What we give you</h2>
          <p className="font-['Crimson_Text:Regular',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black tracking-[-1.8px] w-full">{`great products deserve great placement. `}</p>
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            minimus connects early-stage CPG sellers with local small businesses to sell their products in-store.
          </p>
        </div>
      </div>
    </div>
  );
}

function CableIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Cable icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Cable icon">
          <path d={svgPaths.p37c59480} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 1">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">{`Stop wasting time hunting for the right stores. `}</p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">{`small businesses carefully curate products to fit their brand, whether that’s condiments to go with their baked bread or authentic Italian oils that complement their dinner service. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>minimus finds stores with the niche that matches your product, increasing your chances of getting on their shelves.</p>
      </div>
    </div>
  );
}

function IconLockup() {
  return (
    <section aria-label="Area product benefit 1 of 4" className="min-w-[265px] relative shrink-0 w-full" data-name="Icon lockup 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start min-w-inherit pl-0 pr-[20px] py-[40px] relative w-full">
          <CableIcon />
          <Text1 />
        </div>
      </div>
    </section>
  );
}

function AccountIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Account icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Account icon">
          <path d={svgPaths.p1d817280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 2">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Get data driven insights.</p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">{`We will provide cpg sellers with a match score for the stores that are highly likely to sell their products. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Scores are based on brand and product similarity, store niche, demographics, and other data minimus has collected about the store. `}</p>
      </div>
    </div>
  );
}

function IconLockup1() {
  return (
    <section aria-label="Area product benefit 2 of 4" className="min-w-[265px] relative shrink-0 w-full" data-name="Icon lockup 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start min-w-inherit pl-0 pr-[20px] py-[40px] relative w-full">
          <AccountIcon />
          <Text2 />
        </div>
      </div>
    </section>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 3">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Build your first retail footprint.</p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">Stores in our network have personally told us they prefer working with other small businesses and hosting local products.</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Get in stores that build confidence in your retail potential so you can scale effectively. `}</p>
      </div>
    </div>
  );
}

function IconLockup2() {
  return (
    <section aria-label="Area product benefit 3 of 4" className="min-w-[265px] relative shrink-0 w-full" data-name="Icon lockup 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start min-w-inherit pl-0 pr-[40px] py-[40px] relative w-full">
          <div className="relative shrink-0 size-[20px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p2eae1500} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
          <Text3 />
        </div>
      </div>
    </section>
  );
}

function ChartIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chart icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chart icon">
          <path d={svgPaths.p3f011b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 4">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Find your product market fit</p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">{`Don’t forget to focus on customers. By using minimus, you’ll be able to understand which customers your products appeal to the most. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`You’ll gain an understanding of who to target with your marketing efforts and campaigns. `}</p>
      </div>
    </div>
  );
}

function IconLockup3() {
  return (
    <section aria-label="Area product benefit 4 of 4" className="min-w-[265px] relative shrink-0 w-full" data-name="Icon lockup 4">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start min-w-inherit pl-0 pr-[40px] py-[40px] relative w-full">
          <ChartIcon />
          <Text4 />
        </div>
      </div>
    </section>
  );
}

function IconsModule() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-0 pt-[40px] px-0 relative shrink-0 w-full" data-name="Icons module">
      <IconLockup />
      <IconLockup1 />
      <IconLockup2 />
      <IconLockup3 />
    </div>
  );
}

function HeadlineAndIcons() {
  return (
    <section className="box-border content-stretch flex flex-col gap-[50px] items-start pb-[60px] pt-[80px] px-0 relative shrink-0 w-full" data-name="Headline and icons">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text />
      <IconsModule />
    </section>
  );
}

function HeroImage1() {
  return (
    <div className="h-[600px] relative rounded-[30px] shrink-0 w-full" data-name="Hero Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
        <img alt="A image that shows a mountain range" className="absolute h-[119.77%] left-[0.63%] max-w-none top-[-2.34%] w-full" src={imgHeroImage} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="h-[600px] w-full" />
      </div>
    </div>
  );
}

function BenefitsSection() {
  return (
    <div className="max-w-[1600px] relative shrink-0 w-full" data-name="Benefits section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start max-w-inherit pb-[100px] pt-0 px-[16px] relative w-full">
          <HeadlineAndIcons />
          <HeroImage1 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="aspect-[161.5/161.5] relative rounded-[30px] shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
        <img alt="A image of a concrete sphere, balanced between two other larger spheres" className="absolute h-[124.26%] left-[-9.26%] max-w-none top-[-9.26%] w-[109.26%]" src={imgImage} />
      </div>
      <div className="size-full">
        <div className="aspect-[161.5/161.5] size-full" />
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex font-normal gap-[8px] items-center leading-[1.4] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Name">
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[15px] text-black tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sarah Jensen
      </p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] relative shrink-0 text-[#485c11] text-[12px] tracking-[-0.12px]">CPG Seller Based in NYC</p>
    </div>
  );
}

function Quote() {
  return (
    <section aria-label="Quote from a user about the product Area" className="relative shrink-0 w-full" data-name="Quote">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start justify-center pb-0 pt-[40px] px-[16px] relative w-full">
          <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[40px] text-black tracking-[-1.6px] w-full">“I recently got to try minimus and it’s been amazing! I’ve branched out into stores I didn’t even know existed and I’m learning more about my customers every day.”</p>
          <Name />
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Testimonial section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start pb-[100px] pt-0 px-[16px] relative w-full">
          <Image />
          <Quote />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black text-center text-nowrap tracking-[-1.8px] whitespace-pre">match to success.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Get Started</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Join our wait list to be notified when minimus is available for use. `}</p>
    </div>
  );
}

function Lockup() {
  return (
    <section aria-label="Step 1 of 3" className="basis-0 grow min-h-px min-w-[240px] relative shrink-0" data-name="Lockup 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start min-w-inherit pb-[20px] pl-0 pr-[30px] pt-[60px] relative w-full">
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#929292] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            01
          </p>
          <Frame1 />
        </div>
      </div>
    </section>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Match and Pay</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`minimus is priced on a per-match model, allowing our sellers to pay only as much as they need. `}</p>
    </div>
  );
}

function Lockup1() {
  return (
    <section aria-label="Step 2 of 3" className="basis-0 grow min-h-px min-w-[240px] relative shrink-0" data-name="Lockup 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start min-w-inherit pb-[20px] pl-0 pr-[30px] pt-[60px] relative w-full">
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#929292] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            02
          </p>
          <Frame2 />
        </div>
      </div>
    </section>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Grow Your Business</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Make informed decisions to exceed your product sales and marketing goals. `}</p>
    </div>
  );
}

function Lockup2() {
  return (
    <section aria-label="Step 3 of 3" className="basis-0 grow min-h-px min-w-[240px] relative shrink-0" data-name="Lockup 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start min-w-inherit pb-[20px] pl-0 pr-[30px] pt-[60px] relative w-full">
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#929292] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            03
          </p>
          <Frame3 />
        </div>
      </div>
    </section>
  );
}

function Component3Up() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="3-up">
      <Lockup />
      <Lockup1 />
      <Lockup2 />
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="max-w-[1600px] relative shrink-0 w-full" data-name="How it works section">
      <div className="max-w-inherit overflow-x-auto overflow-y-clip size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-start max-w-inherit pb-[100px] pt-[80px] px-[16px] relative w-full">
          <Frame4 />
          <Component3Up />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </section>
  );
}

function Image1() {
  return (
    <div className="basis-0 grow h-[564px] min-h-px min-w-px relative rounded-[30px] shrink-0" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
        <img alt="An eye-catching landscape of green." className="absolute h-full left-[-2.15%] max-w-none top-[-2.83%] w-[104.3%]" src={imgImage1} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="h-[564px] w-full" />
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="basis-0 grow h-[600px] min-h-px min-w-px relative shrink-0" data-name="Image container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[600px] items-center px-[16px] py-0 relative w-full">
          <Image1 />
        </div>
      </div>
    </div>
  );
}

function HeroImage2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[640px] items-center pb-[40px] pt-0 px-0 relative shrink-0 w-full" data-name="Hero image">
      <ImageContainer />
    </div>
  );
}

function ButtonLinkout1() {
  return (
    <div className="bg-[#929292] relative rounded-[10px] shrink-0 w-full" data-name="Button linkout">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Bold',sans-serif] font-bold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Enter your email
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonLinkout2() {
  return (
    <div className="bg-[#485c11] box-border content-stretch flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0 w-[105px]" data-name="Button linkout">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Confirm
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
      <ButtonLinkout1 />
      <ButtonLinkout2 />
    </div>
  );
}

function CenteredCta() {
  return (
    <section className="max-w-[1600px] relative shrink-0 w-full" data-name="Centered CTA">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center max-w-inherit px-[16px] py-[120px] relative w-full">
          <p className="font-['Crimson_Text:Regular',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px] w-full">Join the wait list.</p>
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-center tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Be the first to hear when minimus is ready to be used by sellers like you. `}</p>
          <Frame />
        </div>
      </div>
    </section>
  );
}

function Main() {
  return (
    <main className="absolute box-border content-stretch flex flex-col items-start left-0 p-0 top-[693px] w-[375px]" data-name="Main" tabIndex="-1">
      <BenefitsSection />
      <TestimonialSection />
      <HowItWorksSection />
      <HeroImage2 />
      <CenteredCta />
    </main>
  );
}

function NavItems() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold gap-[27px] items-start justify-center relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px]" data-name="Nav Items">
      <button className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">Benefits</p>
      </button>
      <p className="leading-[1.4] relative shrink-0 whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Specifications
      </p>
      <button className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">How-to</p>
      </button>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-start relative shrink-0 w-full" data-name="Links">
      <NavItems />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[70px] relative shrink-0 w-[31.751px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 70">
        <g id="Logo">
          <path d={svgPaths.p385a6880} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 content-stretch flex font-['Roboto_Mono:Regular',sans-serif] font-normal gap-[16px] grow items-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#485c11] text-[12px] text-nowrap tracking-[-0.12px]" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre">© Area.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre">2025</p>
      </div>
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0 w-full" data-name="Credits">
      <Logo />
      <Text5 />
      <div className="flex flex-col font-['Roboto_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#485c11] text-[12px] text-nowrap tracking-[-0.12px]">
        <p className="leading-[1.4] whitespace-pre">All Rights Reserved</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="absolute box-border content-stretch flex flex-col gap-[80px] items-start justify-end left-0 max-w-[1600px] pb-[20px] pt-[40px] px-[16px] top-[5884px] w-[375px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Links />
      <Credits />
    </footer>
  );
}

function MenuIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Menu icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Menu icon">
          <path d={svgPaths.p15189980} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavTop() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Nav top">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between pb-[50px] pt-[20px] px-[20px] relative w-full">
          <div className="h-[38px] relative shrink-0 w-[39px]" data-name="Group 2 2">
            <img alt="minimus" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup22} />
          </div>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[30px] relative shrink-0 w-full" data-name="List Item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Benefits
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[30px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Specifications
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[30px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        How-to
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[30px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contact Us
      </p>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu Items">
      <ListItem />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0 w-[7px]" data-name="Arrow">
      <div className="h-[6.011px] relative shrink-0 w-[6px]" data-name="↗">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 7">
          <path d={svgPaths.p2c9abe00} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function ButtonLinkout3() {
  return (
    <a className="bg-[#485c11] box-border content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button linkout" href="https://www.figma.com/sites">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Learn More
      </p>
      <div className="flex flex-row items-center self-stretch">
        <Arrow1 />
      </div>
    </a>
  );
}

function DropdownContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Dropdown content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start justify-center pb-[32px] pt-[8px] px-[20px] relative w-full">
          <MenuItems />
          <ButtonLinkout3 />
        </div>
      </div>
    </div>
  );
}

function NavigationMobile() {
  return (
    <nav className="absolute bg-white box-border content-stretch flex flex-col h-[78px] items-start left-0 overflow-clip p-0 right-0 rounded-bl-[20px] rounded-br-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] top-0" data-name="Navigation mobile">
      <NavTop />
      <DropdownContent />
    </nav>
  );
}

function NavItems1() {
  return (
    <div className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.4)] box-border content-stretch flex font-['DM_Sans:Bold',sans-serif] font-bold gap-[27px] items-center leading-[1.4] left-[calc(100%+265px)] overflow-clip px-[24px] py-[20px] rounded-[100px] text-[14px] text-black text-center text-nowrap top-[16px] tracking-[-0.35px] translate-x-[-50%] whitespace-pre" data-name="Nav Items">
      <p aria-label="Jump to product benefits section" className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Benefits
      </p>
      <p aria-label="Jump to product specifications section" className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Specifications
      </p>
      <p aria-label="Jump to product how-to section" className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        How-to
      </p>
      <p aria-label="Jump to contact us section" className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sign up
      </p>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile">
      <NavItems1 />
      <Header />
      <Main />
      <Footer />
      <NavigationMobile />
    </div>
  );
}