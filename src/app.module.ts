import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { registerConfig } from './config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [registerConfig] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
