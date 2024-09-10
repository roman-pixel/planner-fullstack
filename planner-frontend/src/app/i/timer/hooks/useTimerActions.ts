import type { IPomodoroTimerRoundResponse } from '@/types/pomodoro-timer.types'

import type { ITimerState } from '../timer.types'

import { useLoadSettings } from './useLoadSettings'
import { useUpdateRound } from './useUpdateRound'

type TypeUseTimerActions = ITimerState & {
	rounds: IPomodoroTimerRoundResponse[] | undefined
}

export function useTimerActions({
	secondsLeft,
	setIsRunning,
	activeRound,
	rounds,
	setActiveRound
}: TypeUseTimerActions) {
	const { workInterval } = useLoadSettings()
	const { updateRound, isUpdatingRound } = useUpdateRound()

	const pauseHandler = () => {
		setIsRunning(false)

		if (!activeRound?.id) return

		updateRound({
			id: activeRound?.id,
			data: {
				totalSeconds: secondsLeft,
				isCompleted: Math.floor(secondsLeft / 60) >= workInterval
			}
		})
	}

	const playHandler = () => {
		setIsRunning(true)
	}

	const nextRoundHandler = () => {
		if (!activeRound?.id) return

		updateRound({
			id: activeRound?.id,
			data: {
				isCompleted: true,
				totalSeconds: workInterval * 60
			}
		})
	}

	const prevRoundHandler = () => {
		// ES2023
		const lastCompletedRound = rounds?.findLast(round => round.isCompleted)

		if (!lastCompletedRound?.id) return

		updateRound({
			id: lastCompletedRound?.id,
			data: {
				isCompleted: false,
				totalSeconds: 0
			}
		})

		setActiveRound(lastCompletedRound)
	}

	return {
		isUpdatingRound,
		pauseHandler,
		playHandler,
		nextRoundHandler,
		prevRoundHandler
	}
}
