import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_title.png';

const Footer = () => {
	return (
		<div className="">
			<footer>
				<div className="bg-brand-11 relative top-100 w-full h-48 flex flex-col justify-between ">
					<div className="flex justify-center pt-8">
						<NavLink to="/home">
							<img className="h-7" src={logo} alt="logo" />
						</NavLink>
					</div>
					<div className="container mx-auto pb-5 px-5 flex justify-center items-center flex-col">
						<span className="inline-flex sm:mt-0 mb-10 justify-center sm:justify-start gap-3">
							<a
								href="https://www.facebook.com/phsaurav/"
								className="text-brand-1"
							>
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5 hover:text-yellow-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a
								href="https://github.com/phsaurav"
								className="ml-3 text-brand-1"
							>
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5 hover:text-yellow-500"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a
								href="https://www.instagram.com/phsaurav/"
								className="ml-3 text-brand-1"
							>
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5 hover:text-yellow-500"
									viewBox="0 0 24 24"
								>
									<rect
										width="20"
										height="20"
										x="2"
										y="2"
										rx="5"
										ry="5"
									></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
							<a
								href="linkedin.com/in/parvez-h-810848b5 "
								className="ml-3 text-brand-1"
							>
								<svg
									fill="currentColor"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="0"
									className="w-5 h-5 hover:text-yellow-500"
									viewBox="0 0 24 24"
								>
									<path
										stroke="none"
										d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
									></path>
									<circle
										cx="4"
										cy="4"
										r="2"
										stroke="none"
									></circle>
								</svg>
							</a>
						</span>
						<p className="text-black text-sm text-center sm:text-left">
							© 2021 Dev —
							<a
								href="https://www.facebook.com/phsaurav/"
								rel="noopener noreferrer"
								className="text-gray-400 ml-1 "
								target="_blank"
							>
								@PH_Saurav
							</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
