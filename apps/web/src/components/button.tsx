import Image from "next/image";
import iconRight from "../../public/icons/right-up.svg"

interface ButtonProps {
  title: string;
  link: string;
  className?: string;
}

export default function button({ title, link, className }: ButtonProps) {
  return (
    <a href={link} className={`${className} bg-[#D5CCFF] font-semibold rounded-lg py-3 px-6 text-[#130066] tracking-[0.08px] flex items-center gap-2 w-fit`}>
      {title}
      <Image src={iconRight} alt="icon-right" />
    </a>
  )
}