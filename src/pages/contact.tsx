import type { NextPage } from 'next';
import Button from '../components/Button';

const Contact: NextPage = () => {
	return (
		<section className='mt-8 flex-1 flex   gap-8 '>
			<div className='flex-[3]'>
				<div className='   '>
					{' '}
					<form action='' className='flex flex-col gap-4  w-5/6 desktop-lg:w-3/6'>
						<div className='flex flex-col'>
							<label className='text-black' htmlFor='name'>
								Name:
							</label>
							<input
								className='rounded-md py-1 px-2  border-2 border-[#c2c2c2]  focus:border-[#305e85] focus:outline-none '
								type='text'
								id='name'
							/>
						</div>
						<div className='flex flex-col'>
							<label className='text-black' htmlFor='name'>
								Email:
							</label>
							<input
								className='rounded-md py-1 px-2  border-2 border-[#c2c2c2]  focus:border-[#305e85] focus:outline-none '
								type='email'
								id='email'
							/>
						</div>
						<div className='flex flex-col'>
							<label className='text-black' htmlFor='name'>
								Message:
							</label>
							<textarea
								className='rounded-md py-1 px-2  border-2 border-[#c2c2c2]  focus:border-[#305e85] focus:outline-none '
								id='message'
							></textarea>
						</div>
						<Button type={'primary'} noEffect>
							Send
						</Button>
					</form>{' '}
				</div>{' '}
			</div>
			<div className='bg-[#b6c9d9] p-8 flex-1    flex flex-col gap-4'>
				<div className=''>
					<h3 className='text-sm font-normal'>Phone number</h3>
					<a href='tel:0705172459' className='text-white'>
						0705172459
					</a>
				</div>
				<div className=''>
					<h3 className='text-sm font-normal'>Email</h3>
					<a href='email:vlad@vladdragos.com' className='text-white'>
						vlad@vladdragos.com
					</a>
				</div>
				<div className=''>
					<h3 className='text-sm font-normal'>Address</h3>
					<h4 className='text-white'>Kinna, pruhultsvägen 21, 51153</h4>
				</div>
			</div>
		</section>
	);
};

export default Contact;
