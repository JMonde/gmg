import MenuWizardContentWrapper from "./_components/MenuWizardContentWrapper";

export default function MenuWizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="menu-wizard-layout flex h-full flex-col p-4 overflow-x-hidden space-y-6">
      <MenuWizardContentWrapper>
        {children}
      </MenuWizardContentWrapper>
    </div>
  );
}