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
import { IconType } from 'react-icons';
import { PortfolioItemType } from '../assets/data/PortfolioItems';

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
		<div className='flex lg:flex-row flex-col scale-100 focus:scale-105 hover:scale-105 transition-transform ease-in-out duration-350 outline-0   gap-4'>
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

					<PortfolioItemImage image={props.image} />
					<PortfolioItemLeft {...props} />

		</PortfolioItemContainer>
	);
};


type PortfolioItemUsingPorps  = Pick<PortfolioItemType,"using">

const PortfolioItemUsing: React.FC<PortfolioItemUsingPorps> = ({using})=> {

	
	
	return (
		<span className='flex items-center mt-4  '>
			<h3 className='font-bold text-ms  text-slate-900'>using:</h3>
			{
				using.map((item,index)=>{
					return <item.icon key={index} className="text-4xl " title={item.name} /> 
				})
			}
			
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



type PortfolioItemLeftProps = Omit<PortfolioItemProps, 'image'>;
const PortfolioItemLeft: React.FC<PortfolioItemLeftProps> = ({
	reverse,
	name,
	demoCredentials,
	description,
	using,
	demo,
	github
}) => {
	return (
		<div className='flex-1  flex items-center '>
			<div className={clsx(' p-4     h-full ')}>
				<h2 className={clsx('text-5xl text-slate-800  font-bold ')}>{name}</h2>
				<PortfolioItemUsing  using={using}/>
				<h3 className='mt-4 text-sm'>Demo login</h3>
				<p className='   text-sm desktop-lg:text-lg font-semibold'> <span className='text-md font-thin'>username:</span>  {demoCredentials.username} <span className='text-md font-thin'>password:</span>  {demoCredentials.password}</p>
				<p className='font-normal mt-4 text-sm desktop-lg:text-lg'>{description}</p>
				<PortfolioItemLinks demo={demo} source={github} />
			</div>
		</div>
	);
};
