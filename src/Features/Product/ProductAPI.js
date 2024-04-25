// import { TotalItems } from "./ProductSlice";

export async function FetchProduct(sort,Pagination){
    let querystring ="";
    for(let key in sort){
        querystring+=`${key}=${sort[key]}&`
    }
    for(let key in Pagination){
        querystring+=`${key}=${Pagination[key]}&`
    }
    return new Promise(async (resolve)=>{
        const response= await fetch(`http://localhost:8080/product/products`+querystring)
        
    const data= await response.json();
    resolve({data:{products:data.products,totalitems:+data.totalproductscount}})
    })
}