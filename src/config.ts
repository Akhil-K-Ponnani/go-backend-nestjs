import { IsNotEmpty, validateSync } from 'class-validator';
import { Expose, plainToClass } from 'class-transformer';
import { registerAs } from '@nestjs/config';
import { Config } from './common/constants/config';

export class Environment {
  @IsNotEmpty()
  @Expose({ name: 'PORT' })
  Port: string;

  @IsNotEmpty()
  @Expose({ name: 'MONGODB_URI' })
  MongoDbUri: string;

  @IsNotEmpty()
  @Expose({ name: 'MONGODB_NAME' })
  MongoDbName: string;
}

export const registerConfig = registerAs(Config, (): Environment => {
  const envClass = plainToClass(Environment, process.env, {
    excludeExtraneousValues: true,
    exposeDefaultValues: true,
    exposeUnsetFields: true,
    enableImplicitConversion: true,
  });

  const errors = validateSync(envClass);

  if (errors.length > 0) throw new Error(errors.toString());

  return envClass;
});
