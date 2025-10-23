import bgBanner from "../../public/images/Background.webp";
import Button from "@/components/button";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { imageCarousel1, imageCarousel2, imageCarousel3, imageCarousel4, imageCarousel5, imageCarousel6, imageCarousel7, imageCarousel8 } from "../../public/images";

export default function banner() {
  const images = [
    { img: imageCarousel1 },
    { img: imageCarousel2 },
    { img: imageCarousel3 },
    { img: imageCarousel4 },
    { img: imageCarousel5 },
    { img: imageCarousel6 },
    { img: imageCarousel7 },
    { img: imageCarousel8 },
  ]

  return (
    <section className="bg-[#0E004D] py-8 text-white bg-cover bg-bottom flex flex-col gap-8" style={{ backgroundImage: `url(${bgBanner})` }}>
      <div className="text-center w-full lg:w-[920px] lg:mx-auto px-5">
        <h1 className="text-[28px] font-semibold leading-9 tracking-[0.07px] uppercase lg:text-5xl lg:leading-14">Your FULL-FUNNEL GROWTH MARKETING PARTNER</h1>
        <p className="tracking-[0.08px] leading-6 mt-3 mb-7">Empowering brands with performance-driven growth that delivers real, measurable ROI. </p>
        <Button link="#tailored-form" title="Yes, I Want the Session!" className="mx-auto" />
      </div>
      <div>
        <div className="flex items-center justify-center gap-2.5 mb-2.5 lg:mb-5 px-5">
          <div className="w-14 h-px bg-white hidden lg:block"></div>
          <p className="text-sm leading-6 tracking-[0.175px] text-center">
            Trusted by 300+ clients across SEA to scale smarter, and stronger
          </p>
          <div className="w-14 h-px bg-white hidden lg:block"></div>
        </div>
        <Marquee>
          <div className="flex flex-row gap-[7.681px] lg:gap-5">
            {images.map(({ img }, i) => (
              <Image
                key={i}
                src={img}
                alt={`carousel-${i}`}
                className="w-[153.615px] h-[153.615px] rounded-[1.536px] lg:w-[400px] lg:h-[400px] lg:rounded-sm"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}