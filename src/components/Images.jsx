import { useState, useContext } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';
import useHover from '../Hooks/useHover';

function Images({ photos, className }) {
	const { toggleFavorite, addImageToCart, cartItems, removeFromCart } =
		useContext(Context);
	// const [hovered, setHovered] = useState(false);
	const [hovered, ref] = useHover();

	function favoriteIcon() {
		if (photos.isFavorite) {
			return (
				<i
					className='ri-heart-fill favorite'
					onClick={() => toggleFavorite(photos.id)}
				></i>
			);
		} else if (hovered) {
			return (
				<i
					className='ri-heart-line favorite'
					onClick={() => toggleFavorite(photos.id)}
				></i>
			);
		}
	}

	function cartIcon() {
		const allReadyInCart = cartItems.some((item) => item.id === photos.id);
		if (allReadyInCart) {
			return (
				<i
					className='ri-shopping-cart-fill cart'
					onClick={() => removeFromCart(photos.id)}
				></i>
			);
		} else if (hovered) {
			return (
				<i
					className='ri-add-circle-line cart'
					onClick={() => addImageToCart(photos)}
				></i>
			);
		}
	}

	return (
		<div className={`image-container ${className}`} ref={ref}>
			<img src={photos.url} alt='random pic' />
			<div className='icons'>
				{favoriteIcon()}
				{cartIcon()}
			</div>
		</div>
	);
}

Images.prototypes = {
	className: PropTypes.string.isRequired,
	photos: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool,
	}),
};

export default Images;
