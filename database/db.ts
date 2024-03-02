import "reflect-metadata"
import 'dotenv/config'
import { DataSource } from "typeorm"
import { Roles1 } from "./migrations/1-roles"
import { Users2 } from "./migrations/2-users"
import { Role } from "../back/models/Role"
import { User } from "../back/models/User"
import { Services3 } from "./migrations/3-services"
import { Appointments4 } from "./migrations/4-appointments"
import { Service } from "../back/models/Service"
import { Appointment } from "../back/models/Appointment"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_ROOT_PASSWORD || "",
    database: process.env.DB_Database || "",
    entities: [Role, User, Service, Appointment],
    migrations: [Roles1, Users2, Services3, Appointments4],
    synchronize: false,
    logging: false,
})