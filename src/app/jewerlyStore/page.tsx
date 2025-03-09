'use client'

import { ShowTable } from "@/components/store/table";
import { Buyer } from "@/shared/entities/Buyer";
import { Category } from "@/shared/entities/Category";
import { Material } from "@/shared/entities/Material";
import { Product } from "@/shared/entities/Product";
import { Size } from "@/shared/entities/Size";
// import { Item } from "@/shared/entities/item";

// globalThis._item = Item;

Object.assign(globalThis, {Category, Material, Size, Buyer, Product})
export default function Page(){
    return <>
        <div>
         <h1>Store</h1>
         <ShowTable itemClass={Category}/>
         <ShowTable itemClass={Material}/>
         <ShowTable itemClass={Size}/>
         <ShowTable itemClass={Buyer}/>
         <ShowTable itemClass={Product}/>




        </div>
    </>
}