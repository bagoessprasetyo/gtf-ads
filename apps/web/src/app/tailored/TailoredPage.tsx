"use client";
import { useEffect } from "react";
import Image from "next/image";
import Banner from "@/components/banner";
import Button from "@/components/button";
import Marquee from "react-fast-marquee";
import Form from "@/components/form";

import {
    partner1, partner2, partner3, partner4, partner5, partner6,
    partner7, partner8, partner9, partner10, partner11, partner12,
} from "../../../public/images/partners";

import {
    ashley, dore, ikigai, img1, img2, img3, img4, img5, img6,
} from "../../../public/images";

export default function TailoredPage() {
    useEffect(() => {
        // hubspot
        const script = document.createElement("script");
        script.src = "https://js-na2.hsforms.net/forms/embed/46392522.js";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const imgPartners = [
        partner1, partner2, partner3, partner4, partner5, partner6,
        partner7, partner8, partner9, partner10, partner11, partner12,
    ];

    const cards = [
        { img: ashley, title: "Ashley Hotel Group", content: "15x ROAS" },
        { img: dore, title: "DORE", content: "IDR 30B New B2B Pipeline Generated" },
        { img: ikigai, title: "IKIGAI", content: "700+ Members Monthly" },
    ];

    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <div>
            <Banner />

            {/* Partners */}
            <section className="py-10 bg-[#0A0A0A] lg:py-20 overflow-hidden lg:px-[120px]">
                <h3 className="text-center tracking-[0.08px] font-semibold mb-8 lg:text-[32px]">
                    Trusted by Global Partners
                </h3>
                <div className="block md:hidden">
                    <Marquee>
                        <div className="flex flex-wrap items-center gap-[39px]">
                            {imgPartners.map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    alt={`partner-${index}`}
                                    className="w-auto h-auto" />
                            ))}
                        </div>
                    </Marquee>
                </div>
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 w-full">
                    {imgPartners.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={`partner-${index}`}
                            className={`mx-auto ${index === 9 ? "w-20" : "h-auto w-full py-[27px] px-[66.943px]"}`}
                        />
                    ))}
                </div>
            </section>

            {/* Proven Impact */}
            <section className="py-14 bg-white px-5 lg:py-[60px] lg:px-20">
                <div className="bg-[#140018] rounded-[12px] py-4 px-6 lg:p-8">
                    <h4 className="text-2xl leading-8 font-semibold lg:text-5xl">
                        Proven Impact Across Industries
                    </h4>
                    <p className="text-[#E4E7EC] tracking-[0.08px] my-6">
                        See how we’ve turned growth challenges into measurable wins for our clients.
                        We’ve done it for them. Now it’s your turn. Your results could be the next headline we write.
                    </p>
                    <Button link="#tailored-form" title="Read More" className="lg:hidden" />
                    <Button link="#tailored-form" title="Reserve My Strategy Session" className="hidden lg:flex" />

                    <div className="flex flex-col gap-5 mt-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                        {cards.map(({ img, title, content }, index) => (
                            <div key={index}>
                                <Image
                                    src={img}
                                    alt={title}
                                    className="rounded-[2.757px] h-[165.405px] w-full lg:h-[240px] lg:rounded-sm"
                                />
                                <div className="flex items-center gap-1 mt-2">
                                    <span className="text-[#D5CCFF] text-sm leading-6 tracking-[0.175px] font-semibold">
                                        {title}
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M2.40039 7.9998C2.40039 7.66843 2.66902 7.3998 3.00039 7.3998H11.5107L8.18453 4.2323C7.94566 4.00263 7.93821 3.6228 8.16789 3.38394C8.39757 3.14508 8.77739 3.13763 9.01626 3.3673L13.4163 7.5673C13.5339 7.68043 13.6004 7.83659 13.6004 7.9998C13.6004 8.16301 13.5339 8.31918 13.4163 8.4323L9.01626 12.6323C8.77739 12.862 8.39757 12.8545 8.16789 12.6157C7.93822 12.3768 7.94566 11.997 8.18453 11.7673L11.5107 8.5998H3.00039C2.66902 8.5998 2.40039 8.33117 2.40039 7.9998Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span className="text-[12px] tracking-[0.048px] leading-5 font-medium">
                                        {content}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-10 bg-black px-5 flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-y-8 lg:gap-x-6 lg:py-20 lg:px-[120px]">
                {images.map((img, index) => (
                    <Image
                        key={index} src={img}
                        alt={`gallery-${index}`}
                        className="h-auto w-full object-contain" />
                ))}
            </section>

            {/* Deliver Result */}
            <section className="bg-[#F2F4F7] py-12 px-5 lg:py-20 lg:px-[120px]">
                <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:items-center lg:gap-20">
                    <div className="md:order-2">
                        <h4 className="text-[#141C25] text-2xl font-semibold leading-8 lg:text-5xl lg:leading-14">
                            We Deliver Measurable Results, not clicks.
                        </h4>
                        <p className="text-[#414E62] tracking-[0.08px] mt-3">
                            We’re a cross-functional growth team—strategists, engineers, creatives, and data scientists—
                            working as one system to build full-funnel strategies that convert. From first click to recurring revenue,
                            we blend marketing precision with technical depth to deliver measurable growth.
                        </p>
                        <Button link="#tailored-form" title="Reserve My Strategy Session" className="hidden lg:flex mt-6" />
                    </div>

                    <div className="relative">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full rounded-2xl"
                        >
                            <source src="/videos/motion-gtm.webm" type="video/webm" />
                        </video>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="bg-white py-14 px-5 lg:py-20 lg:px-60" id="tailored-form">
                <div className="border border-[#E4E7EC] rounded-[30px] p-6 lg:p-8 w-full">
                    <h4 className="text-2xl font-semibold leading-8 text-[#141C25] lg:text-4xl">
                        Book a <span className="text-[#4419FF]">Strategy Session</span> today
                    </h4>
                    {/* <Form /> */}

                    <div
                        className="hs-form-frame"
                        data-region="na2"
                        data-form-id="ed38e94c-6aae-4f54-a413-e89c11b7a263"
                        data-portal-id="46392522"
                    />
                </div>
            </section>
        </div>
    );
}
