import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
	const [allPhotos, setPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	const url =
		'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

	function toggleFavorite(i) {
		const newArray = allPhotos.map((photo) => {
			if (photo.id === i) {
				photo.isFavorite = !photo.isFavorite;
			}
			return photo;
		});
		localStorage.setItem('allPhotos', JSON.stringify(newArray));
		return setPhotos(newArray);
	}

	function addImageToCart(newItems) {
		const cartItem = [...cartItems, newItems];
		setCartItems((prevItems) => [...prevItems, newItems]);
		localStorage.setItem('cartItems', JSON.stringify(cartItem));
	}

	useEffect(() => {
		const existingItem = localStorage.getItem('cartItems');
		setCartItems(existingItem ? JSON.parse(existingItem) : []);
	}, []);

	function removeFromLocalStorage(id) {
		const newCartItems = cartItems.filter((item) => item.id !== id);
		localStorage.setItem('cartItems', JSON.stringify(newCartItems));
	}

	function removeFromCart(id) {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
		removeFromLocalStorage(id);
	}

	function emptyCart() {
		setCartItems([]);
		localStorage.removeItem('cartItems');
	}

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (localStorage.getItem('allPhotos')) {
					setPhotos(JSON.parse(localStorage.getItem('allPhotos')));
				} else {
					setPhotos(data);
				}
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<Context.Provider
				value={{
					allPhotos,
					toggleFavorite,
					addImageToCart,
					cartItems,
					removeFromCart,
					emptyCart,
				}}
			>
				{children}
			</Context.Provider>
		</div>
	);
}

export { ContextProvider, Context };
