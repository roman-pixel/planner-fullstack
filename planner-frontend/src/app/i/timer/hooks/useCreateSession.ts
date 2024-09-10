import { useMutation, useQueryClient } from '@tanstack/react-query'

import { pomodoroTimerService } from '@/services/pomodoro-timer.service'

export function useCreateSession() {
	const queryClinet = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['create-new-session'],
		mutationFn: () => pomodoroTimerService.createSession(),
		onSuccess() {
			queryClinet.invalidateQueries({ queryKey: ['get-today-session'] })
		}
	})

	return { mutate, isPending }
}
