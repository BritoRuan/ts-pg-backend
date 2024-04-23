
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

export const development = {
    client: 'mysql',
    connection: {
        user: 'root',
        password: '',
        host: 'localhost',
        port: 3306,
        database: 'customer'
    }
};
