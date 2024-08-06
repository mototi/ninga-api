import { HttpException, Injectable } from '@nestjs/common';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { Masters } from './entities/master.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MastersService {

  constructor( @InjectRepository(Masters) private ninjasRepository: Repository<Masters>){}

  async createMaster(createMasterDto: CreateMasterDto) : Promise<Masters> {
    return await this.ninjasRepository.save(createMasterDto);
  }

  async getMasters() : Promise<Masters[]> {
    return await this.ninjasRepository.find({relations: ['ninjas']});
  }

  async getMasterById(id: number) : Promise<Masters> {
    const master = await this.ninjasRepository.findOne({ 
      where: {id},
      relations: ['ninjas']
    })
    if(!master){
        throw new HttpException('resource not found', 404)
    }
    return master
  }

  async update(id: number, updateMasterDto: UpdateMasterDto) : Promise<Masters> {
    const master = await this.getMasterById(id)
    for (let key in updateMasterDto){
        master[key] = updateMasterDto[key]
    }
    return this.ninjasRepository.save(master)
  }

  async remove(id: number) : Promise<Masters> {
    const master = await this.getMasterById(id)
    return this.ninjasRepository.remove(master);
  }
}
