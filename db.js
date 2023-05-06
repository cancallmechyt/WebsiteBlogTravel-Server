import mysql from "mysql"
import dotenv from 'dotenv'
dotenv.config()

export const db = mysql.createConnection(process.env.DATABASE_URL)

/* export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    database:"webtravel"
}) */