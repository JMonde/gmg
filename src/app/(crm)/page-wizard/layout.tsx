import { ReactQueryProvider } from "@/components/providers";

export default function PageWizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  );
}