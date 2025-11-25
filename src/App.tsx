import { useState, useRef, useEffect } from 'react';
import svgPaths from "./imports/svg-x9g7uldqq6";
import svgPathsHero from "./imports/svg-0kpk6jl2yx";
import imgGroup22 from "figma:asset/1cc6392ab3472df9fc591be68555352e29c6a7c2.png";
import imgHeroImage from "./assets/02.png";
import imgImage from "figma:asset/2242711475cf01ba32ef27340142848497975805.png";
import imgImage1 from "figma:asset/2fd8af6969e2ec502b509d553334e6f01173cc27.png";
import imgHeroData from "figma:asset/1ea9e073d7a80600447cc501bde41e284733550c.png";
import { supabase } from "./lib/supabase";
import './styles/globals.css'

// Hook for scroll reveal animations
function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

// Hero Section Components
function InnerScreen() {
  return (
    <div className="absolute h-[607.439px] left-1/2 rounded-[16px] top-[18.5px] translate-x-[-50%] w-[869.742px]" data-name="Inner screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="Data points on top of landscape" className="absolute h-[105.27%] left-0 max-w-none top-[0.65%] w-full" src={imgHeroData} />
      </div>
    </div>
  );
}

function Ipad() {
  return (
    <div aria-label="Visual chart illustrating retail store matches" className="absolute bg-black h-[644px] left-[calc(50%+0.5px)] rounded-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[907px]" data-name="Ipad">
      <div className="h-[644px] overflow-clip relative rounded-[inherit] w-[907px]">
        <InnerScreen />
      </div>
      <div aria-hidden="true" className="absolute border-[2px_2px_0px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeroHeader({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  const { ref: revealRef, isVisible } = useScrollReveal();
  
  return (
    <header 
      // @ts-ignore
      ref={revealRef}
      className={`box-border content-stretch flex flex-col gap-[50px] items-center max-w-[1500px] pb-[120px] pt-[80px] px-0 relative shrink-0 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      data-name="Header"
    >
      <h1 className="block font-['Crimson_Text:Regular',sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-[min-content]">minimus.</h1>
      <button 
        onClick={onJoinWaitlist}
        className="bg-[#485c11] box-border content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0 w-[181px] hover:bg-[#5a7115] transition-colors" 
        data-name="Button linkout"
      >
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Join the Waitlist
        </p>
      </button>
      <h1 className="block font-['Crimson_Text:Regular',sans-serif] h-[100px] leading-[0.9] not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-full whitespace-pre-wrap"> </h1>
      <div className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full" data-name="Hero image">
        <Ipad />
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <div className="box-border content-stretch flex h-[148px] items-center justify-between max-w-[1500px] pb-[80px] pt-[20px] px-0 relative shrink-0 w-full" data-name="Navigation">
      <div className="h-[60px] relative shrink-0 w-[62px]" data-name="Group 2 2">
        <img alt="minimus" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup22} />
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <nav className="box-border content-stretch flex flex-col items-center p-0 relative shrink-0 w-[1200px]" data-name="Navigation">
      <Navigation />
    </nav>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start pl-0 pr-[400px] py-0 relative w-full">
          <h2 className="block font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#485c11] text-[12px] tracking-[-0.12px] w-[575.566px]">What we give you</h2>
          <p className="font-['Crimson_Text:Regular',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black tracking-[-1.8px] w-[916px]">{`great products deserve great placement. `}</p>
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
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
        <p className="mb-0">{`small businesses carefully curate products to fit their brand, whether that's condiments to go with their baked bread or authentic Italian oils that complement their dinner service. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>minimus finds stores with the niche that matches your product, increasing your chances of getting on their shelves.</p>
      </div>
    </div>
  );
}

function IconLockup() {
  return (
    <section aria-label="Area product benefit 1 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 1">
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
    <section aria-label="Area product benefit 2 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 2">
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
    <section aria-label="Area product benefit 3 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 3">
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
        <p className="mb-0">{`Don't forget to focus on customers. By using minimus, you'll be able to understand which customers your products appeal to the most. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`You'll gain an understanding of who to target with your marketing efforts and campaigns. `}</p>
      </div>
    </div>
  );
}

function IconLockup3() {
  return (
    <section aria-label="Area product benefit 4 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 4">
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
    <div className="box-border content-start flex flex-wrap gap-[20px] items-start pb-0 pt-[40px] px-0 relative shrink-0 w-full" data-name="Icons module">
      <IconLockup />
      <IconLockup1 />
      <IconLockup2 />
      <IconLockup3 />
    </div>
  );
}

function HeadlineAndIcons({ innerRef }: { innerRef?: React.RefObject<HTMLElement> }) {
  const { ref: revealRef, isVisible } = useScrollReveal();
  
  return (
    <section 
      ref={(node) => {
        // @ts-ignore
        revealRef.current = node;
        if (innerRef) {
          // @ts-ignore
          innerRef.current = node;
        }
      }}
      className={`box-border content-stretch flex flex-col gap-[50px] items-start pb-[60px] pt-[80px] px-0 relative shrink-0 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      data-name="Headline and icons"
    >
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text />
      <IconsModule />
    </section>
  );
}

function HeroImage() {
  const { ref: revealRef, isVisible } = useScrollReveal();
  
  return (
    <div 
      // @ts-ignore
      ref={revealRef}
      className={`h-[620px] relative rounded-[30px] shrink-0 w-full transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      data-name="Hero Image"
    >
      <img alt="A image that shows a mountain range" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgHeroImage} />
      <div className="flex flex-row items-center size-full">
        <div className="h-[620px] w-full" />
      </div>
    </div>
  );
}

function BenefitsSection({ innerRef }: { innerRef?: React.RefObject<HTMLDivElement> }) {
  return (
    <div ref={innerRef} className="box-border content-stretch flex flex-col items-start max-w-[1500px] pb-[120px] pt-0 px-0 relative shrink-0 w-full" data-name="Benefits section">
      <HeadlineAndIcons />
      <HeroImage />
    </div>
  );
}

function Image() {
  return (
    <div className="aspect-[540/633] basis-0 grow min-h-px min-w-px relative rounded-[30px] shrink-0" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
        <img alt="A image of a concrete sphere, balanced between two other larger spheres" className="absolute h-[124.26%] left-[-9.26%] max-w-none top-[-9.26%] w-[109.26%]" src={imgImage} />
      </div>
      <div className="size-full">
        <div className="aspect-[540/633] size-full" />
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[8px] items-start leading-[1.4] relative shrink-0 w-full" data-name="Name">
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[15px] text-black tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sarah Jensen
      </p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] relative shrink-0 text-[#485c11] text-[12px] tracking-[-0.12px] w-full">CPG Seller Based in NYC</p>
    </div>
  );
}

function Quote() {
  return (
    <section aria-label="Quote from a user about the product Area" className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Quote">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start justify-center pl-[50px] pr-0 py-0 relative size-full">
          <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[40px] text-black tracking-[-1.6px] w-full">"I recently got to try minimus and it's been amazing! I've branched out into stores I didn't even know existed and I'm learning more about my customers every day."</p>
          <Name />
        </div>
      </div>
    </section>
  );
}

function TestimonialSection({ innerRef }: { innerRef?: React.RefObject<HTMLDivElement> }) {
  const { ref: revealRef, isVisible } = useScrollReveal();
  
  return (
    <div 
      ref={(node) => {
        // @ts-ignore
        revealRef.current = node;
        if (innerRef) {
          // @ts-ignore
          innerRef.current = node;
        }
      }}
      className={`box-border content-stretch flex gap-[20px] h-[692px] items-start max-w-[1500px] pb-[120px] pt-0 px-0 relative shrink-0 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
      }`}
      data-name="Testimonial section"
    >
      <Image />
      <Quote />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
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
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`minimus is priced on a $3 per-match model, allowing our sellers to pay only as much as they need. `}</p>
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
    <div className="content-stretch flex gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="3-up">
      <Lockup />
      <Lockup1 />
      <Lockup2 />
    </div>
  );
}

function HowItWorksSection({ innerRef }: { innerRef?: React.RefObject<HTMLElement> }) {
  const { ref: revealRef, isVisible } = useScrollReveal();
  
  return (
    <section 
      ref={(node) => {
        // @ts-ignore
        revealRef.current = node;
        if (innerRef) {
          // @ts-ignore
          innerRef.current = node;
        }
      }}
      className={`box-border content-stretch flex flex-col gap-[80px] items-start max-w-[1500px] pb-[120px] pt-[80px] px-0 relative shrink-0 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      data-name="How it works section"
    >
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame4 />
      <Component3Up />
    </section>
  );
}

function Image1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="An eye-catching landscape of green." className="absolute h-[142.02%] left-0 max-w-none top-[-26.8%] w-full" src={imgImage1} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div aria-label="Image showing a winding path going up a mountain" className="aspect-[1120/620] content-stretch flex gap-[10px] items-start max-h-[830.357px] max-w-[1500px] overflow-clip relative rounded-[30px] shrink-0 w-full" data-name="Image container">
      <Image1 />
    </div>
  );
}

function HeroImage1() {
  const { ref: revealRef, isVisible } = useScrollReveal();
  
  return (
    <div 
      // @ts-ignore
      ref={revealRef}
      className={`box-border content-stretch flex flex-col gap-[10px] items-center pb-[40px] pt-0 px-0 relative shrink-0 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      data-name="Hero image"
    >
      <ImageContainer />
    </div>
  );
}

function TextBox({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="bg-[#d9d9d9] box-border content-stretch flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[10px] shrink-0 w-[320px]" data-name="text box">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your email"
        className="basis-0 font-['DM_Sans:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px bg-transparent border-none outline-none relative shrink-0 text-[14px] text-black placeholder:text-gray-600 placeholder:font-normal tracking-[-0.35px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      />
    </div>
  );
}

function ButtonLinkout({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-[#485c11] box-border content-stretch flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0 w-[111px] cursor-pointer hover:bg-[#5a7115] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      data-name="Button linkout"
    >
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Confirm
      </p>
    </button>
  );
}

function Frame({ email, setEmail, onSubmit }: { email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0">
      <TextBox value={email} onChange={setEmail} />
      <ButtonLinkout onClick={onSubmit} disabled={!email} />
    </div>
  );
}

function CenteredCta({ innerRef, email, setEmail, onSubmit }: { innerRef?: React.RefObject<HTMLElement>; email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  const { ref: revealRef, isVisible } = useScrollReveal();
  
  return (
    <section 
      ref={(node) => {
        // @ts-ignore
        revealRef.current = node;
        if (innerRef) {
          // @ts-ignore
          innerRef.current = node;
        }
      }}
      className={`max-w-[1500px] relative shrink-0 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      data-name="Centered CTA"
    >
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center max-w-inherit px-[300px] py-[120px] relative w-full">
          <p className="font-['Crimson_Text:Regular',sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px] w-[min-content]">Join the wait list.</p>
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#6f6f6f] text-[15px] text-center tracking-[-0.075px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>Be the first to hear when minimus is ready to be used by sellers like you.<br /><strong>minimus is priced at $3 per per-match.</strong></p>
          <Frame email={email} setEmail={setEmail} onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
}

function Main({ benefitsRef, specsRef, howToRef, signupRef, email, setEmail, onSubmit }: { 
  benefitsRef: React.RefObject<HTMLDivElement>; 
  specsRef: React.RefObject<HTMLDivElement>; 
  howToRef: React.RefObject<HTMLElement>; 
  signupRef: React.RefObject<HTMLElement>;
  email: string;
  setEmail: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <main className="box-border content-stretch flex flex-col items-start p-0 relative shrink-0 w-[1200px]" data-name="Main" tabIndex={-1}>
      <BenefitsSection innerRef={benefitsRef} />
      <TestimonialSection innerRef={specsRef} />
      <HowItWorksSection innerRef={howToRef} />
      <HeroImage1 />
      <CenteredCta innerRef={signupRef} email={email} setEmail={setEmail} onSubmit={onSubmit} />
    </main>
  );
}

function NavItems({ onClick }: { onClick: (section: string) => void }) {
  return (
    <div className="content-stretch flex font-['DM_Sans:Bold',sans-serif] font-bold gap-[27px] items-center relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px]" data-name="Nav Items">
      <button 
        onClick={() => onClick('benefits')}
        className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0 hover:text-[#485c11] transition-colors" 
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[1.4] text-nowrap whitespace-pre">Benefits</p>
      </button>
      <button 
        onClick={() => onClick('howto')}
        className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0 hover:text-[#485c11] transition-colors" 
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[1.4] text-nowrap whitespace-pre">How it Works</p>
      </button>
    </div>
  );
}

function Links({ onClick }: { onClick: (section: string) => void }) {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Links">
      <NavItems onClick={onClick} />
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
        <p className="leading-[1.4] text-nowrap whitespace-pre">© minimus.</p>
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

function Footer({ onClick }: { onClick: (section: string) => void }) {
  return (
    <footer className="box-border content-stretch flex flex-col gap-[80px] items-start justify-end max-w-[1500px] pb-[20px] pt-[40px] px-0 relative shrink-0 w-[1200px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Links onClick={onClick} />
      <Credits />
    </footer>
  );
}

function NavItems1({ onClick }: { onClick: (section: string) => void }) {
  return (
    <div className="fixed backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.4)] box-border content-stretch flex font-['DM_Sans:Bold',sans-serif] font-bold gap-[27px] items-center left-1/2 overflow-clip px-[24px] py-[20px] rounded-[100px] text-[14px] text-black text-center text-nowrap top-[16px] tracking-[-0.35px] translate-x-[-50%] z-50" data-name="Nav Items">
      <button 
        onClick={() => onClick('benefits')}
        aria-label="Jump to product benefits section" 
        className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0 hover:text-[#485c11] transition-colors" 
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[1.4] text-nowrap whitespace-pre">Benefits</p>
      </button>
      <button 
        onClick={() => onClick('howto')}
        aria-label="Jump to product how-to section" 
        className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0 hover:text-[#485c11] transition-colors" 
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[1.4] text-nowrap whitespace-pre">How it Works</p>
      </button>
      <button 
        onClick={() => onClick('signup')}
        aria-label="Jump to contact us section" 
        className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0 hover:text-[#485c11] transition-colors" 
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[1.4] text-nowrap whitespace-pre">Sign Up</p>
      </button>
    </div>
  );
}

export default function Desktop() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const benefitsRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const howToRef = useRef<HTMLElement>(null);
  const signupRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: string) => {
    let ref;
    switch (section) {
      case 'benefits':
        ref = benefitsRef;
        break;
      case 'specs':
        ref = specsRef;
        break;
      case 'howto':
        ref = howToRef;
        break;
      case 'signup':
        ref = signupRef;
        break;
    }
    
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async () => {
    if (!email) return;

    // Attempt to insert into Supabase
    const { error } = await supabase
      .from("interested_sellers")
      .insert([{ email }]);

    if (error) {
      console.error("Error inserting email:", error);
      alert("Something went wrong. Please try again!");
      return;
    }

    // Continue your existing UI behavior
    setSubmitted(true);
    alert(`Thank you for joining our waitlist! We'll contact you at ${email}`);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white relative size-full" data-name="Desktop">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[120px] py-0 relative size-full">
          <Navigation1 />
          <HeroHeader onJoinWaitlist={() => scrollToSection('signup')} />
          <Main 
            benefitsRef={benefitsRef}
            specsRef={specsRef}
            howToRef={howToRef}
            signupRef={signupRef}
            email={email}
            setEmail={setEmail}
            onSubmit={handleSubmit}
          />
          <Footer onClick={scrollToSection} />
          <NavItems1 onClick={scrollToSection} />
        </div>
      </div>
    </div>
  );
}