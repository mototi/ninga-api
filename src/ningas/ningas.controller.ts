import { Controller, Get, Post, Put, Param, Query, Body, Delete, NotFoundException, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { NingasService } from './ningas.service';
import { BeltGuard } from 'src/belt.guard';

@Controller('ningas')
export class NingasController {
    
    constructor(private readonly ningasService:NingasService){}

    @Get()
    getNingas(@Query('style') style:'fast' | 'slow' | 'medium'){
        return this.ningasService.getNingas(style)
    }

    @Get(':id')
    getNingasById(@Param('id', ParseIntPipe) id:number){
        try{
            return this.ningasService.getNinjaById(id)
        }catch(e){
            throw new NotFoundException(e.message)
        }
    }

    @UseGuards(BeltGuard)
    @Post()
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto){
        return this.ningasService.createNinja(createNinjaDto)
    }

    @Put(':id')
    updateNinga(@Param("id", ParseIntPipe) id:number, @Body() updateNingaDto: UpdateUserDto){
        return this.ningasService.updateNinja(id, updateNingaDto)
    }

    @Delete(':id')
    deleteNinga(@Param('id', ParseIntPipe) id:number){
        return this.ningasService.removeNinja(id)  
    }
}
