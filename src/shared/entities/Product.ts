import { Entity, Fields, Relations } from "remult";
import { Category } from "./Category";
import { Material } from "./Material";
import { Size } from "./Size";


@Entity<Product>('product', {
    allowApiCrud: true,
    defaultOrderBy: { name: "asc" },

})

export class Product {
    @Fields.autoIncrement()
    id =0

    @Fields.string()
    name!: string

    @Fields.string()
    descroption!: string

    @Relations.toOne(()=> Category, {field: "categoryId"})
    category?: Category

    @Fields.integer()
    price!: number

    @Relations.toOne(()=> Material, {field: "materialId"})
    material?: Material

    @Relations.toOne(()=>Size, {field: "sizeId"})
    size?: Size





}