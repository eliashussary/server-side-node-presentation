import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;

  @Column({
    default: false
  })
  isComplete: boolean;
}
