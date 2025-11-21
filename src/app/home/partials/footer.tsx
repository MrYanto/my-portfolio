import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../../../components/ui/button';
import { Mail } from 'lucide-react';
import { aboutContacts } from '../../../constants/about/about-contacts';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className='custom-container relative overflow-hidden grid gap-10 lg:grid-cols-2'
      id='contact'
    >
      <div className='absolute -z-10 h-full w-screen  pb-[47px]'>
        <Image
          src='/images/Background.png'
          alt='background'
          fill
          className='object-cover'
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            Let's <span className='text-primary-300'>Build Something</span>{' '}
            Great
          </CardTitle>
          <CardDescription>
            Got an idea, a project, or just want to connect? I'm always open to
            new conversations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='flex flex-col gap-5'>
              <div className='gap-sm grid'>
                <label htmlFor='name'>Name</label>
                <input
                  id='name'
                  type='text'
                  placeholder='Enter your name'
                  required
                  className='px-xl border border-neutral-900 py-2'
                />
              </div>
              <div className='gap-sm grid'>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                  required
                  className='px-xl border border-neutral-900 py-2'
                />
              </div>
              <div className='gap-sm grid'>
                <label htmlFor='msg'>Message</label>
                <textarea
                  id='msg'
                  placeholder='Enter your message'
                  required
                  className='px-xl h-[134px] resize-none border border-neutral-900 py-2'
                />
              </div>
              <Button leftAddon={<Mail />}>Send Message</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className='flex h-full flex-col justify-between gap-6'>
        <div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
              <h3 className='text-md-bold lg:text-xl-semibold text-neutral-25'>
                Address
              </h3>
              <p>Jakarta, Indonesia</p>
            </div>

            <div className='block border-b border-neutral-900' />

            <div className='flex flex-col gap-3'>
              <h3 className='text-md-bold lg:text-xl-semibold text-neutral-25'>
                Contact
              </h3>
              <p>(+62) 1234567890</p>
            </div>

            <div className='block border-b border-neutral-900' />

            <div className='flex flex-col gap-3'>
              <h3 className='text-md-bold lg:text-xl-semibold text-neutral-25'>
                Social Media
              </h3>
              <div className='flex gap-3'>
                {aboutContacts.map((contact) => (
                  <div key={contact.platform}>
                    <Link href={contact.url}>
                      <Image src={contact.icon} alt={contact.alt} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <h2 className='text-display-xl lg:text-display-3xl font-bold'>
          GET IN TOUCH
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
