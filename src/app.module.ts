import { Module } from '@nestjs/common';
import { NingasModule } from './ningas/ningas.module';
import { UsersModule } from './users/users.module';
import { sittings } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    NingasModule, 
    UsersModule,
    TypeOrmModule.forRoot({
      ... sittings.getTypeOrmConfig()
    })
  ],
})
export class AppModule {}
