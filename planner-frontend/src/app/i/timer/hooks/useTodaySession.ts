import { useQuery } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useEffect } from 'react'

import type { ITimerState } from '../timer.types'

import { useLoadSettings } from './useLoadSettings'
import { pomodoroTimerService } from '@/services/pomodoro-timer.service'

export function useTodaySession({
	setSecondsLeft,
	setActiveRound
}: ITimerState) {
	const { workInterval } = useLoadSettings()

	const {
		data: sessionResponse,
		isLoading,
		refetch,
		isSuccess
	} = useQuery({
		queryKey: ['get-today-session'],
		queryFn: () => pomodoroTimerService.getTodaySession()
	})

	const rounds = sessionResponse?.data.rounds

	useEffect(() => {
		if (isSuccess && rounds) {
			const activeRound = rounds.find(round => !round.isCompleted)
			setActiveRound(activeRound)

			if (activeRound && activeRound.totalSeconds !== 0) {
				setSecondsLeft(activeRound.totalSeconds)
			}
		}
	}, [isSuccess, rounds])

	return { sessionResponse, isLoading, refetch, isSuccess, workInterval }
}
