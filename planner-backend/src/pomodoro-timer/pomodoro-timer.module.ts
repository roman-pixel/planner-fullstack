import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PomodoroTimerService } from './pomodoro-timer.service'
import { PomodoroTimerController } from './pomodoro-timer.controller'

@Module({
	controllers: [PomodoroTimerController],
	providers: [PomodoroTimerService, PrismaService],
	exports: [PomodoroTimerService]
})
export class PomodoroTimerModule {}
