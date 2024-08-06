import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Masters } from '../../masters/entities/master.entity';

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

    @Column({ name: 'master_id' })
    masterId: number;

    @ManyToOne(() => Masters, (master) => master.ninjas)
    @JoinColumn({ name: 'master_id' })
    master: Masters;

}
