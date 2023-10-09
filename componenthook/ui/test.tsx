'use client'
import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/20/solid';

const Test = () => {
  return (
   <Disclosure as='nav' className='bg-slate-500'>
    {({open})=>(
      <>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
        <div className='relative flex h-16 item-center justify-between'>
            {/*mobile   */}
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md text-blue-800 hover:bg-red-700 hover:text-yellow-900'>
            
                 {open?(
                  <XMarkIcon className='block w-6 h-6 '/>
                 ):(
                  <Bars3Icon className='block w-6 h-6 '/>
                 )}
            </Disclosure.Button>

          </div>
          {/*label  */}
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='bg-red-700 flex flex-shrink-0 items-center'>label</div>
            <div className='bg-green-700  hidden sm:block sm:ml-6'>navigation items </div>

           


          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 bg-blue-500">
            meue and notification
          </div>

        </div>

      </div>

   <Disclosure.Panel>
  
  </Disclosure.Panel>
      </>
    )}

   </Disclosure>
  )
}

export default Test