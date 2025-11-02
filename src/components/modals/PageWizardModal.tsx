interface PageWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (pageType: string) => void;
}

export function PageWizardModal({
  isOpen,
  onClose,
  onSelectPage,
}: PageWizardModalProps) {

  const allPageTypes = [
    "Work order",
    "Customer visit",
    "Send invoice",
    "Phone call",
    "Email from contact",
    "Demo request",
    "Accept Invoice",
    "Email to contact",
    "Meeting",
    "Receive payment",
    "Shipment",
    "Make payment",
    "Send invoice",
    "Demo request"
  ];

  return (
    <>
      {/* Central Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-[684px] h-[817px] relative bg-white rounded-xl shadow-lg border border-gray-300">
            <div className="w-48 left-[242px] top-[202px] absolute inline-flex flex-col justify-center items-center">
              <div className="self-stretch flex flex-col justify-start items-center gap-2">
                <div className="w-5 h-5 relative">
                  <div className="w-4 h-4 left-0.5 top-0.5 absolute bg-gray-800 border border-gray-800 rounded-sm"></div>
                </div>
                <div className="self-stretch text-center justify-start text-gray-800 text-base font-medium">Page design</div>
              </div>
              <div className="self-stretch text-center justify-start text-gray-500 text-sm">Select type and design the page</div>
            </div>
            <div className="w-[652px] left-[24px] top-[294px] absolute inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Work order")}>
                  <div className="flex-1 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="self-stretch justify-start text-gray-800 text-sm">Work order</div>
                    </div>
                  </div>
                </div>
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Customer visit")}>
                  <div className="w-28 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="justify-start text-gray-800 text-sm">Customer visit</div>
                    </div>
                  </div>
                </div>
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Send invoice")}>
                  <div className="flex-1 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="self-stretch justify-start text-gray-800 text-sm">Send invoice</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Phone call")}>
                  <div className="flex-1 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="self-stretch justify-start text-gray-800 text-sm">Phone call</div>
                    </div>
                  </div>
                </div>
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Email from contact")}>
                  <div className="w-28 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="justify-start text-gray-800 text-sm">Email from contact</div>
                    </div>
                  </div>
                </div>
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Demo request")}>
                  <div className="w-28 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="justify-start text-gray-800 text-sm">Demo request</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Accept Invoice")}>
                  <div className="flex-1 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="self-stretch justify-start text-gray-800 text-sm">Accept Invoice</div>
                    </div>
                  </div>
                </div>
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Email to contact")}>
                  <div className="w-28 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="justify-start text-gray-800 text-sm">Email to contact</div>
                    </div>
                  </div>
                </div>
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Meeting")}>
                  <div className="w-28 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="justify-start text-gray-800 text-sm">Meeting</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Receive payment")}>
                  <div className="flex-1 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="self-stretch justify-start text-gray-800 text-sm">Receive payment</div>
                    </div>
                  </div>
                </div>
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Shipment")}>
                  <div className="w-28 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="justify-start text-gray-800 text-sm">Shipment</div>
                    </div>
                  </div>
                </div>
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Make payment")}>
                  <div className="w-28 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="justify-start text-gray-800 text-sm">Make payment</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Send invoice")}>
                  <div className="flex-1 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="self-stretch justify-start text-gray-800 text-sm">Send invoice</div>
                    </div>
                  </div>
                </div>
                <div className="w-52 px-3 py-1.5 bg-gray-50 rounded border border-gray-300 flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onSelectPage("Demo request")}>
                  <div className="w-28 flex justify-start items-center gap-2">
                    <div className="flex-1 inline-flex flex-col justify-center items-start">
                      <div className="justify-start text-gray-800 text-sm">Demo request</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5 h-5 left-[644px] top-[24px] absolute overflow-hidden cursor-pointer" onClick={onClose}>
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}