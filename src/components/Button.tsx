import Link from 'next/link';
import React from 'react';

type PropsButton = {
	children: React.ReactNode;
	type: 'primary' | 'secondary' | 'tertiary';
	noEffect?: boolean;
	link?: string;
	redirect?: boolean;
};

type PropsContainer = {
	link?: string;
	redirect?: boolean;
};
const Container: React.FC<PropsContainer> = ({ children, link, redirect }) => {
	console.log(redirect);
	redirect = redirect ? true : false;

	if (!link && !redirect) return <>{children}</>;
	if (link && redirect)
		return (
			<a id='regular-link' href={link} target='_blank' rel='noreferrer'>
				{children}
			</a>
		);

	return (
		<Link href={link}>
			<a>{children}</a>
		</Link>
	);
};

const Button: React.FC<PropsButton> = ({ children, type, link, redirect, noEffect }) => {
	switch (type) {
		case 'primary':
			return (
				<Container link={link} redirect={redirect}>
					<button
						className={`button ${
							noEffect ? '' : 'button-hover-effect'
						}  bg-brand-orange-medium hover:bg-brand-orange-light`}
					>
						{children}
					</button>
				</Container>
			);
		case 'secondary':
			return (
				<Container link={link} redirect={redirect}>
					<button className={`button bg-brand-blue-medium hover:bg-brand-blue-light `}>
						{children}
					</button>
				</Container>
			);
		case 'tertiary':
			return (
				<Container link={link} redirect={redirect}>
					<button
						className={`bg-none font-bold text-slate-600 px-5 py-2 border-2 rounded-lg border-brand-blue-medium hover:text-slate-50 hover:bg-brand-blue-medium hover:rounded-lg hover:scale-110 transition-scale  duration-300 ease-out`}
					>
						{children}
					</button>
				</Container>
			);
	}
};

export default Button;
