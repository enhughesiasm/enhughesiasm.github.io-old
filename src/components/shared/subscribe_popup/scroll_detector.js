import React from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const ScrollDetector = (props) => {
	useScrollPosition(
		({ prevPos, currPos }) => {
			// overall document height, arcane:
			// const scrollHeight = Math.max(
			// 	document.body.scrollHeight, document.documentElement.scrollHeight,
			// 	document.body.offsetHeight, document.documentElement.offsetHeight,
			// 	document.body.clientHeight, document.documentElement.clientHeight
			//   );

			if (currPos.y !== 0 && currPos.y !== prevPos.y) {
				if (props.handleScroll) {
					props.handleScroll();
				}
			}
		},
		null,
		null,
		false,
		700
	);

	return <></>;
};

export default ScrollDetector;
