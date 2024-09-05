import { IBase } from './root.type'

export interface IPomodoroTimerRoundResponse extends IBase {
	isCompleted?: boolean
	totalSeconds: number
}

export interface IPomodoroTimerSessionResponse extends IBase {
	isCompleted?: boolean
}

export type TypePomodoroSessionState = Partial<
	Omit<IPomodoroTimerSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypePomodoroRoundState = Partial<
	Omit<IPomodoroTimerRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>
