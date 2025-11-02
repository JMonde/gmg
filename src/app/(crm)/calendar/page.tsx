'use client';

import { CalendarView } from "./_components/CalendarView";

export default function CalendarPage() {
  return (
    <div className="flex h-full flex-col p-4 overflow-x-hidden space-y-6 calendar-page">
      <CalendarView />
    </div>
  );
}
