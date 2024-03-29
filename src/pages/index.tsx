import type { NextPage } from 'next';
import React from 'react';

import Link from 'next/link';
import type { StaticImageData } from 'next/image';

import { DiGithubBadge } from 'react-icons/di';

import Routes from '../Routes';
import Button from '../components/Button';
import PortfolioItems from '../assets/data/PortfolioItems';

const Home: NextPage = () => {
	return (
		<section className='lg:mt-32 mt-8 flex flex-col gap-12'>
			<div>
				<div className=' '>
					<h2 className='font-poppins font-medium text-2xl 2xl:text-3xl '>
						Hello! My name is Vlad. I&apos;m a
					</h2>
					<h1 className='font-pacifico text-5xl text-brand-blue-medium desktop-sm:text-4xl desktop-md:text-5xl desktop-lg:text-6xl    '>
						Front-end oriented full-stack developer
					</h1>
				</div>
				<div className='pt-5 flex gap-4'>
					<Button type='primary' link={Routes.portfolio.index}>
						Portfolio
					</Button>
					<Button type='secondary' link={Routes.contact}>
						Contact
					</Button>
				</div>
			</div>

			<PortfolioOverview />
		</section>
	);
};

export default Home;

function PortfolioOverview() {
	return (
		<div>
			<h3 className='mb-4'>Some projects</h3>
			<div className='grid lg:grid-cols-3 grid-cols-1 gap-12 xl:w-4/5'>
				{PortfolioItems.map((props, index) => (
					<PortfolioItem {...props} key={index} />
				))}
			</div>
		</div>
	);
}

type PortfolioItemProps = {
	name: string;
	github: string;
	demo: string;
	image: StaticImageData;
};
const PortfolioItem: React.FC<PortfolioItemProps> = ({ name, demo, github, image }) => {
	return (
		<div className=' hover:scale-110 transition-all ease-out duration-700'>
			<a href={demo} target='_blank' rel='noreferrer'>
				<div className=''>
					<div className='border-4 border-black'>
						{/*eslint-disable-next-line @next/next/no-img-element*/}
						<img src={image.src} alt='catbook'></img>
					</div>
					<div className='w-12 h-4 bg-black mx-auto'></div>
				</div>
			</a>
			<div className='flex gap-4'>
				<a className='flex items-center hover:underline gap-1 text-slate-700' href={github}>
					<h4 className='font-medium'>source</h4>
					<DiGithubBadge className='text-xl' />
				</a>
				<Link href={Routes.portfolio.detail(name)}>
					<a className='hover:underline text-slate-600'>
						<h4 className='font-medium'>learn more</h4>
					</a>
				</Link>
			</div>
		</div>
	);
};
