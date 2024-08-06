import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ninjas } from "../../ningas/entities/ninjas.entity";


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

    @OneToMany(() => Ninjas, (ninja) => ninja.master)
    ninjas: Ninjas[];
}
