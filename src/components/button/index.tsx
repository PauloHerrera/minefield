interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	disabled?: boolean;
}

export const Button = ({ children, onClick, disabled }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md w-full transition-colors
        disabled:bg-gray-400 disabled:cursor-not-allowed"
			type="button"
		>
			{children}
		</button>
	);
};
