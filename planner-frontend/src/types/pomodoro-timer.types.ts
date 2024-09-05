import { IBase } from './root.type'

export interface IPomodoroTimerRoundResponse extends IBase {
	isCompleted?: boolean
	totalSeconds: number
}

export interface IPomodoroTimerSessionResponse extends IBase {
	isCompleted?: boolean
}

export type TypePomodoroTimerSessionState = Partial<
	Omit<IPomodoroTimerSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypePomodoroTimerRoundState = Partial<
	Omit<IPomodoroTimerRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>
