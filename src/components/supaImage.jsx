"use client"
import React, {useEffect,useState} from 'react'
import {supabase,testConnection} from "@/lib/initsupabase";

export default function SupaImg({bucket,path}){
    let [imgUrl,setImgUrl] = useState('')
    useEffect(()=>{
        
            const fetchImgUrl = async ()=>{
                const {data,error} = await supabase.storage.from(bucket).getPublicUrl(path);
                if(!data){
                    console.log("skibbidy error :",error)
                }else{
                    setImgUrl(data)
                    console.log(imgUrl)

                }
                
                
            }
            fetchImgUrl()
    })
    return(
        <>
        hi
        <img src={imgUrl.publicUrl}></img>
        </>
    )

}

