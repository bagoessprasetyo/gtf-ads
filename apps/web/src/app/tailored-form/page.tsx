import type { Metadata } from "next";
import TailoredPage from "./TailoredPage";
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
    title: "Tailored - GetFound",
    description:
        "Discover how GetFound delivers tailored marketing strategies with proven impact across industries.",
};

export default function Page() {
    return (
        <>
            <GoogleTagManager gtmId="G-ZVRHXWGWVC" />
            <TailoredPage />
        </>
    );
}
