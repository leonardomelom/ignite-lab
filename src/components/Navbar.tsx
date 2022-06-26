import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Logo } from "./Logo";
import { List, X } from "phosphor-react";
import { Sidebar } from "./Sidebar";


export function Navbar(){
  const [isOpen, setIsOpen] = useState(false);


  return (
    
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 2xl:justify-center xl:justify-center lg:justify-around md:justify-around sm:justify-around">
      <nav className="w-full">
          <div className="flex xl:justify-center lg:justify-around md: justify-around sm: justify-center gap-8">
            <div className="flex">
            <Logo />
            </div>
             <div className="flex 2xl:hidden xl:hidden lg:block ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                  <List weight="duotone" size={24}/>
                  ) : (
                    <X weight="duotone" size={24}/>
                  )}
                </button>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="2xl:hidden" id="mobile-menu">
                <div ref={ref} className="sm: mt-2 pt-2 min-w-full min-h-screen">
                   <Sidebar/>
                  
                </div>
              </div>
            )}
          </Transition>
      </nav>
        
    </header>
)}