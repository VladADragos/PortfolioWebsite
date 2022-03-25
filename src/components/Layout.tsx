import React from 'react';
import Navbar from './Navbar';
type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className=' px-20 bg-slate-50  min-h-screen font-poppins font-bold text-lg  '>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
