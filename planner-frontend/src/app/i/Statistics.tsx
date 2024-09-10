'use client'

import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'

function Statistics() {
	const { data, isLoading } = useProfile()

	if (isLoading) return <Loader />

	return (
		<div className='mt-7 grid grid-cols-4 gap-2 sm:gap-5 md:gap-12'>
			{data?.statistics.length ? (
				data.statistics.map((statistics, index) => (
					<div
						key={index}
						className='rounded bg-border/5 p-layout text-center transition-transform duration-500 hover:-translate-y-3'
					>
						<div className='text-xl'>{statistics.label}</div>
						<div className='text-3xl'>{statistics.value}</div>
					</div>
				))
			) : (
				<div>Not found</div>
			)}
		</div>
	)
}

export default Statistics
