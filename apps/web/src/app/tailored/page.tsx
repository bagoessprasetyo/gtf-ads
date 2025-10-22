"use client";
import Banner from '@/components/banner';
import Marquee from 'react-fast-marquee';
import { partner1, partner10, partner11, partner12, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9 } from '../../../public/images/partners';
import Button from '@/components/button';
import { ashley, globalpws, ikigai, img1, img2, img3, img4, img5, img6, imgSection3 } from '../../../public/images';

export default function TailoredPage() {
    const imgPartners = [
        { img: partner1 },
        { img: partner2 },
        { img: partner3 },
        { img: partner4 },
        { img: partner5 },
        { img: partner6 },
        { img: partner7 },
        { img: partner8 },
        { img: partner9 },
        { img: partner10 },
        { img: partner11 },
        { img: partner12 },
    ]

    const cards = [
        { img: ashley, title: "Ashley Hotel Group", content: "15x ROAS" },
        { img: ikigai, title: "IKIGAI", content: "700+ Members Monthly" },
        { img: globalpws, title: "Global Paws", content: "3× Leads via Organic SEO" },
    ]

    const images = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
    ]

    return (
        <div>
            <Banner />

            {/* partners */}
            <div className='py-10 bg-[#0A0A0A] lg:py-20'>
                <h3 className='text-center tracking-[0.08px] font-semibold mb-8 lg:text-[32px]'>Trusted by Global Partners</h3>
                <div className='block md:hidden'>
                    {/* <Marquee>
                        <div className='flex flex-row items-center gap-[39px]'>
                            {imgPartners.map(({ img }, index) => (
                                <img key={index} src={img.src} alt={`partner-${index}`} />
                            ))}
                        </div>
                    </Marquee> */}
                </div>
                <div className='hidden md:grid md:grid-cols-4 justify-center items-center gap-6'>
                    {imgPartners.map(({ img }, index) => (
                        <img key={index} src={img.src} alt={`partner-${index}`} className='py-[27px] px-[66.943px]' />
                    ))}
                </div>
            </div>

            {/* proven impact */}
            <section className='py-14 bg-white px-5 lg:py-[60px]'>
                <div className='bg-[#140018] rounded-[12px] py-4 px-6 lg:p-8'>
                    <h4 className='text-2xl leading-8 font-semibold lg:text-5xl'>Proven Impact Across Industries</h4>
                    <p className='text-[#E4E7EC] tracking-[0.08px] my-6'>See how we’ve turned growth challenges into measurable wins for our clients.We’ve done it for them. Now it’s your turn. Your results could be the next headline we write.</p>
                    <Button link='#' title='Read More' className='lg:hidden' />
                    <Button link='#' title='Reserve My Strategy Session' className='hidden lg:flex' />
                    <div className='flex flex-col gap-5 mt-6 md:grid md:grid-cols-2 lg:grid-cols-3  lg:gap-4'>
                        {cards.map(({ img, title, content }, index) => (
                            <div key={index}>
                                <img src={img.src} alt={title} className='rounded-[2.757px] h-[165.405px] w-full lg:h-[240px] lg:rounded-sm' />
                                <div className='flex items-center gap-1 mt-2'>
                                    <span className='text-[#D5CCFF] text-sm leading-6 tracking-[0.175px] font-semibold'>{title}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40039 7.9998C2.40039 7.66843 2.66902 7.3998 3.00039 7.3998L11.5107 7.3998L8.18453 4.2323C7.94566 4.00263 7.93821 3.6228 8.16789 3.38394C8.39757 3.14508 8.77739 3.13763 9.01626 3.3673L13.4163 7.5673C13.5339 7.68043 13.6004 7.83659 13.6004 7.9998C13.6004 8.16301 13.5339 8.31918 13.4163 8.4323L9.01626 12.6323C8.77739 12.862 8.39757 12.8545 8.16789 12.6157C7.93822 12.3768 7.94566 11.997 8.18453 11.7673L11.5107 8.5998L3.00039 8.5998C2.66902 8.5998 2.40039 8.33117 2.40039 7.9998Z" fill="white" />
                                    </svg>
                                    <span className='text-[12px] tracking-[0.048px] leading-5 font-medium'>{content}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* image */}
            <section className='py-10 px-5 flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-y-8 lg:gap-x-6 lg:py-20'>
                {images.map(({ img }, index) => (
                    <img key={index} src={img.src} alt='image' />
                ))}
            </section>

            {/* deliver result */}
            <section className='bg-[#F2F4F7] py-12 px-5 lg:py-20'>
                <div className='flex flex-col gap-12 md:flex-row md:items-center lg:gap-20'>
                    <div className='lg:order-2'>
                        <h4 className='text-[#141C25] text-2xl font-semibold leading-8 lg:text-5xl lg:leading-14'>We Deliver Measurable Results, not clicks.</h4>
                        <p className='text-[#414E62] tracking-[0.08px] mt-3'>We’re a cross‑functional growth team—strategists, engineers, creatives, and data scientists—working as one system to build full‑funnel strategies that convert. From first click to recurring revenue, we blend marketing precision with technical depth to deliver measurable growth.</p>
                        <Button link='#' title='Reserve My Strategy Session' className='hidden lg:flex mt-6' />
                    </div>
                    <img src={imgSection3.src} alt='image' className='w-full h-[353.274px] lg:h-[582px]' />
                </div>
            </section>

            {/* contact */}
            <section className='bg-white py-14 px-5'>
                <div className='border border-[#E4E7EC] rounded- p-6'>
                    <h4 className='text-2xl font-semibold leading-8 text-[#141C25]'>Book a <span className='text-[#4419FF]'>Strategy Session</span> today</h4>
                </div>
            </section>
        </div>
    )
}
