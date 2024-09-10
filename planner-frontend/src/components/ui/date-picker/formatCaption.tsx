import dayjs from 'dayjs'
import { Formatters } from 'react-day-picker'

const seasonEmoji: Record<string, string> = {
	winter: '⛄️',
	spring: '🌸',
	summer: '🌻',
	autumn: '🍁'
}

const getSeason = (motnh: Date): keyof typeof seasonEmoji => {
	const monthNumber = motnh.getMonth() + 1

	if (monthNumber > 2 && monthNumber < 6) return 'spring'
	if (monthNumber > 5 && monthNumber < 9) return 'summer'
	if (monthNumber > 8 && monthNumber < 12) return 'autumn'
	else return 'winter'
}

export const formatCaption = (month: Date) => {
	const season = getSeason(month)
	const emoji = seasonEmoji[season]

	// Возвращаем строку
	return `${emoji} ${dayjs(month).format('MMMM YYYY')}`
}
