"use client";

import { Suspense } from "react";
import CabBookingContent from "./CabBookingContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CabBookingContent />
    </Suspense>
  );
}