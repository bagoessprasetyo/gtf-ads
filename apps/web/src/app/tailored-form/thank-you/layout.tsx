export const metadata = {
  title: "Thank You - GetFound",
  description: "Your submission has been received successfully.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
