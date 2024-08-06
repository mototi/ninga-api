import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, MinLength } from "class-validator";

export class GetNinjaDto {
    @ApiProperty()
    id:number;

    @ApiProperty()
    @MinLength(3 , {message: 'name must be at least 3 characters'})
    name:string;

    @ApiProperty()
    @IsEnum(['fast', 'slow', 'medium'] , {message: 'style must be either fast, slow or medium'})
    style:string;

    @ApiProperty()
    rank:string;
}
