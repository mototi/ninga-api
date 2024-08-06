import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";

export class CreateMasterDto {
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
