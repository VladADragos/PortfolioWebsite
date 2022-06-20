import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import Button from '../components/Button';



function sendEmail(name: string,email: string,message: string) {
	const url = 'https://vladdragos.com/workers/email';
	const data = { name, email, message };
	try {
		fetch(url, {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				'Allow-Control-Allow-Origin': '*',
			}
			
			
	})
	} catch (error) {
		
	}
}

const Contact: NextPage = () => {
	const [sent,setSent] = useState(false);

	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSent(true);
		nameRef.current.value = '';
		emailRef.current.value = '';
		messageRef.current.value = '';

		sendEmail(nameRef.current.value,emailRef.current.value,messageRef.current.value);
	}





	return (
		<section className='mt-8  w-full lg:flex-1 flex     gap-8 desktop-lg:w-3/6 lg:w-4/6 mb-8 lg:mb-0  justify-items-center  mx-auto flex-col lg:flex-row'>
					{' '}
					<form action='' className='flex-1 desktop-lg:flex-[2]  flex flex-col gap-4    max-w-full h-full' onSubmit={handleSubmit}>
						<div className='flex flex-col max-w-full hn'>
							<label className='text-black' htmlFor='name'>
								Name:
							</label>
							<input
								className='rounded-md py-1 px-2   border-2 border-[#c2c2c2]  focus:border-[#305e85] focus:outline-none '
								type='text'
								id='name'
								required
								ref={nameRef}
							/>
						</div>
						<div className='flex flex-col max-w-full '>
							<label className='text-black' htmlFor='name'>
								Email:
							</label>
							<input
								className='rounded-md py-1 px-2  border-2 border-[#c2c2c2]  focus:border-[#305e85] focus:outline-none '
								type='email'
								id='email'
								required
								ref={emailRef}
							/>
						</div>
						<div className='flex flex-col '>
							<label className='text-black' htmlFor='name'>
								Message:
							</label>
							<textarea
								className='rounded-md py-1 px-2  border-2 border-[#c2c2c2]  focus:border-[#305e85] focus:outline-none '
								id='message'
								required
								ref={messageRef}
							></textarea>
						</div>
						<Button type={sent ? "secondary" : "primary"} noEffect disabled={sent}>
							{sent ? "Message sent" : "Send"}
						</Button>
						{
							sent && <p className='text-center text-black'>thank you for reaching out, ill be in contact soon!</p>
						}

					</form>{' '}
			<div className='bg-[#b6c9d9] p-8 flex-2    flex flex-col gap-4 '>
				<div className='wrap'>
					<h3 className='text-sm font-normal'>Phone number</h3>
					<a href='tel:0705172459' className='text-white break-words'>
						0705172459
					</a>
				</div>
				<div className=''>
					<h3 className='text-sm font-normal'>Email</h3>
					<a href='email:vlad@vladdragos.com' className='text-white break-words'>
						vlad@vladdragos.com
					</a>
				</div>
				<div className=''>
					<h3 className='text-sm font-normal'>Address</h3>
					<h4 className='text-white break-words'>Kinna, pruhultsvägen 21, 51153</h4>
				</div>
			
			</div>
		</section>
	);
};

export default Contact;
