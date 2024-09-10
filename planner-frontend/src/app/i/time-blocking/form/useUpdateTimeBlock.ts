import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeTimeBlockFormState } from '@/types/time-block.types'

import { timeBlocksService } from '@/services/time-blocks.service'

export function useUpdateTimeBlock(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTimeBlock } = useMutation({
		mutationKey: ['update time-block', key],
		mutationFn: ({ id, data }: { id: string; data: TypeTimeBlockFormState }) =>
			timeBlocksService.updateTimeBlock(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['time-blocks']
			})
		}
	})

	return { updateTimeBlock }
}
