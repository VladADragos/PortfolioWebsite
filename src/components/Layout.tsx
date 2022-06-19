import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
type Props = {
	children: React.ReactNode;
};
//
//<Navbar />
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div id="layout" className='lg:px-36 px-8 bg-slate-50   min-h-screen font-poppins font-bold text-lg flex flex-col items-center w-full'>
			<Navbar />
			{children}
			<Footer />

		</div>
	);
};

export default Layout;
