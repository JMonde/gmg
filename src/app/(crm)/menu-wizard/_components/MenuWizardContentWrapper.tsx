export default function MenuWizardContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col overflow-x-hidden space-y-6">
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}