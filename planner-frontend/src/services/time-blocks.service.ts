import {
	ITimeBlockResponse,
	TypeTimeBlockFormState
} from '@/types/time-block.types'

import { axiosWithAuth } from '@/api/interceptors'

class TimeBlocksService {
	private BASE_URL = '/user/time-blocks'

	async getTimeBlocks() {
		const response = await axiosWithAuth.get<ITimeBlockResponse[]>(
			this.BASE_URL
		)
		return response
	}

	async createTimeBlock(data: TypeTimeBlockFormState) {
		const response = await axiosWithAuth.post<ITimeBlockResponse>(
			this.BASE_URL,
			data
		)
		return response
	}

	async updatgeOrderTimeBlock(ids: string[]) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/update-order`, {
			ids
		})
		return response
	}

	async updatgeTimeBlock(id: string, data: TypeTimeBlockFormState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTimeBlock(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const timeBlocksService = new TimeBlocksService()
