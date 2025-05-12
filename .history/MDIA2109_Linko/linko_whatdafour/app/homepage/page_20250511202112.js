'use client';
import { Container } from 'app/.components/container/container.js';

export default function page() {
  return (
    <div style={{ padding: '24px', display: 'grid', gap: '24px' }}>
      {/* 黑底＋小尺寸＋邊框＋Regular 字體 */}
      <Container
        text="“The weeknd is going to Van, who wants come?”"
        color="black"
        size="small"
        border={true}
        textStyle="Regular"
      />

    </div>
  );
}
