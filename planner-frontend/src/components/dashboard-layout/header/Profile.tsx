import { Loader } from 'lucide-react'

import { useProfile } from '@/hooks/useProfile'

function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div className='absolute right-big-layout top-big-layout'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-center'>
					<div className='mr-3 text-right'>
						<p className='-mb-1 font-bold'>{data?.user.name}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>

					<div className='flex h-10 w-10 items-center justify-center rounded bg-white/20 text-2xl uppercase text-white'>
						{data?.user.name?.charAt(0) || 'A'}
					</div>
				</div>
			)}
		</div>
	)
}

export default Profile
