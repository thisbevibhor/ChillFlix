import React from "react";

interface InputProps {
	label: string;
	type?: string;
	id: string;
	value: string;
	onChange: any;
}

const Input: React.FC<InputProps> = ({ label, type, id, value, onChange }) => {
	return (
		<div className="relative">
			<input
				value={value}
				onChange={onChange}
				type={type}
				className="
			block
			rounded-md
			px-6
			pt-6
			pb-1
			w-full
			text-md
			text-white
			bg-neutral-700
			appearance-none
			focus:outline-none
			focus:ring-0
			peer
			"
				id={id}
				placeholder=" "
			/>
			;
			<label
				htmlFor={id}
				className="absolute
			text-md
			text-zinc-400 
			duration-150
			transform 
			-translate-y-3
			scale-75
			top-4
			z-10
			origin-[0]
			left-6
			peer-placeholder-shown:scale-100 
			peer-placeholder-shown:-translate-y-0
			peer-focus:scale-75 
			peer-focus:-translate-y-3"
			>
				{label}
			</label>
		</div>
	);
};
export default Input;
