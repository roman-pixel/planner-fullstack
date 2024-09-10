import cn from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

type TransparentFiled = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<HTMLInputElement, TransparentFiled>(
	({ className, ...rest }, ref) => {
		return (
			<input
				className={cn(
					'w-full border-none bg-transparent focus:shadow-transparent focus:outline-0',
					className
				)}
				ref={ref}
				{...rest}
			/>
		)
	}
)

TransparentField.displayName = 'TransparentFiled'
