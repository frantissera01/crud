import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name : "products" })
export class Product {
    @PrimaryGeneratedColumn({ type: "int"})
    id:number;
    @Column({type : "varchar"})
    name:string;
    @Column({type : "int"})
    cost:number;
    @Column({default:true})
    instock:boolean;

}
