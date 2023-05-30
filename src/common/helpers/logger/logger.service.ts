import { Injectable, ConsoleLogger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  setContext(context = ''): void {
    super.setContext(context);
  }

  log(message: string, context?: string): void {
    if (context) super.log(message, context);
    else super.log(message);
  }

  error(message: string, context?: string): void {
    if (context) super.error(message, context);
    else super.error(message);
  }

  warn(message: string, context?: string): void {
    if (context) super.warn(message, context);
    else super.warn(message);
  }

  debug(message: string, context?: string): void {
    if (context) super.debug(message, context);
    else super.debug(message);
  }
}
