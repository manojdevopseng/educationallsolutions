"use client";

import { usePathname } from 'next/navigation';
import TopBar from '@/components/TopBar';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomBar from '@/components/BottomBar';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDashboardRoute = pathname === '/dashboard';

  return (
    <>
      {!isDashboardRoute && (
        <div className='top-0 z-50 w-full flex items-center justify-center'>
          <TopBar />
        </div>
      )}
      {!isDashboardRoute && (
        <div className="sticky top-0 z-50 w-full flex items-center justify-center">
          <Navbar />
        </div>
      )}
      {children}
      {!isDashboardRoute && <Footer />}
      {!isDashboardRoute && <BottomBar />}
    </>
  );
};

export default ClientLayout;
