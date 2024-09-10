'use client'

import { Pause, Play, RefreshCcw } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import Loader from '@/components/ui/Loader'

import { formatTime } from './format-time'
import { useCreateSession } from './hooks/useCreateSession'
import { useDeleteSession } from './hooks/useDeleteSession'
import { useTimer } from './hooks/useTimer'
import { useTimerActions } from './hooks/useTimerActions'
import { useTodaySession } from './hooks/useTodaySession'
import { PomodoroTimerRounds } from './rounds/PomodoroTimerRounds'

export function Pomodoro() {
	const timeState = useTimer()
	const { isLoading, sessionResponse, workInterval } =
		useTodaySession(timeState)

	const rounds = sessionResponse?.data.rounds
	const actions = useTimerActions({ ...timeState, rounds })

	const { mutate, isPending } = useCreateSession()
	const { deletingSession, isDeletingSession } = useDeleteSession(() =>
		timeState.setSecondsLeft(workInterval * 60)
	)

	return (
		<div className='relative w-80 text-center'>
			{!isLoading && (
				<div className='text-7xl font-semibold'>
					{formatTime(timeState.secondsLeft)}
				</div>
			)}
			{isLoading ? (
				<Loader />
			) : sessionResponse?.data ? (
				<>
					<PomodoroTimerRounds
						rounds={rounds}
						nextRoundHandler={actions.nextRoundHandler}
						prevRoundHandler={actions.prevRoundHandler}
						activeRound={timeState.activeRound}
					/>
					<button
						className='mt-6 opacity-80 transition-opacity hover:opacity-100'
						onClick={
							timeState.isRunning ? actions.pauseHandler : actions.playHandler
						}
						disabled={actions.isUpdatingRound}
					>
						{timeState.isRunning ? <Pause size={30} /> : <Play size={30} />}
					</button>
					<button
						className='absolute right-0 top-0 opacity-40 transition-opacity hover:opacity-90'
						onClick={() => {
							timeState.setIsRunning(false)
							deletingSession(sessionResponse.data.id)
						}}
						disabled={isDeletingSession}
					>
						<RefreshCcw size={19} />
					</button>
				</>
			) : (
				<Button
					onClick={() => mutate()}
					className='mt-1'
					disabled={isPending}
				>
					Create session
				</Button>
			)}
		</div>
	)
}
