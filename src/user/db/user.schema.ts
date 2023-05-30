import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserStatus } from 'src/common/models';

@Schema({ timestamps: true })
export class UserSchema {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  displayImage: string;

  @Prop({ required: true, enum: UserStatus })
  status: string;

  @Prop()
  createdAt: number;

  @Prop()
  updatedAt: number;

  @Prop()
  deletedAt: number;
}

export const UserSchemaObject = SchemaFactory.createForClass(UserSchema);
