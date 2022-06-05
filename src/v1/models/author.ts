import { Exclude, instanceToPlain } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToMany,} from "typeorm"
import { Book } from "./book";

@Entity("author")
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({nullable:true})
    biography?: string;

    @Column({nullable:true})
    dob?: string;

    @Column({type: "simple-array", default:[]})
    educations?: string[];

    @ManyToMany(() => Book, (book) => book.authors, {cascade : ['insert', 'update']})
    books: Book[];

    @CreateDateColumn({name: "created_at", precision: null, type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at", precision: null, type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Date;


}