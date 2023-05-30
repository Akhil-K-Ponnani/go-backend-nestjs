import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Schema()
export class AdminUserSchema extends UserSchema {}

export const AdminUserSchemaObject =
  SchemaFactory.createForClass(AdminUserSchema);
