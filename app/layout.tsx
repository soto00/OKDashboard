import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OKDashboard',
  description: 'OKDashboard - Firebase App Hosting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
