import React, { useState } from 'react';
import { truths } from './../../../resources/data/truths/truths';
import { lies } from './../../../resources/data/truths/lies';

const choose = (arr, number) => {
	const ret = [];

	while (number > 0) {
		const candidate = arr[Math.floor(Math.random() * arr.length)];
		if (!ret.includes(candidate)) {
			ret.push(candidate);
			number--;
		}
	}

	return ret;
};

const getSelectedTruths = () => {
	const selectedTruths = choose(truths, 2);
	const selectedLie = choose(lies, 1);

	return selectedTruths
		.map((t) => {
			return { truth: true, text: t, clicked: false };
		})
		.concat(
			selectedLie.map((l) => {
				return { truth: false, text: l, clicked: false };
			})
		)
		.sort(() => Math.random() - 0.5);
};

const Tile_Truths = () => {
	const [selected, setSelected] = useState(getSelectedTruths());

	return (
		<article className='tile is-child notification is-light has-text-centered'>
			<p className='title has-text-primary  is-size-5-mobile'>
				two truths & a lie
			</p>
			<p className='is-size-6'>
				<em>click to reveal the truth/lie</em>
			</p>
			<hr />
			<strong className='is-size-4'>Neil... </strong>
			<ul className=''>
				{selected.map((item) => (
					<li
						style={{
							cursor: 'pointer',
							minHeight: '4.5rem',
							textDecoration:
								item.clicked && !item.truth
									? 'line-through'
									: 'inherit',
						}}
						onClick={() => {
							const newSelected = [...selected];
							const newItem = newSelected.find(
								(a) => a.text === item.text
							);
							newItem.clicked = true;
							setSelected(newSelected);
						}}
						className={
							'mt-3 is-size-6  has-text-weight-bold ' +
							(item.clicked && item.truth
								? 'has-text-success'
								: '') +
							(item.clicked && !item.truth
								? 'has-text-danger '
								: '')
						}>
						{item.text}
					</li>
				))}
			</ul>
			<hr />
			<p
				className='button is-rounded is-primary is-small'
				onClick={() => setSelected(getSelectedTruths())}>
				more
			</p>
		</article>
	);
};

export default Tile_Truths;
