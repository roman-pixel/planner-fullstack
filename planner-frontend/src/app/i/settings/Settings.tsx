'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Field } from '@/components/ui/Field'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'

function Settings() {
	const { mutate, isPending } = useUpdateSettings()

	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData(reset)

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: password || undefined
		})
	}

	return (
		<div>
			<form
				className='w-2/4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							id='email'
							label='Email'
							placeholder='Enter email'
							type='email'
							extra='mb-4'
							{...register('email', {
								required: 'Email is required!'
							})}
						/>
						<Field
							id='email'
							label='Name'
							placeholder='Enter name'
							extra='mb-4'
							{...register('name')}
						/>
						<Field
							id='password'
							label='Password'
							placeholder='Enter password'
							type='password'
							{...register('password')}
							extra='mb-10'
						/>
					</div>
					<div>
						<Field
							id='workInterval'
							label='Work interval (min)'
							placeholder='Enter work interval (min)'
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
						<Field
							id='breakInterval'
							label='Break interval (min)'
							placeholder='Enter break interval (min)'
							{...register('breakInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
						<Field
							id='intervalsCount'
							label='Intervals count (max 10)'
							placeholder='Enter intervals count (max 10)'
							{...register('intervalsCount', {
								valueAsNumber: true
							})}
							extra='mb-6'
						/>
					</div>
				</div>

				<Button
					type='submit'
					disabled={isPending}
				>
					Save
				</Button>
			</form>
		</div>
	)
}

export default Settings
