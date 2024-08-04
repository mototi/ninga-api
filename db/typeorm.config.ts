import { DataSource } from "typeorm";
require('dotenv').config();



const dataSource = new DataSource({
    type: 'postgres',

    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,

    entities: [`${__dirname}/../src/**/*.entity{.ts,.js}`],

    migrationsTableName: 'migrations',

    migrations: [`${__dirname}/migrations/*{.ts,.js}`],

    synchronize: process.env.SYNCHRONIZE === 'true'
});

console.log("Entities loaded: ", dataSource.options.entities);

export default dataSource;