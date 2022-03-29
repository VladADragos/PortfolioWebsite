type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className='mt-auto text-center text-gray-100 font-normal'>
			{' '}
			Vlad Dragos &copy; {new Date().getFullYear()}{' '}
		</footer>
	);
};

export default Footer;
