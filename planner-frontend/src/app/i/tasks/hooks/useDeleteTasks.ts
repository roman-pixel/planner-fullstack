import { useMutation, useQueryClient } from '@tanstack/react-query'

import { taskService } from '@/services/task.service'

export function useDeleteTask() {
	const queryClient = useQueryClient()

	const { mutate: deleteTask, isPending: isDeletingTask } = useMutation({
		mutationKey: ['delete-task'],
		mutationFn: (id: string) => taskService.deleteTask(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
		}
	})

	return { deleteTask, isDeletingTask }
}
