import React from 'react';
import './Navbar.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

export default function Navbar({menuOpen, setMenuOpen}) {
	return (
		<div className={'navbar ' + (menuOpen && 'active')}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className='logo'>Portfolio</a>
					<div className="itemContainer">
						<LocalPhoneIcon className='icon'/>
						<span>+54 9 3364198864</span>
						<MailIcon className='icon'/>
						<span>MalacalzaMarcelo@gmail.com</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
						<span className='line1'></span>
						<span className='line2'></span>
						<span className='line3'></span>
					</div>
				</div>
			</div>
		</div>
	)
}
