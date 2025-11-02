'use client';

import { useState } from 'react';
import { PageWizardModal } from '@/components/modals/PageWizardModal';

export default function PageWizardPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // In a real app, you might want to redirect after closing
    // router.push('/dashboard'); // for example
  };

  const handleSelectPage = (pageType: string) => {
    console.log('Selected page type:', pageType);
    // Here you would typically navigate to the page creation form
    // or initialize the page creation process
    alert(`Creating page of type: ${pageType}`);
  };

  return (
    <>
      <PageWizardModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectPage={handleSelectPage}
      />
    </>
  );
}