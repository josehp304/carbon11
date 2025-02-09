"use client"
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from "@/components/ui/accordion";
import {Checkbox} from "@/components/ui/checkbox";
import React ,{useEffect,useState}from "react"
import { Filter } from "lucide-react";


export default function FilterBar() {
    let [isOpen,setIsOpen] = useState(false);
    

    if(isOpen){
    return (
        <div className="w-full md:w-2/6 p-1">

        <p onClick = {()=>setIsOpen(false)}>
        &lt; back
        </p>
            <Accordion collapsible>
            <AccordionItem value="item1">
                <AccordionTrigger>Color</AccordionTrigger>
                <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <lable htmlFor="item1">Blue</lable></div></div></AccordionContent>
                <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <lable htmlFor="item1">White</lable></div></div></AccordionContent>
                <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <lable htmlFor="item1">Black</lable></div></div></AccordionContent>
                <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <lable htmlFor="item1">Red</lable></div></div></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item2">
                <AccordionTrigger>Fit</AccordionTrigger>
                <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <lable htmlFor="item1">Slim</lable></div></div></AccordionContent>
                <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <lable htmlFor="item1">Relaxed</lable></div></div></AccordionContent>
                <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <lable htmlFor="item1">Baggy</lable></div></div></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item3">
                <AccordionItem>
                    <AccordionTrigger>Gender</AccordionTrigger>
                    <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <lable htmlFor>Male</lable></div></div></AccordionContent>
                    <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <lable htmlFor>Female</lable></div></div></AccordionContent>
                </AccordionItem>
            </AccordionItem>
            </Accordion>
            
            </div>
          )
        }else{
            return(
                <div className="">
                    <div className="fixed right-10 bottom-10">
                    <Filter onClick={()=>setIsOpen(true)}  size={40} />
                    </div>
                </div>
            )
        }
}