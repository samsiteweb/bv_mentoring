import { Author } from "./v1/models/author";
import { Book } from "./v1/models/book";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "",

    synchronize: true,
    logging: true,
    entities: [Book, Author],
    subscribers: [],
    ssl: true,
    migrations: [],
})