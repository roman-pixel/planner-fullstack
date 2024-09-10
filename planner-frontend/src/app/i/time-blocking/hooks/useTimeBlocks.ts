import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { ITimeBlockResponse } from '@/types/time-block.types'

import { timeBlocksService } from '@/services/time-blocks.service'

export function useTimeBlocks() {
	const { data, isLoading } = useQuery({
		queryKey: ['time-blocks'],
		queryFn: () => timeBlocksService.getTimeBlocks()
	})

	const [items, setItems] = useState<ITimeBlockResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems, isLoading }
}
