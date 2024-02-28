import {drizzle} from "drizzle-orm/node-postgres";
import pg from "pg";
import * as auth from "./schema/auth";
import * as post from "./schema/post";
const { Pool } = pg;
export const schema = {...auth, ...post};
export {pgTable as tableCreator} from "./schema/_table";


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export * from "drizzle-orm";

export const db = drizzle(pool, { schema });
