import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeTimeBlockFormState } from '@/types/time-block.types'

import { timeBlocksService } from '@/services/time-blocks.service'

export function useCreateTimeBlock() {
	const queryClient = useQueryClient()

	const { mutate: createTimeBlock, isPending } = useMutation({
		mutationKey: ['create time-block'],
		mutationFn: (data: TypeTimeBlockFormState) =>
			timeBlocksService.createTimeBlock(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['time-blocks']
			})
		}
	})

	return {
		createTimeBlock,
		isPending
	}
}
