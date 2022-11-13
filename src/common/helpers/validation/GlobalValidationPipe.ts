import { ValidationPipe } from '@nestjs/common';

export const GlobalValidationPipe = new ValidationPipe({
  transform: true,
  transformOptions: {
    exposeDefaultValues: true,
    excludeExtraneousValues: true,
    enableImplicitConversion: true,
  },
});
