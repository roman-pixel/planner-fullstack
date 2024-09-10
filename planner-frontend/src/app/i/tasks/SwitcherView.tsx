'use client'

import cn from 'clsx'
import { Kanban, ListTodo } from 'lucide-react'

import { TypeView } from './TasksView'

interface ISwitcherView {
	type: TypeView
	setType: (value: TypeView) => void
}

export function SwitcherView({ type, setType }: ISwitcherView) {
	return (
		<div className='mb-5 flex items-center gap-4'>
			<button
				className={cn('flex items-center gap-1', {
					'opacity-40': type === 'kanban'
				})}
				onClick={() => setType('list')}
			>
				<ListTodo />
				List
			</button>
			<button
				className={cn('flex items-center gap-1', {
					'opacity-40': type === 'list'
				})}
				onClick={() => setType('kanban')}
			>
				<Kanban />
				Board
			</button>
		</div>
	)
}
