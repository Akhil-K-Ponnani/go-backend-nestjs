import { Injectable } from '@nestjs/common';
import { LoggerService } from './common/helpers/logger/logger.service';

@Injectable()
export class AppService {
  constructor(private readonly logger: LoggerService) {
    this.logger.setContext(AppService.name);
  }

  getHello(): string {
    this.logger.log('Hello World!');
    return 'Hello World!';
  }
}
