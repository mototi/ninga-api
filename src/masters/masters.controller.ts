import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { MastersService } from './masters.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';

@Controller('masters')
export class MastersController {
  constructor(private readonly mastersService: MastersService) {}

  @Post()
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.mastersService.createMaster(createMasterDto);
  }

  @Get()
  findAll() {
    return this.mastersService.getMasters();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id:number) {
    return this.mastersService.getMasterById(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id:number, @Body() updateMasterDto: UpdateMasterDto) {
    return this.mastersService.update(id, updateMasterDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id:number) {
    return this.mastersService.remove(id);
  }
}
