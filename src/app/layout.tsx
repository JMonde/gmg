'use client';

import React from 'react';

// Root layout with client directive to ensure all rendering happens client-side
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}