import "reflect-metadata";
import { DataSource } from "typeorm";
import { BookEntity } from "./shared/entity";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "fanny.db.elephantsql.com",
    username: "rczepoiw",
    password: "cNd5ipPa6DjDHIoqEsoyRxAnxwgm5I5H",
    database: "rczepoiw",
    entities: [BookEntity],
    logging: false,
    synchronize: true
})