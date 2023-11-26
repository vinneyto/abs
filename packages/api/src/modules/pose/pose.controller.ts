import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { PoseService } from './pose.service';
import { CreatePoseDto } from './dto/CreatePoseDto';

@Controller('pose')
export class PoseController {
  constructor(private readonly poseService: PoseService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async login(@Body() poseDto: CreatePoseDto) {
    return this.poseService.create(poseDto);
  }
}
