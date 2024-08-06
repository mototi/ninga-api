import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Masters {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    style: string;

    @Column()
    rank: string;

    @Column()
    weapon: string;
}
