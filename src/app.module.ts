import { Module } from '@nestjs/common';
import { NingasModule } from './ningas/ningas.module';
import { sittings } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MastersModule } from './masters/masters.module';
@Module({
  imports: [
    NingasModule, 
    MastersModule,
    TypeOrmModule.forRoot({
      ... sittings.getTypeOrmConfig()
    })
  ]
})
export class AppModule {}
