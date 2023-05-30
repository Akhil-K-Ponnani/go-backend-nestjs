import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Environment, registerConfig } from './config';
import { LoggerModule } from './common/helpers/logger/logger.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Config } from './common/constants/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [registerConfig] }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<Environment>(Config).MongoDbUri,
        dbName: config.get<Environment>(Config).MongoDbName,
        retryWrites: true,
        w: 'majority',
      }),
    }),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
