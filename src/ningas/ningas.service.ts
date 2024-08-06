import { HttpException, Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { Repository } from 'typeorm';
import { Ninjas } from './entities/ninjas.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NingasService {

    constructor( @InjectRepository(Ninjas) private ninjasRepository: Repository<Ninjas>){}

    getNingas(style?: 'fast' | 'slow' | 'medium'): Promise<Ninjas[]>{
        if (style){
            return this.ninjasRepository.find({
                where: {
                    style : style
                }
            })
        }
        return this.ninjasRepository.find()
    }

    async getNinjaById(id:number) : Promise<Ninjas> {
        const ninja = await this.ninjasRepository.findOne({ where: {id}})
        if(!ninja){
            throw new HttpException('resource not found', 404)
        }
        return ninja
    }

    async createNinja(createNinjaDto : CreateNinjaDto){
        const newNinja = this.ninjasRepository.create(createNinjaDto)
        return this.ninjasRepository.save(newNinja)
    }

    async updateNinja(id:number, updateNinjaDto: UpdateNinjaDto){
        const ninja = await this.getNinjaById(id)

        for (let key in updateNinjaDto){
            ninja[key] = updateNinjaDto[key]
        }

        return this.ninjasRepository.save(ninja)
    }

    async removeNinja(id:number){
        const ninja = await this.getNinjaById(id)
        return this.ninjasRepository.remove(ninja)
    }
}
