import { useMutation, useQueryClient } from '@tanstack/react-query'

import { timeBlocksService } from '@/services/time-blocks.service'

export function useDeleteTimeBlock(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteTimeBlock, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete-time-block', itemId],
		mutationFn: () => timeBlocksService.deleteTimeBlock(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['time-blocks']
			})
		}
	})

	return { deleteTimeBlock, isDeletePending }
}
