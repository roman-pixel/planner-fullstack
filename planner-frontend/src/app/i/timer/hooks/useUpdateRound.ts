import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypePomodoroTimerRoundFormState } from '@/types/pomodoro-timer.types'

import { pomodoroTimerService } from '@/services/pomodoro-timer.service'

interface IUseUpdateRound {
	id: string
	data: TypePomodoroTimerRoundFormState
}

export function useUpdateRound() {
	const queryClient = useQueryClient()

	const { mutate: updateRound, isPending: isUpdatingRound } = useMutation({
		mutationKey: ['update-round'],
		mutationFn: ({ id, data }: IUseUpdateRound) =>
			pomodoroTimerService.updatgeRound(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get-today-session'] })
		}
	})

	return { updateRound, isUpdatingRound }
}
