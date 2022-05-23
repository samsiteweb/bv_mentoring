import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BookI } from '../interfaces/book.interface'

@Entity()

   export default  class BookEntity extends BaseEntity implements BookI {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    author: string;

    @Column()
    isbn: number;

    @Column()
    description: string;

}