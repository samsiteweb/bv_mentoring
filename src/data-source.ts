import { Author } from "./v1/models/author";
import { Book } from "./v1/models/book";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgres://downstream_ia94_user:J96xl6ej519dwtE0OgxBVGVv30pT1xix@dpg-caeb0kb97ejce0be5js0-a.oregon-postgres.render.com/downstream_ia94",

    synchronize: true,
    logging: true,
    entities: [Book, Author],
    subscribers: [],
    ssl: true,
    migrations: [],
})