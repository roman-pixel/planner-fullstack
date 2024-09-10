import { Dispatch, SetStateAction } from 'react'

import { IPomodoroTimerRoundResponse } from '@/types/pomodoro-timer.types'

export interface ITimerState {
	secondsLeft: number
	activeRound: IPomodoroTimerRoundResponse | undefined
	isRunning: boolean

	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	setActiveRound: Dispatch<
		SetStateAction<IPomodoroTimerRoundResponse | undefined>
	>
}
