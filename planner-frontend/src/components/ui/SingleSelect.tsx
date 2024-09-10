import cn from 'clsx'
import { X } from 'lucide-react'

import { useOutside } from '@/hooks/useOutside'

import { Badge } from './Badge'

interface IOption {
	label: string
	value: string
}

interface ISingleSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
}

export function SingleSelect({
	data,
	onChange,
	value,
	isColorSelect
}: ISingleSelect) {
	const { isShow, setIsShow, ref } = useOutside(false)
	const getValue = () => data.find(item => item.value === value)?.value

	return (
		<div
			className={cn('relative min-w-36', {
				'w-max': isColorSelect
			})}
			ref={ref}
		>
			<button
				onClick={e => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
			>
				{getValue() ? (
					<Badge
						variant={value}
						className='capitalize'
						style={isColorSelect ? { backgroundColor: value } : {}}
					>
						{getValue()}
					</Badge>
				) : (
					<Badge>Click for select</Badge>
				)}
			</button>

			{value && (
				<button
					className='absolute right-0 top-0 opacity-30 transition-opacity hover:opacity-100'
					onClick={e => {
						e.preventDefault()
						onChange('')
					}}
				>
					<X size={14} />
				</button>
			)}

			{isShow && (
				<div
					className={cn(
						'slide absolute left-0 z-10 w-full rounded-lg bg-sidebar p-2.5 shadow'
					)}
					style={{
						top: 'calc(100% + 0.5rem'
					}}
				>
					{data.map(item => (
						<button
							key={item.value}
							onClick={e => {
								e.preventDefault()
								onChange(item.value)
								setIsShow(false)
							}}
							className='mb-4 block rounded-lg capitalize last:mb-0'
							style={isColorSelect ? { backgroundColor: item.value } : {}}
						>
							<Badge variant={item.value}>{item.label}</Badge>
						</button>
					))}
				</div>
			)}
		</div>
	)
}
