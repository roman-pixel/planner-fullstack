import { Loader as LoaderIcon } from 'lucide-react'

interface LoaderProps {
	size?: number
}

const Loader = ({ size = 22 }: LoaderProps) => {
	return (
		<div className='flex items-center justify-center'>
			<LoaderIcon
				size={size}
				className='h-5 w-5 animate-spin text-white'
			/>
		</div>
	)
}

export default Loader
