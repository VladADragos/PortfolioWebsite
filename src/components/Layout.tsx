import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className='px-36 bg-slate-50  min-h-screen font-poppins font-bold text-lg flex flex-col'>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
