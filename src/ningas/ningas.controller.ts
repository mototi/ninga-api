import { Controller, Get, Post, Put, Param, Query, Body, Delete, NotFoundException, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { NingasService } from './ningas.service';
import { BeltGuard } from 'src/belt.guard';
import { ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetNinjaDto } from './dto/get-ninja.dto';
@ApiTags('ninjas')
@Controller('ningas')
export class NingasController {
    
    constructor(private readonly ningasService:NingasService){}

    @ApiOkResponse({type: GetNinjaDto, isArray: true, description: 'The records have been successfully retrieved.'})
    @ApiQuery({ name: 'style', required: false })
    @Get()
    getNingas(@Query('style') style?:'fast' | 'slow' | 'medium'){
        return this.ningasService.getNingas(style)
    }

    @ApiOkResponse({type: GetNinjaDto, description: 'The record has been successfully retrieved.'})
    @Get(':id')
    getNingasById(@Param('id', ParseIntPipe) id:number){
        try{
            return this.ningasService.getNinjaById(id)
        }catch(e){
            throw new NotFoundException(e.message)
        }
    }

    @ApiCreatedResponse({type: GetNinjaDto, description: 'The record has been successfully created.'})
    @UseGuards(BeltGuard)
    @Post()
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto){
        return this.ningasService.createNinja(createNinjaDto)
    }

    @ApiOkResponse({type: GetNinjaDto, description: 'The record has been updated successfully.'})
    @Put(':id')
    updateNinga(@Param("id", ParseIntPipe) id:number, @Body() updateNingaDto: UpdateUserDto){
        return this.ningasService.updateNinja(id, updateNingaDto)
    }

    @ApiResponse({type: GetNinjaDto, description: 'The record has been deleted successfully.'})
    @Delete(':id')
    deleteNinga(@Param('id', ParseIntPipe) id:number){
        return this.ningasService.removeNinja(id)  
    }
}
