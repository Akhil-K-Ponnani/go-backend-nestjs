import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [UserRepository],
})
export class UserModule {}
