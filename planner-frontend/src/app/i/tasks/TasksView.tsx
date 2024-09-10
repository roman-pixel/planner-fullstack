'use client'

import Loader from '@/components/ui/Loader'

import { useLocalStorage } from '@/hooks/useLocalStorage'

import { SwitcherView } from './SwitcherView'
import { KanbanView } from './kanban-view /KanbanView'
import { ListView } from './list-view/ListView'

export type TypeView = 'list' | 'kanban'

function TasksView() {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list'
	})

	if (isLoading) return <Loader />

	return (
		<div>
			<SwitcherView
				type={type}
				setType={setType}
			/>
			{type === 'list' ? <ListView /> : <KanbanView />}
		</div>
	)
}

export default TasksView
