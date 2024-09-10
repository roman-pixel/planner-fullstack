import { DropResult } from '@hello-pangea/dnd'

import { FILTERS } from '../columns.data'

import { useUpdateTask } from './useUpdateTask'

export function useTaskDnd() {
	const { updateTask } = useUpdateTask()

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return

		const destinationColumId = result.destination.droppableId

		if (destinationColumId === result.source.droppableId) return

		if (destinationColumId === 'completed') {
			updateTask({
				id: result.draggableId,
				data: {
					isCompleted: true
				}
			})

			return
		}

		const newCreatedAt = FILTERS[destinationColumId].format()

		updateTask({
			id: result.draggableId,
			data: {
				createdAt: newCreatedAt,
				isCompleted: false
			}
		})
	}

	return { onDragEnd }
}
