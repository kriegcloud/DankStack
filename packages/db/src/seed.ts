import {drizzle} from "drizzle-orm/node-postgres";
import pg from 'pg'
import {post} from "./schema/post";
import {faker} from "@faker-js/faker";
import * as dotenv from "dotenv";
const { Pool } = pg;
dotenv.config({path: "../../.env"});

if (!("DATABASE_URL" in process.env))
    throw new Error("DATABASE_URL not found on .env.development");

const main = async () => {

    const client = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    const db = drizzle(client);
    const data: (typeof post.$inferInsert)[] = [];

    for (let i = 0; i < 20; i++) {

        const title = faker.lorem.words(3);

        const content = faker.lorem.sentence(3);

        data.push({title, content});
    }


    console.log("Seed start");
    await db.insert(post).values(data);
    console.log("Seed done");

    process.exit();
};

main().catch((e) => {
    console.error("Error seeding database.");
    console.error(e);
    process.exit();
})