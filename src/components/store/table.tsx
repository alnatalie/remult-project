'use client';
import { useEffect, useState } from "react";
import css from './table.module.css'
import { repo } from "remult";

export function ShowTable({itemClass}){

    
    
    const 
        [data, setData] = useState(null),
        [error, setError] = useState(null),
        fields = Object.getOwnPropertyNames(data?.[0] || {});
        useEffect(()=>{
            repo(itemClass).find().then(setData);
        })

    console.debug('ShowTable', { itemClass, fields});

    return <table className={css.table}>
        <caption>{itemClass.name}</caption>
        <thead>
            <tr>
                {fields.map(field=> <th key={field}>
                    {field}
                </th>)}
            </tr>
        </thead>
        {data && 
            <tbody>
                {data.map(obj=> <tr key={obj.id}>
                    {fields.map(field=><td key={field}>
                        {obj[field]}
                    </td>)}
                </tr>)}
            </tbody>

        }
    </table> 
}