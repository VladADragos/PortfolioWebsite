import type { NextPage } from 'next';
import catbook from '../images/catbook.png';
import { DiGithubBadge, DiMysql, DiPhp, DiJsBadge, DiCss3Full } from 'react-icons/di';
import { HiLink } from 'react-icons/hi';
import Routes from '../Routes';
import PortfolioItems from '../assets/data/PortfolioItems';
import type { PortfolioItemType } from '../assets/data/PortfolioItems';
import clsx from 'clsx';
import type { StaticImageData } from 'next/image';
import Button from '../components/Button';

const Portfolio: NextPage = () => {
	return (
		<section className='mt-16  flex flex-col items-center gap-20 mb-8' id='portfolio-section'>
			{PortfolioItems.map((props, index) => (
				<PortfolioItem {...props} reverse={false} key={index} />
			))}
		</section>
	);
};

export default Portfolio;

const PortfolioItemContainer = ({ children }) => {
	return (
		<div className='flex  scale-100 focus:scale-105 hover:scale-105 transition-transform ease-in-out duration-350 outline-0   gap-4'>
			{children}
		</div>
	);
};

type PortfolioItemImagePorps = { image: StaticImageData };
const PortfolioItemImage = ({ image }) => {
	return (
		<div className='flex-1   '>
			<img className='rounded-lg' src={image.src} />
		</div>
	);
};

type PortfolioItemProps = PortfolioItemType & { reverse?: boolean };
const PortfolioItem: React.FC<PortfolioItemProps> = props => {
	return (
		<PortfolioItemContainer>
			{props.reverse ? (
				<>
					<PortfolioItemLeft {...props} />
					<PortfolioItemImage image={props.image} />
				</>
			) : (
				<>
					<PortfolioItemImage image={props.image} />
					<PortfolioItemLeft {...props} />
				</>
			)}
		</PortfolioItemContainer>
	);
};

function PortfolioItemUsing({}) {
	return (
		<span className='flex items-center mt-4  text-xl'>
			<h3 className='font-bold text-black'>using:</h3>
			<DiMysql className=' text-4xl' />
			<DiPhp className=' text-4xl' />
			<DiJsBadge className=' text-4xl' />
			<DiCss3Full className=' text-4xl' />
		</span>
	);
}

interface PortfolioItemLinksProps {
	demo: string;
	source: string;
}
const PortfolioItemLinks: React.FC<PortfolioItemLinksProps> = ({ demo, source }) => {
	return (
		<div className='flex  gap-4 mt-4 text-brand-orange-light'>
			<Button type='secondary' link={demo} redirect>
				<div className='flex items-center gap-2'>
					<h4 className='font-medium'>demo</h4>
					<HiLink className='text-xl' />
				</div>
			</Button>
			<Button type='primary' link={source} redirect>
				<div className='flex items-center gap-2'>
					<h4 className='font-medium'>source</h4>
					<DiGithubBadge className='text-xl' />
				</div>
			</Button>
		</div>
	);
};

function PortfolioItemDescription({ description }) {
	return <p className='font-normal mt-4 text-sm desktop-lg:text-lg'>{description}</p>;
}

type PortfolioItemLeftProps = Omit<PortfolioItemProps, 'image'>;
const PortfolioItemLeft: React.FC<PortfolioItemLeftProps> = ({
	reverse,
	name,
	description,
	demo,
	github
}) => {
	return (
		<div className='flex-1  flex items-center '>
			<div className={clsx(' p-4    text-black h-full ')}>
				<h2 className={clsx('text-5xl text-black font-bold ')}>{name}</h2>
				<PortfolioItemUsing />
				<PortfolioItemDescription description={description} />
				<PortfolioItemLinks demo={demo} source={github} />
			</div>
		</div>
	);
};
