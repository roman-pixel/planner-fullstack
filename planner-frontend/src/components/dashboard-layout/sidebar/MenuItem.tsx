import Link from 'next/link'

import { IMenu } from './menu.interface'

function MenuItem({ item }: { item: IMenu }) {
	return (
		<div>
			<Link
				href={item.link}
				className='mt-2 flex items-center gap-2.5 rounded-lg px-layout py-1.5 transition-colors hover:bg-border'
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}

export default MenuItem
