import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { TrainingModule } from './modules/training/training.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL as string),
    AuthModule,
    UserModule,
    TrainingModule,
  ],
})
export class AppModule {}
