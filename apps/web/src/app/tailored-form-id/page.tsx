import React from 'react'
import TailoredIdPage from './TailoredIdPage'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tailored - GetFound",
  description:
    "Discover how GetFound delivers tailored marketing strategies with proven impact across industries.",
};

const page = () => {
  return (
    <TailoredIdPage />
  )
}

export default page