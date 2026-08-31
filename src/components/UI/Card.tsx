// import React from 'react';

export default function Card(props: any){
	const classes = 'rounded-xl shadow-sm ' + props.className;

	return (
		<div className={classes}>
			{props.children}
		</div>
	)
}