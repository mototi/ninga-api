import { IsEnum, MinLength } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3 , {message: 'name must be at least 3 characters'})
    name:string;

    @IsEnum(['fast', 'slow', 'medium'] , {message: 'style must be either fast, slow or medium'})
    style:string;
}
