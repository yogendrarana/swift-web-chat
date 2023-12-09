import type { Config } from 'drizzle-kit';

export default {
    schema: "./src/db/drizzle/schema",
    out: "./src/db/drizzle/migrations",
    driver: "mysql2",
    dbCredentials: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "nextjschatapp",
    }
} satisfies Config;