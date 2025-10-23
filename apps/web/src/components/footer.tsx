import Image from "next/image";
import logoGetFound from "../../public/icons/logo-getfound.svg";

export default function footer() {
  return (
    <footer className="flex flex-col gap-3 px-5 py-6 md:flex-row md:justify-between md:items-center">
      <Image src={logoGetFound} alt="Logo Get Found" className="w-[120px]" />
      <p className="text-sm text-white font-light leading-6 tracking-[0.175px] lg:text-[rgba(255, 255, 255, 0.90)] lg:text-[16px] lg:tracking-[-0.176px]">Copyright © 2025 GetFound</p>
    </footer>
  )
}