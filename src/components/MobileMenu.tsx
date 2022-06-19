import { Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'


import logo from '../assets/images/Intersect.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HiOfficeBuilding, HiOutlineAnnotation, HiOutlineBriefcase, HiUser } from 'react-icons/hi';
import { DiGithubBadge } from 'react-icons/di';
import Routes from '../Routes';
import { IconType } from 'react-icons';
import { Menu } from '@headlessui/react'
import {
	IoBriefcase,
	IoBriefcaseOutline,
	IoChatbox,
	IoChatboxOutline,
	IoDocumentText,
	IoDocumentTextOutline,
	IoHomeOutline,
	IoHomeSharp,
	IoLogoGithub,
	IoPencilOutline,
	IoPersonOutline,
	IoReorderThree
} from 'react-icons/io5';
type NavLink = {
	name: string;
	path: string;
	redirect: boolean;
	icon: React.ReactNode;
};
const NavLinks: NavLink[] = [
	{ name: 'Home', path: Routes.home, redirect: false, icon: <IoHomeOutline /> },
	{
		name: 'Resume',
		path: Routes.resume,
		redirect: true,
		icon: <IoDocumentTextOutline></IoDocumentTextOutline>
	},
	{
		name: 'Contact',
		path: Routes.contact,
		redirect: false,
		icon: <IoChatboxOutline />
	},
	{
		name: 'Portfolio',
		path: Routes.portfolio.index,
		redirect: false,
		icon: <IoBriefcaseOutline />
	},
	{ name: 'About', path: Routes.about, redirect: false, icon: <IoPersonOutline /> },
	{ name: 'Github', path: Routes.github, redirect: true, icon: <IoLogoGithub /> },
	{ name: 'Blog', path: Routes.blog, redirect: true, icon: <IoPencilOutline /> }
];

export default function MobileMenu() {
  return (
    <div className="   text-right w-full flex justify-between mt-4 relative z-1">
        	<header className='hover:scale-105 transition-all ease-in-out duration-400  '>
				<Link href={Routes.home}>
					<a>
						<img src={logo.src} alt='logo'></img>
					</a>
				</Link>
			</header>
      <Menu as="div" className=" inline-block text-left ">
          <Menu.Button className=" justify-center  text-black font-medium   focus:outline-none  ">
            <IoReorderThree className='h-12 w-12'></IoReorderThree>
          </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0  w-full  origin-top-right   rounded-md bg-brand-blue-dark shadow-lg  z-10">
              {NavLinks.map(({name,path,redirect,icon},index)=>{
                  return (<div className="px-1 py-1" key={index}>
                  <Menu.Item >
                    {({ active }) => (
                      <a
                        className="text-white font-bold  flex w-full items-center rounded-md px-2 py-2 text-sm"
                        href={path}
                      >
    
                        {name}
                      </a>
                    )}
                  </Menu.Item>
    
                </div>)
              })}
            
    
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

