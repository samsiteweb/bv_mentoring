import { Author } from "../models/author";

class AuthorRepository {
    constructor() {
    }

    public create(author: Author) : Promise<Author> {
        return author.save();
    }
}

export default AuthorRepository;