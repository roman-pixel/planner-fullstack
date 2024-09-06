import { useIsFetching, useIsMutating } from '@tanstack/react-query'

import Loader from '@/components/ui/Loader'

function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMutating ? (
		<div className='fixed right-layout top-layout z-50'>
			<Loader />
		</div>
	) : null
}

export default GlobalLoader
