import { Controller, Get, Post, Put, Param, Query, Body } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Controller('ningas')
export class NingasController {

    @Get()
    getNingas(@Query('style') style:string){
        return [
            { 
                style 
            }
        ];
    }

    @Get(':id')
    getNingasById(@Param('id') id:string){
        return {
            id
        };
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){
        return{
            'body' : createNinjaDto
        }
    }

    @Put(':id')
    updateNinga(@Param("id") id:string, @Body() updateNingaDto: UpdateUserDto){
        return[
            {
                id,
                "emp":updateNingaDto
            }
        ]
    }
}
