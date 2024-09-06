'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { authService } from '@/services/auth.service'

function LogoutButton() {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	return (
		<div className='absolute right-1 top-1'>
			<button
				className='opacity-20 transition-opacity duration-300 hover:opacity-100'
				onClick={() => mutate()}
			>
				<LogOut size={20} />
			</button>
		</div>
	)
}

export default LogoutButton
