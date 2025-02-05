import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
export default function product() {
  return (
    <main className="min-h-screen w-full ">
      <div className="flex justify-between pt-16 w-full h-screen ">
        <div className=" w-1/6 p-1 ">
        <Accordion collapsible>
          <AccordionItem value="item1">
            <AccordionTrigger>Color</AccordionTrigger>
            <AccordionContent><div className = "flex gap-2"><Checkbox id ="item1"/> <div> <lable htmlFor="item1">Blue</lable></div></div></AccordionContent>
            <AccordionContent><div className = "flex gap-2"><Checkbox id ="item1"/> <div> <lable htmlFor="item1">White</lable></div></div></AccordionContent>
            <AccordionContent><div className = "flex gap-2"><Checkbox id ="item1"/> <div> <lable htmlFor="item1">Black</lable></div></div></AccordionContent>
            <AccordionContent><div className = "flex gap-2"><Checkbox id ="item1"/> <div> <lable htmlFor="item1">Red</lable></div></div></AccordionContent>
          </AccordionItem>
          <AccordionItem value ="item2">
            <AccordionTrigger>Fit</AccordionTrigger>
            <AccordionContent><div className = "flex gap-2"><Checkbox id ="item1"/> <div> <lable htmlFor="item1">Slim</lable></div></div></AccordionContent>
            <AccordionContent><div className = "flex gap-2"><Checkbox id ="item1"/> <div> <lable htmlFor="item1">Relaxed</lable></div></div></AccordionContent>
            <AccordionContent><div className = "flex gap-2"><Checkbox id ="item1"/> <div> <lable htmlFor="item1">Baggy</lable></div></div></AccordionContent>

          </AccordionItem>
          <AccordionItem value ="item3">
            <AccordionTrigger>Gender</AccordionTrigger>
            <AccordionContent><div className = "flex gap-2"><Checkbox id ="item1"/> <div> <lable htmlFor="item1">Men</lable></div></div></AccordionContent>
            <AccordionContent><div className = "flex gap-2"><Checkbox id ="item1"/> <div> <lable htmlFor="item1">Women</lable></div></div></AccordionContent>

          </AccordionItem>
        </Accordion>
        </div>
      </div>
    </main>
  );
}
