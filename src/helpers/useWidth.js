import { useState, useEffect } from 'react';

const useWidth = () => {
	const [width, setWidth] = useState(1200);

	const handleResize = () => setWidth(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		setWidth(window.innerWidth);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return width;
};

export default useWidth;
