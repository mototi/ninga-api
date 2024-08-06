import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMasterDto } from './create-master.dto';
import { MinLength } from 'class-validator';

export class UpdateMasterDto extends PartialType(CreateMasterDto) {
    @ApiProperty()
    @MinLength(3 , {message: 'name must be at least 3 characters'})
    name:string;

    @ApiProperty()
    style:string;

    @ApiProperty()
    rank: string;

    @ApiProperty()
    weapon: string;
}
