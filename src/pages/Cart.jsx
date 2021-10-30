import { useContext, useState } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItems';

function Cart() {
	const [order, setOrder] = useState('Place Order');
	const { cartItems, emptyCart } = useContext(Context);
	const cartItemsElements = cartItems.map((item) => (
		<CartItem key={item.id} item={item} />
	));

	const cost = cartItems.length * 5.99;
	const totalCost = cost.toLocaleString('en-us', {
		style: 'currency',
		currency: 'USD',
	});

	function orderPlaced() {
		setOrder('Ordering...');
		setTimeout(() => {
			console.log('Order Placed');
			setOrder('Place Order');
			emptyCart();
		}, 3000);
	}

	return (
		<main className='cart-page'>
			<div className='container'>
				<h1>Check out</h1>
				{cartItemsElements}
				<p className='total-cost'>Total: {totalCost}</p>
				<div className='order-button'>
					{cartItems.length ? (
						<button onClick={() => orderPlaced()}>{order}</button>
					) : (
						''
					)}
				</div>
			</div>
		</main>
	);
}

export default Cart;
