import type { Metadata } from "next";
import TailoredPage from "./TailoredPage";

export const metadata: Metadata = {
    title: "Tailored - GetFound",
    description:
        "Discover how GetFound delivers tailored marketing strategies with proven impact across industries.",
};

export default function Page() {
    return (
        <>
            <TailoredPage />
        </>
    );
}
