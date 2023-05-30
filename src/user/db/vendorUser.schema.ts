import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Schema()
export class VendorUserSchema extends UserSchema {}

export const VendorUserSchemaObject =
  SchemaFactory.createForClass(VendorUserSchema);
