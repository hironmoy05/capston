import { useContext } from 'react';
import { Context } from '../Context';
import Images from '../components/Images';
import { getClass } from '../utils/getClass';

function Photos() {
	const { allPhotos } = useContext(Context);

	const photosElement = allPhotos.map((item, i) => (
		<Images key={item.id} photos={item} className={getClass(i)} />
	));

	return <div className='image-grid'>{photosElement}</div>;
}

export default Photos;
