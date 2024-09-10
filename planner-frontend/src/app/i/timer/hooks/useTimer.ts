import { useEffect, useState } from 'react'

import { IPomodoroTimerRoundResponse } from '@/types/pomodoro-timer.types'

import { ITimerState } from '../timer.types'

import { useLoadSettings } from './useLoadSettings'

export function useTimer(): ITimerState {
	const { workInterval, breakInterval } = useLoadSettings()

	const [isRunning, setIsRunning] = useState(false)
	const [isBreakTime, setIsBreakTime] = useState(false)

	const [secondsLeft, setSecondsLeft] = useState(workInterval * 60)
	const [activeRound, setActiveRound] = useState<IPomodoroTimerRoundResponse>()

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null

		if (isRunning) {
			interval = setInterval(() => {
				setSecondsLeft(secondsLeft => secondsLeft - 1)
			}, 1000)
		} else if (!isRunning && secondsLeft !== 0 && interval) {
			clearInterval(interval)
		}

		return () => {
			if (interval) clearInterval(interval)
		}
	}, [isRunning, secondsLeft, workInterval, activeRound])

	useEffect(() => {
		// если время не истекло
		if (secondsLeft > 0) return

		// переключение режима и установка нового времени одной операции
		setIsBreakTime(!isBreakTime)
		setSecondsLeft((isBreakTime ? workInterval : breakInterval) * 60)
	}, [secondsLeft, isBreakTime, workInterval, breakInterval])

	return {
		activeRound,
		setActiveRound,
		secondsLeft,
		isRunning,
		setIsRunning,
		setSecondsLeft
	}
}
