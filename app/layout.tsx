import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';
import SessionProvider from "@/utils/SessionProvider";
import './globals.css';
import { getServerSession } from "next-auth";
import ClientLayout from '@/components/ClientLayout';

const epilogue = Epilogue({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Education All Solutions',
  description: 'Education All Solutions',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en" className='dark'>
      <body className={`${epilogue.className} ${process.env.NODE_ENV == 'development' ? 'debug-screens' : ''}`}>
        <SessionProvider session={session}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
