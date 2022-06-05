import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, MinKey} from "typeorm"

import { Author } from "./author";

@Entity("book")
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    title: string;

    @Column()
    isbn: string;

    @Column()
    description: string;

    @Column({name: "published_date"})
    publishedDate: string;

    @Column({default : 0, type: "numeric", nullable :true})
    amount: number;

    @ManyToMany(() => Author, (author) =>author.books, {eager:true, cascade : ['insert', 'update']})
    @JoinTable({
        name: "book_author", 
        joinColumn: { name : "book", referencedColumnName : "id"},
        inverseJoinColumn: { name : "author", referencedColumnName : "id"}
    })
    authors?: Author[]

    @Column({default:0, type: "numeric", nullable:true})
    rating? : number;

    @CreateDateColumn({name: "created_at", precision: null, type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at", precision: null, type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Date;
}