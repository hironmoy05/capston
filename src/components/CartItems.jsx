import { useContext, useState } from 'react';
import { Context } from '../Context';
import { PropTypes } from 'prop-types';
import useHover from '../Hooks/useHover';

function CartItems({ item }) {
	const { removeFromCart } = useContext(Context);
	// const [hovered, setHovered] = useState(false);
	const [hovered, ref] = useHover();

	const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

	return (
		<div className='cart-item'>
			<i
				ref={ref}
				className={iconClassName}
				onClick={() => removeFromCart(item.id)}
			></i>
			<img src={item.url} width='130px' />
			<p>$5.99</p>
		</div>
	);
}

CartItems.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}),
};

export default CartItems;
