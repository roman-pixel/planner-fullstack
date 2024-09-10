import cn from 'clsx'
import dayjs from 'dayjs'
import LocalazedFormat from 'dayjs/plugin/localizedFormat'
import { X } from 'lucide-react'
import { useState } from 'react'
import { DayPicker, PropsSingle } from 'react-day-picker'

import { useOutside } from '@/hooks/useOutside'

import { formatCaption } from './formatCaption'

dayjs.extend(LocalazedFormat)

interface IDatePicker {
	onChange: (value: string) => void
	value: string
	position?: 'left' | 'right'
}

export function DatePicker({
	onChange,
	value,
	position = 'right'
}: IDatePicker) {
	const [selected, setSelected] = useState<Date>()
	const { isShow, setIsShow, ref } = useOutside(false)

	const currentYear = new Date()

	const handleDaySelect: PropsSingle['onSelect'] = date => {
		const ISOdate = date?.toISOString()

		setSelected(date)

		if (ISOdate) {
			onChange(ISOdate)
			setIsShow(false)
		} else {
			onChange('')
		}
	}

	return (
		<div
			className='relative'
			ref={ref}
		>
			<button onClick={() => setIsShow(!isShow)}>
				{value ? dayjs(value).format('LL') : 'Click for select'}
			</button>

			{value && (
				<button
					className='absolute -right-4 -top-2 opacity-30 transition-opacity hover:opacity-100'
					onClick={() => onChange('')}
				>
					<X size={14} />
				</button>
			)}

			{isShow && (
				<div
					className={cn(
						'absolute z-10 rounded-lg bg-sidebar p-2.5',
						position === 'left' ? '-left-4' : '-right-4'
					)}
				>
					<DayPicker
						startMonth={currentYear}
						mode='single'
						defaultMonth={selected}
						selected={selected}
						onSelect={handleDaySelect}
						weekStartsOn={1}
						formatters={{ formatCaption }}
					/>
				</div>
			)}
		</div>
	)
}
