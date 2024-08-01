import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NingasService {

    ninjas = [
        {'id': 1, 'name': 'mice', 'style': 'slow'},
        {'id': 2, 'name': 'abdallah', 'style': 'medium'},
        {'id': 3, 'name': 'shangahay', 'style': 'fast'},
        {'id': 4, 'name': 'tyson', 'style': 'medium'}
    ]

    getNingas(style?: 'fast' | 'slow' | 'medium'){
        if (style){
            return this.ninjas.filter(ninja => ninja.style == style)
        }

        return this.ninjas
    }

    getNinjaById(id:number){
        const ninga = this.ninjas.filter(ninja => ninja.id == id)
        if(ninga.length == 0){
            throw new Error('no ninja found with this id')            
        }
        return ninga
    }

    createNinja(createNinjaDto : CreateNinjaDto){
        const newNinja = {
            ...createNinjaDto,
            'id' : Date.now()
        }
        this.ninjas.push(newNinja)
        return newNinja
    }

    updateNinja(id:number, updateNinjaDto: UpdateNinjaDto){
        this.ninjas = this.ninjas.map((ninja) => {
            if(ninja.id == id){
                return { ...ninja, ...updateNinjaDto}
            }
            return ninja 
        })

        return this.getNinjaById(id)
    }
}
