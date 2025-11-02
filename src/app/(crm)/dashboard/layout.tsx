import { Frame } from "./_components/Frame";
import DashboardContentWrapper from "./_components/DashboardContentWrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout flex h-full flex-col p-4 overflow-x-hidden space-y-6">
      <Frame />
      <DashboardContentWrapper />
      {children}
    </div>
  );
}
