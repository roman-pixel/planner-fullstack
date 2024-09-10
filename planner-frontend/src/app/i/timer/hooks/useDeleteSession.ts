import { useMutation, useQueryClient } from '@tanstack/react-query'

import { pomodoroTimerService } from '@/services/pomodoro-timer.service'

export function useDeleteSession(onDeleteSuccess: () => void) {
	const queryClinet = useQueryClient()

	const { mutate: deletingSession, isPending: isDeletingSession } = useMutation(
		{
			mutationKey: ['delete-session'],
			mutationFn: (id: string) => pomodoroTimerService.deleteSession(id),
			onSuccess() {
				queryClinet.invalidateQueries({ queryKey: ['get-today-session'] })
				onDeleteSuccess()
			}
		}
	)

	return { deletingSession, isDeletingSession }
}
