import {
	IPomodoroTimerSessionResponse,
	TypePomodoroTimerRoundFormState,
	TypePomodoroTimerSessionFormState
} from '@/types/pomodoro-timer.types'

import { axiosWithAuth } from '@/api/interceptors'

class PomodoroTimerService {
	private BASE_URL = '/user/timer'

	async getTodaySession() {
		const response = await axiosWithAuth.get<IPomodoroTimerSessionResponse>(
			`${this.BASE_URL}/today`
		)
		return response
	}

	async createSession() {
		const response = await axiosWithAuth.post<IPomodoroTimerSessionResponse>(
			this.BASE_URL
		)
		return response
	}

	async updatgeRound(id: string, data: TypePomodoroTimerRoundFormState) {
		const response = await axiosWithAuth.put(
			`${this.BASE_URL}/round/${id}`,
			data
		)
		return response
	}

	async updatgeSession(id: string, data: TypePomodoroTimerSessionFormState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteSession(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const pomodoroTimerService = new PomodoroTimerService()
