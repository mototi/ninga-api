import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ninjas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    style: string;

    @Column()
    rank: string;

}
