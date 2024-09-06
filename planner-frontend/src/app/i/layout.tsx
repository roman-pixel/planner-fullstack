import { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/dashboard-layout/header/DashboardLayout'

function layout({ children }: PropsWithChildren<unknown>) {
	return <DashboardLayout>{children}</DashboardLayout>
}

export default layout
