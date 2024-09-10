import { type Dispatch, type SetStateAction } from 'react'

import type { ITaskResponse } from '@/types/task.types'

interface IKanbanAddCardInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanAddCardInput({
	filterDate,
	setItems
}: IKanbanAddCardInput) {
	const addCard = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate
				}
			]
		})
	}

	return (
		<div className='mt5'>
			<button
				onClick={addCard}
				className='text-sm italic opacity-40'
			>
				Add task...
			</button>
		</div>
	)
}
