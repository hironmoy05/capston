import { useState, useEffect, useRef } from 'react';

function useHover() {
	const [hovered, setHovered] = useState(false);
	const ref = useRef(null);

	function enter() {
		setHovered(true);
	}

	function leave() {
		setHovered(false);
	}

	useEffect(() => {
		const referencingDomElement = ref.current;

		referencingDomElement.addEventListener('mouseenter', enter);
		referencingDomElement.addEventListener('mouseleave', leave);

		return () => {
			referencingDomElement.removeEventListener('mouseenter', enter);
			referencingDomElement.removeEventListener('mouseleave', leave);
		};
	}, []);

	return [hovered, ref];
}

export default useHover;
