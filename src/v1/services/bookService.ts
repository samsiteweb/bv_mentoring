import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { BaseResponse } from "../interfaces/base.interface";
import { createBookDTO, updateBookDTO } from "../interfaces/book.interface";
import { Author } from "../models/author";
import { Book } from "../models/book";
import BookRepository from "../repositories/book.repository";

export class BookService {

    public async createBook(createBookDTO : createBookDTO) {
        let book : Book = await new BookRepository().getBookByISBN(createBookDTO.isbn)
        if (book) {
            return {status: ReasonPhrases.BAD_REQUEST, code: StatusCodes.BAD_REQUEST, message: "book with isbn already exists"}
        }

        if (!createBookDTO.authorIds || !createBookDTO.authorIds.length) {
            return {status: ReasonPhrases.BAD_REQUEST, code: StatusCodes.BAD_REQUEST, message: "book without an author is not acceptable, kindly create an author"}
        }

        let authorIds : number[] = createBookDTO.authorIds;
        let authors : Author[] = []

        for (let authorId of authorIds) {
            let author : Author = await Author.findOneBy({id: authorId})
            if(!author) {
                return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "author not found with id: ", authorId}
            }

            authors.push(author);
        }
       

        let newBook = Book.create({
            isbn: createBookDTO.isbn,
            title: createBookDTO.title,
            description: createBookDTO.description,
            publishedDate: createBookDTO.publishedDate,
            amount: createBookDTO.amount  && createBookDTO.amount > 0 ? createBookDTO.amount : 0,
            authors: authors
        });

        newBook = await new BookRepository().create(newBook);
        return {status: ReasonPhrases.CREATED, code: StatusCodes.CREATED, data: newBook};

    }

    public async getBookById(id: number) {
        let book = await Book.findOneBy({ id });

        if(!book) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "Book not found"};
        }

        return {status: ReasonPhrases.OK, code: StatusCodes.OK, data: book};
    }

    public async getAllBook() {
        return {status: ReasonPhrases.OK, code: StatusCodes.OK, data: await Book.find()};
    }


    public async getBookByAuthorId(id: number) {
        let author = await Author.findOneBy({ id });

        if(!author) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "Author not found"};
        }

        let books : Book[] = (await Book.find()).filter(book => book.authors.filter(a => a.id == id).length > 0);

        return {status: ReasonPhrases.OK, code: StatusCodes.OK, data: books};
    }

    public async updateBook(id: number, updateBookDTO : updateBookDTO)  {
        let book : Book = await Book.findOneBy({ id });
        if (!book) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "book not found"}
        }

        book.title = updateBookDTO.title,
        book.description = updateBookDTO.description,
        book.publishedDate = updateBookDTO.publishedDate,
        book.amount = updateBookDTO.amount && updateBookDTO.amount > 0 ? updateBookDTO.amount : book.amount,        

        book = await new BookRepository().create(book);
        return {status: ReasonPhrases.OK, code: StatusCodes.OK, data: book};
    }

    public async addAuthorToBook(id: number, authorId : number)  {
        let book : Book = await Book.findOneBy({ id });
        if (!book) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "book not found"}
        }

        let author : Author = await Author.findOneBy({id: authorId})
        if(!author) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "author not found with id: ", authorId}
        }

        book.authors.push(author);

        book = await new BookRepository().create(book);
        return {status: ReasonPhrases.OK, code: StatusCodes.OK, data: book};

    }

    public async removeAuthorToBook(id: number, authorId : number)  {
        let book : Book = await Book.findOneBy({ id });
        if (!book) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "book not found"}
        }

        let author : Author = await Author.findOneBy({id: authorId})
        if(!author) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "author not found with id: ", authorId}
        }

        if(!book.authors || !book.authors.length) {
            return {status: ReasonPhrases.BAD_REQUEST, code: StatusCodes.BAD_REQUEST, message: "book has no author"}
        }

        let authors : Author[] = book.authors.filter(a => a.id != authorId);
        if (authors.length == book.authors.length) {
            return {status: ReasonPhrases.BAD_REQUEST, code: StatusCodes.BAD_REQUEST, message: "author found is not an author of the book found"}
        }

        book.authors = authors;
        book = await new BookRepository().create(book);
        return {status: ReasonPhrases.OK, code: StatusCodes.OK, data: book};

    }

    public async deleteBook(id: number) : Promise<BaseResponse> {
        let book = await Book.findOneBy({ id });

        if(!book) {
            return {status: ReasonPhrases.NOT_FOUND, code: StatusCodes.NOT_FOUND, message: "Book not found"};
        }

        await Book.delete({id});
        return {status: ReasonPhrases.OK, code: StatusCodes.OK};

    }
}