"use client";

import { useState } from "react";

export function BrandLogo() {
  const [error, setError] = useState(false);

  return (
    <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
      {!error && (
        <img
          src="/images/logo.png"
          alt="Idle Breakout"
          className="h-full w-full object-cover"
          onError={() => setError(true)}
        />
      )}
      <span className="text-sm font-bold text-foreground">IB</span>
    </div>
  );
}
