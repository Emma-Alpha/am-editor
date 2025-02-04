import { useEffect, useState } from 'react';
import { isMobile } from '@4399ywkf/engine';

const useRight = (button: React.MutableRefObject<HTMLDivElement | null>) => {
	const [isRight, setIsRight] = useState(false);

	useEffect(() => {
		if (button.current && isMobile) {
			const rect = button.current.getBoundingClientRect();
			setIsRight(rect.left > window.visualViewport.width / 2);
		}
	}, []);
	return isRight;
};

export default useRight;
