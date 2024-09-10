import type { IBase } from './root.types'

export interface IPomodoroTimerRoundResponse extends IBase {
	isCompleted?: boolean
	totalSeconds: number
}

export interface IPomodoroTimerSessionResponse extends IBase {
	isCompleted?: boolean
	rounds?: IPomodoroTimerRoundResponse[]
}

export type TypePomodoroTimerSessionFormState = Partial<
	Omit<IPomodoroTimerSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypePomodoroTimerRoundFormState = Partial<
	Omit<IPomodoroTimerRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>
