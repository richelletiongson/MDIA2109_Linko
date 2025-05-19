import React from 'react';
import Image from 'next/image';

// Usage: <ProgressBar stage={1} />
export default function ProgressBar({ stage = 1, className = '' }) {
  // Clamp stage to 1-3
  const clampedStage = Math.max(1, Math.min(3, stage));
  const src = `/photos/progress_bar${clampedStage}.png`;
  return (
    <div className={className} style={{ display: 'flex', justifyContent: 'center' }}>
      <Image
        src={src}
        alt={`Progress bar stage ${clampedStage}`}
        width={3000}
        height={50}
        style={{ width: 'auto', height: '50px', maxWidth: '100%' }}
      />
    </div>
  );
}
