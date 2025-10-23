"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import iconRight from "../../public/icons/right-up.svg"

export default function ContactForm() {
  const [budget, setBudget] = useState<string>("")

  return (
    <form className="text-[#1A232D] font-archivo space-y-10">
      {/* Full Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 lg:gap-10">
        <FormField label="Full Name" name="fullName" required>
          <Input
            type="text"
            id="fullName"
            className="border-0 border-b border-[#97A1AF] rounded-none p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </FormField>

        <FormField label="Email Address" name="email" required>
          <Input
            type="email"
            id="email"
            className="border-0 border-b border-[#97A1AF] rounded-none p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </FormField>
      </div>

      {/* Phone Number & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 lg:gap-10">
        <FormField label="Phone Number" name="phoneNumber" required>
          <Input
            type="tel"
            id="phoneNumber"
            className="border-0 border-b border-[#97A1AF] rounded-none p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </FormField>

        <FormField label="Company" name="company" required>
          <Input
            type="text"
            id="company"
            className="border-0 border-b border-[#97A1AF] rounded-none p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </FormField>
      </div>

      {/* Website & Project Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 lg:gap-10">
        <FormField label="Website" name="website">
          <Input
            type="text"
            id="website"
            className="border-0 border-b border-[#97A1AF] rounded-none p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </FormField>

        <FormField label="Project Budget" name="budget" required>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger className="w-full border-0 border-b border-[#97A1AF] rounded-none p-2 focus-visible:ring-0 focus-visible:ring-offset-0">
              <SelectValue placeholder="Select Budget" />
            </SelectTrigger>
            <SelectContent className="bg-white font-medium text-[#1A232D]">
              <SelectItem value="< 10 Mill IDR">&lt; 10 Mill IDR</SelectItem>
              <SelectItem value="10 - 20 Mill IDR">10 - 20 Mill IDR</SelectItem>
              <SelectItem value="21 - 50 Mill IDR">21 - 50 Mill IDR</SelectItem>
              <SelectItem value="51 - 100 Mill IDR">51 - 100 Mill IDR</SelectItem>
              <SelectItem value="> 100 Mill IDR">&gt; 100 Mill IDR</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
      </div>

      {/* Message */}
      <FormField label="Comments or Message" name="message" required>
        <textarea
          id="message"
          className="border-0 border-b border-[#97A1AF] rounded-none p-2 outline-none"
          rows={4}
        />
      </FormField>

      <button className="bg-[#D5CCFF] text-center font-semibold rounded-lg py-3 px-6 text-[#130066] tracking-[0.08px] flex items-center justify-center gap-2 w-full cursor-pointer">
        Submit
        <Image src={iconRight} alt="icon-right" />
      </button >
    </form>
  )
}

interface FormFieldProps {
  label: string
  name: string
  children: React.ReactNode
  required?: boolean
}

function FormField({ label, name, children, required }: FormFieldProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="font-medium tracking-[0.08px] mb-[5px]"
      >
        {label}
        {required && <span className="text-[#B09EFF] ml-[5px]">*</span>}
      </label>
      {children}
    </div>
  )
}
