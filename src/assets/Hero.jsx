
import { useState, useRef } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AnchorLInk from 'react-anchor-link-smooth-scroll'
import { IoCallOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Chiriwa from '../assets/pictures/Chiriwa.pdf'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div id='home' className='flex flex-col  justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/pictures/wallpaper.PNG")]  bg-no-repeat bg-cover bg-center h-screen'>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">

              <h1>CHIRIWA</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <AnchorLInk className='anchor-link  ' href='#home' ><p className="text-sm/6 font-semibold text-white" onClick={() => setMenu("home")}>Home </p></AnchorLInk>
            <AnchorLInk className='anchor-link' offset={50} href='#about'><p className="text-sm/6 font-semibold text-white" onClick={() => setMenu("about")}>About Me</p></AnchorLInk>
            <AnchorLInk className='anchor-link' offset={50} href='#portfolio'><p className="text-sm/6 font-semibold text-white" onClick={() => setMenu("portfolio")}>About Me</p></AnchorLInk>
            <AnchorLInk className='anchor-link' offset={50} href='#services'><p className="text-sm/6 font-semibold text-white" onClick={() => setMenu("services")}>Services</p></AnchorLInk>
            <AnchorLInk className='anchor-link' offset={50} href='#contact'><p className="text-sm/6 font-semibold text-white" onClick={() => setMenu("contact")}>Contact</p></AnchorLInk>

          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="tel:+263779113200" className=" font-semibold text-white text-3xl">
              <IoCallOutline />

            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                CHIRIWA
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <a href=""><IoMdClose /></a>

              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">

                  <AnchorLInk className='anchor-link  ' href='#home'><a className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200" onClick={() => setMenu("home")}>Home </a></AnchorLInk>
                  <AnchorLInk className='anchor-link' offset={50} href='#about'><a className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200" onClick={() => setMenu("about")}>About Me</a></AnchorLInk>
                  <AnchorLInk className='anchor-link' offset={50} href='#portfolio'><a className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200" onClick={() => setMenu("portfolio")}>Portifolio</a></AnchorLInk>
                  <AnchorLInk className='anchor-link' offset={50} href='#services'><a className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200" onClick={() => setMenu("services")}>Services</a></AnchorLInk>
                  <AnchorLInk className='anchor-link' offset={50} href='#contact'><a className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200" onClick={() => setMenu("contact")}>Contact</a></AnchorLInk>

                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-black hover:bg-gray-200"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">

          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              JIMMY CHIRIWA
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              A passionate maths and science with seamless experiences to nature students.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get In Touch
              </a>
              <a href={Chiriwa} target="_blank"
                rel="noopener noreferrer" className="text-sm/6 font-semibold text-white ">
                Resume <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}