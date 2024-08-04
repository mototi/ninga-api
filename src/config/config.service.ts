import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

require('dotenv').config();


class ConfigService {

    constructor(private env: { [k: string]: string | undefined }) { }
    
    private getValue(key: string): string {
        const value = this.env[key];
        if (!value) {
            throw new Error(`Config error - missing env.${key}`);
        }
        return value;
    }

    //////////// database config ////////////
    POSTGRES_HOST = this.getValue('POSTGRES_HOST');
    POSTGRES_PORT = this.getValue('POSTGRES_PORT');
    POSTGRES_USER = this.getValue('POSTGRES_USER');
    POSTGRES_PASSWORD = this.getValue('POSTGRES_PASSWORD');
    POSTGRES_DATABASE = this.getValue('POSTGRES_DATABASE');
    RUN_MIGRATIONS = this.getValue('RUN_MIGRATIONS');
    SYNCHRONIZE = this.getValue('SYNCHRONIZE') === 'true';

    
    //////////// app config ////////////
    PORT = this.getValue('PORT');
    MODE = this.getValue('MODE');

    public isProduction() {
        const mode = this.getValue('MODE');
        return mode != 'DEV';
    }

    
    public getTypeOrmConfig(): PostgresConnectionOptions {
        return {
        type: 'postgres',

        host: this.POSTGRES_HOST,
        port: parseInt(this.POSTGRES_PORT),
        username: this.POSTGRES_USER,
        password: this.POSTGRES_PASSWORD,
        database: this.POSTGRES_DATABASE,

        entities: [`${__dirname}/../**/*.entity{.ts,.js}`],

        migrationsTableName: 'migrations',

        migrations: [`${__dirname}/../../db/migrations/*{.ts,.js}`],

        synchronize: this.SYNCHRONIZE,
        
        };
    }

    public getAppConfig() {
        return {
            PORT: this.PORT,
            MODE: this.MODE,
        }
    }
}

const sittings = new ConfigService(process.env)

export { sittings };
