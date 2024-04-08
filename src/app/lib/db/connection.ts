import mysql, { PoolOptions } from 'mysql2/promise';

const access: PoolOptions = {
    user: 'root',
    password: '123456',
    host: 'localhost',
    port: 3306,
    database: 'test'
}

const conn = mysql.createPool(access)

export default  conn;