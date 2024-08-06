import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMasterDto } from './create-master.dto';
import { MinLength } from 'class-validator';
import { GetNinjaDto } from 'src/ningas/dto/get-ninja.dto';

export class getMasterDto extends PartialType(CreateMasterDto) {

    @ApiProperty()
    id: number;

    @ApiProperty()
    @MinLength(3 , {message: 'name must be at least 3 characters'})
    name:string;

    @ApiProperty()
    style:string;

    @ApiProperty()
    rank: string;

    @ApiProperty()
    weapon: string;

    ninjas : [GetNinjaDto];
}
