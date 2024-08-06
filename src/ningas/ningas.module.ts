import { Module } from '@nestjs/common';
import { NingasController } from './ningas.controller';
import { NingasService } from './ningas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ninjas } from './entities/ninjas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ninjas])],
  controllers: [NingasController],
  providers: [NingasService]
})
export class NingasModule {}
