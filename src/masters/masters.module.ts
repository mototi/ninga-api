import { Module } from '@nestjs/common';
import { MastersService } from './masters.service';
import { MastersController } from './masters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Masters } from './entities/master.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Masters]) ],
  controllers: [MastersController],
  providers: [MastersService]
})
export class MastersModule {}
