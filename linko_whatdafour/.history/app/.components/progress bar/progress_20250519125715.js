import React from 'react';
import Image from 'next/image';

// Usage: <ProgressBar stage={1} />
export default function ProgressBar({ stage = 1, className = '' }) {
  // Clamp stage to 1-3
  const clampedStage = Math.max(1, Math.min(3, stage));
  const src = `/photos/progress_bar${clampedStage}.png`;
  return (
    <div className={className}>
      <Image src={src} alt={`Progress bar stage ${clampedStage}`} width={220} height={24} style={{ width: '220px', height: '24px' }} />
    </div>
  );
}
