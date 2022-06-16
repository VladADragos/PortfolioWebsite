import logo from '../assets/images/Intersect.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HiOfficeBuilding, HiOutlineAnnotation, HiOutlineBriefcase, HiUser } from 'react-icons/hi';
import { DiGithubBadge } from 'react-icons/di';
import Routes from '../Routes';
import { IconType } from 'react-icons';

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
	IoPersonOutline
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
const Navbar: React.FC = () => {
	const { pathname } = useRouter();
	console.log(pathname);
	return (
		<nav className='flex w-full justify-between pt-4 items-center'>
			<header className='hover:scale-105 transition-all ease-in-out duration-400  '>
				<Link href={Routes.home}>
					<a>
						<img src={logo.src} alt='logo'></img>
					</a>
				</Link>
			</header>

			<ul className='flex gap-6 font-medium'>
				{NavLinks.map(({ name, path, redirect, icon }, index) => (
					<li key={index} className={` ${0}`}>
						{redirect ? (
							<a
								href={path}
								target={'_blank'}
								className='link-effect-hover flex items-center'
								rel='noreferrer'
							>
								{name} {icon}
							</a>
						) : (
							<Link href={path}>
								<a
									className={
										pathname === path
											? 'link-effect-selected flex items-center'
											: 'link-effect-hover flex items-center'
									}
								>
									{name} {icon}
								</a>
							</Link>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
