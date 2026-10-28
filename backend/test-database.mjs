import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
export function database() {
    const sqlite = new DatabaseSync(':memory:');
    sqlite.exec(readFileSync(new URL('./schema.sql', import.meta.url),'utf8'));
    sqlite.exec(readFileSync(new URL('./analytics.sql', import.meta.url),'utf8'));
    return {
        sqlite,
        async batch(statements) {
            sqlite.exec('BEGIN');
            try {
                const result=statements.map(s=>({results:sqlite.prepare(s.sql).all(...(s.values||[]))}));
                sqlite.exec('COMMIT');return result;
            } catch(error) {sqlite.exec('ROLLBACK');throw error;}
        },
        prepare(sql) {
            return {
                sql, values:[],
                bind(...values) {
                    const statement = sqlite.prepare(sql);
                    return {
                        sql,values,
                        async first() { return statement.get(...values) || null; },
                        async all() { return { results:statement.all(...values) }; },
                        async run() { return { meta:{changes:Number(statement.run(...values).changes)} }; }
                    };
                },
                async all() { return {results:sqlite.prepare(sql).all()}; },
                async first() { return sqlite.prepare(sql).get() || null; },
                async run() {return {meta:{changes:Number(sqlite.prepare(sql).run().changes)}};}
            };
        }
    };
}
