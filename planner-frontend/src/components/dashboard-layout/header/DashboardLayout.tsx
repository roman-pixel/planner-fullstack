import { PropsWithChildren } from 'react'

import Sidebar from '../sidebar/Sidebar'

import Header from './Header'

function DashboardLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='grid min-h-screen grid-cols-[1.2fr_6fr] 2xl:grid-cols-[1.1fr_6fr]'>
			<Sidebar />

			<main className='relative max-h-screen overflow-x-hidden p-big-layout'>
				<Header />
				{children}
			</main>
		</div>
	)
}

export default DashboardLayout
