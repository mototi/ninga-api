import { Controller, Get, Post, Put, Param, Query, Body } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { NingasService } from './ningas.service';

@Controller('ningas')
export class NingasController {

    constructor(private readonly ningasService:NingasService){}

    @Get()
    getNingas(@Query('style') style:'fast' | 'slow' | 'medium'){
        return this.ningasService.getNingas(style)
    }

    @Get(':id')
    getNingasById(@Param('id') id:string){
        return this.ningasService.getNinjaById(Number(id))
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){
        return this.ningasService.createNinja(createNinjaDto)
    }

    @Put(':id')
    updateNinga(@Param("id") id:string, @Body() updateNingaDto: UpdateUserDto){
        return this.ningasService.updateNinja(Number(id), updateNingaDto)
    }
}
