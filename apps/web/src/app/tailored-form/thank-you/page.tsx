import Link from "next/link";
import { elipse } from "../../../../public/images";

export default function ThankYouPage() {
  return (
    <main className="h-screen px-5 flex flex-col items-center justify-center bg-black bg-auto bg-bottom bg-no-repeat" style={{
      backgroundImage: `url(${elipse.src})`,
    }}>
      <div className="flex flex-col items-center justify-center gap-5 w-full md:w-[70%] md:mx-auto lg:w-[764px]">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M6 32C6 17.6406 17.6406 6 32 6C46.3594 6 58 17.6406 58 32C58 46.3594 46.3594 58 32 58C17.6406 58 6 46.3594 6 32ZM41.6275 27.1625C42.2695 26.2637 42.0613 25.0146 41.1625 24.3725C40.2636 23.7305 39.0145 23.9387 38.3725 24.8375L29.7448 36.9164L25.4142 32.5858C24.6332 31.8047 23.3668 31.8047 22.5858 32.5858C21.8047 33.3668 21.8047 34.6332 22.5858 35.4142L28.5858 41.4142C29.0015 41.8299 29.5791 42.0417 30.165 41.9932C30.7509 41.9447 31.2858 41.6409 31.6275 41.1625L41.6275 27.1625Z" fill="#62F4BF" />
          </svg>
        </div>
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-semibold leading-8 lg:text-5xl lg:leading-14">Thank you for signing up!</h1>
          <div className=" flex flex-col gap-6">
            <p className="text-[#E4E7EC] tracking-[0.08px]">Your "Conversion-Boosting Framework" is on its way to your inbox, don’t forget to check your email.</p>
            <p className="text-[#E4E7EC] tracking-[0.08px]">Our team will also reach out via WhatsApp soon for a quick hello. 👋</p>
            <p className="text-[#E4E7EC] tracking-[0.08px]">In the meantime, grab a coffee and dive into the framework, it’s packed with strategies you can actually use. Plus, you’ll also unlock access to a private strategy session to tailor the framework to your business.</p>
          </div>
        </div>
        <Link href="https://www.getfound.id/" className="flex items-center gap-2.5 bg-[#E4CCFF] rounded-xl py-3 px-4 text-[#003166] font-semibold w-full justify-center">
          Back to Home
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z" fill="#003166" />
          </svg>
        </Link>
      </div>
    </main>
  );
}