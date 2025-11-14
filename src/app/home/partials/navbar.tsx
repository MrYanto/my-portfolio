'use client';

import React from 'react';
import { navigationData } from '../../constants/navigation-data';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <nav className='fixed top-0 right-0 left-0 z-50 m-4 flex w-[calc(100%-32px)] items-center justify-between rounded-full bg-[#00000066] px-6 backdrop-blur-2xl md:mx-auto md:w-fit lg:mt-8 lg:px-8'>
      <ul className='flex items-center gap-4'>
        {/* MOBILE: HOME LINK */}
        <li className='p-2 md:hidden'>
          <Link href='/' className='text-xl font-bold'>
            Edwin
          </Link>
        </li>

        {/* DESKTOP: ALL LINKS */}
        {navigationData.map((item) => (
          <li key={item.label} className='hidden p-2 md:block'>
            <Link
              href={item.href}
              className={
                item.active ? 'text-xl font-bold' : 'font-regular md:text-md'
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className='relative z-50'>
        <Sheet>
          <SheetTrigger asChild>
            <Menu aria-label='open menu' className='md:hidden' size={24} />
          </SheetTrigger>

          <SheetContent side='top'>
            <ul className='flex flex-col items-start gap-4'>
              {navigationData.map((item) => (
                <li key={item.label} className='w-full'>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className={`transition-colors hover:bg-white/5 ${
                        item.active
                          ? 'text-xl font-bold'
                          : 'font-regular text-md'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
