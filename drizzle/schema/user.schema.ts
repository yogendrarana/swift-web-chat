import { boolean, mysqlEnum, mysqlTable, int, text, varchar, timestamp } from 'drizzle-orm/mysql-core';

// declaring enum in database
export const userSchema = mysqlTable(
    'user',

    {
        id: int('id').autoincrement().primaryKey(),
        name: varchar('name', { length: 50 }).notNull(),
        email: varchar('email', { length: 256 }).notNull().unique(),
        isVerified: boolean('is_verified'),
        password: varchar('password', { length: 50 }).notNull(),
        role: mysqlEnum('role', ['admin', 'user']).notNull().default('user'),
        image: text('image'),

        createdAt: timestamp('created_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
    }
);