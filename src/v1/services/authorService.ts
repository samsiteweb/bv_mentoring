import { createAuthorDTO, updateAuthorDTO } from "../interfaces/author.interface";
import { Author } from "../models/author";
import { Book } from "../models/book";
import BookRepository from "../repositories/book.repository"
import AuthorRepository from "../repositories/author.repository"
import { BaseResponse } from "../interfaces/base.interface"
import { ReasonPhrases, StatusCodes} from "http-status-codes"
export class AuthorService {

    public async updateAuthor(id : number, dto : updateAuthorDTO) {
        let author : Author = await Author.findOneBy({ id });
        if (!author) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "author not found"}
        }

        author.firstName = dto.firstName,
        author.lastName = dto.lastName,
        author.dob = dto.dob,
        author.educations = dto.educations,  
        author.biography = dto.biography,      

        author = await new AuthorRepository().create(author);
        return {status: ReasonPhrases.OK, code: StatusCodes.OK, data: author};

    }

    public async createAuthor(authorDTO : createAuthorDTO) : Promise<BaseResponse> {
        let book = await new BookRepository().getBookByISBN(authorDTO.isbn)
        if (!book && authorDTO.title == null && authorDTO.description == null && authorDTO.publishedDate == null) {
            return {status: ReasonPhrases.BAD_REQUEST, code: StatusCodes.BAD_REQUEST, message: "book not found with isbn, provide an isbn, a title, a description and a published date to create one"}
        }

        if (!book && authorDTO.title != null) {
            let book = Book.create({
                isbn: authorDTO.isbn,
                title: authorDTO.title,
                description: authorDTO.description,
                publishedDate: authorDTO.publishedDate
            });
            console.log(book)

            book = await new BookRepository().create(book);
        }

        let author : Author = Author.create({
            firstName : authorDTO.firstName,
            lastName : authorDTO.lastName,
            biography : authorDTO.biography,
            dob : authorDTO.dob,
            educations : authorDTO.educations,
            books : [book]
        
        });

        let savedAuthor = await new AuthorRepository().create(author)
        return {status: ReasonPhrases.CREATED, code: StatusCodes.CREATED, data: savedAuthor};

    }

    public async getAuthorById(id : number) : Promise<BaseResponse> {
        let author = await Author.findOneBy({ id });

        if(!author) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "Author not found"};
        }

        return {status: ReasonPhrases.OK, code: StatusCodes.OK, data: author};

    }

    public async getAuthorAll() : Promise<BaseResponse> {
        return {status: ReasonPhrases.OK, code: StatusCodes.OK, data: await Author.find()};
    }

    public async deleteAuthor(id: number) {
        let author = await Author.findOneBy({ id });

        if(!author) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "Author not found"};
        }

        await Author.delete({id});
        return {status: ReasonPhrases.OK, code: StatusCodes.OK};
    }
}