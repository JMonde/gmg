'use client';

import { redirect } from 'next/navigation';

// This page redirects to the page wizard in the CRM section
export default function PageWizardDemo() {
  redirect('/page-wizard');
  
  // Fallback in case redirect doesn't work (should not be reached)
  return <div>Redirecting...</div>;
}