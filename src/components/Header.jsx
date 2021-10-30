import { useContext } from 'react';
const { Link } = require('react-router-dom');
import { Context } from '../Context';

function Header() {
	const { cartItems } = useContext(Context);

	return (
		<header>
			<div className='container'>
				<Link to='/'>
					<h2>Pic Some</h2>
				</Link>
				<Link to='/cart'>
					<div className='cartBox'>
						<p>
							<i className='ri-shopping-cart-line ri-fw ri-2x'></i>
							Cart
						</p>
						<span>{cartItems.length}</span>
					</div>
				</Link>
			</div>
		</header>
	);
}

export default Header;
