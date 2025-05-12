'use client';
import { Container } from './Container';

export default function ContainerDemo() {
  return (
    <div style={{ padding: '24px', display: 'grid', gap: '24px' }}>
      {/* 黑底＋小尺寸＋邊框＋Regular 字體 */}
      <Container
        text="黑色小框，Regular 字體"
        color="black"
        size="small"
        border={true}
        textStyle="Regular"
      />

      {/* 深紫底＋中尺寸＋Bold 字體 */}
      <Container
        text="深紫中框，Bold 字體"
        color="darkPurple"
        size="medium"
        border={false}
        textStyle="Bold"
      />

      {/* 黑底＋大尺寸＋含邊框＋Bold_CommunityRules 字體 */}
      <Container
        text="這是一個大框，適合展示多一點內容\n也可以用來放圖片或按鈕"
        color="black"
        size="large"
        border={true}
        textStyle="Bold_CommunityRules"
      />

      {/* 測試 Channel 用的尺寸與樣式 */}
      <Container
        text="頻道用框"
        color="darkPurple"
        size="channelSize"
        border={false}
        textStyle="ExtraBold_Channel"
      />
    </div>
  );
}
