import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { CurrentJwt } from '../auth/current-jwt.decorator';
import { JwtPayload } from 'jsonwebtoken';
import { TrainingDto } from './dto/TrainingDto';
import { Training } from './training.schema';
import { TrainingService } from './training.service';

@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async login(@Body() trainingDto: TrainingDto) {
    return this.trainingService.create(trainingDto);
  }
}
