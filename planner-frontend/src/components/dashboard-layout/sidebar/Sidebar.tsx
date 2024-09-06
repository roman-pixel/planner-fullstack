'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import LogoutButton from './LogoutButton'
import MenuItem from './MenuItem'
import { MENU } from './menu.data'

function Sidebar() {
	return (
		<aside className='flex h-full flex-col justify-between border-r border-r-border bg-sidebar'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 border-b border-b-border p-layout'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className='relative text-2xl font-bold'>
						Planner
						<span className='absolute -right-6 -top-1 rotate-[18deg] text-xs font-normal opacity-40'>
							beta
						</span>
					</span>
				</Link>
				<div className='relative p-3'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							key={item.link}
							item={item}
						/>
					))}
				</div>
			</div>
			<footer className='p-layout text-center text-xs font-normal opacity-40'>
				2024 &copy; by{' '}
				<a
					href='https://github.com/roman-pixel'
					target='_blank'
					rel='noreferrer'
					className='text-brand-300 transition-colors hover:text-primary'
				>
					roman-pixel
				</a>
				<br />
				All rights reserved.
			</footer>
		</aside>
	)
}

export default Sidebar
