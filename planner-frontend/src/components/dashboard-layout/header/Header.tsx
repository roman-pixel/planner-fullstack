'use client'

import GlobalLoader from './GlobalLoader'
import Profile from './Profile'

function Header() {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	)
}

export default Header
