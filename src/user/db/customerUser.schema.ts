import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Schema()
export class CustomerUserSchema extends UserSchema {}

export const CustomerUserSchemaObject =
  SchemaFactory.createForClass(CustomerUserSchema);
