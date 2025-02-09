import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent,CardDescription,CardHeader, } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Car } from "lucide-react";


  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
  const phots = await res.json();


export default function product() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col lg:flex-row justify-between pt-16 w-full h-full">
        <div className="w-full lg:w-1/6 p-1">
          <Accordion collapsible>
            <AccordionItem value="item1">
              <AccordionTrigger>Color</AccordionTrigger>
              <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <label htmlFor="item1">Blue</label></div></div></AccordionContent>
              <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <label htmlFor="item1">White</label></div></div></AccordionContent>
              <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <label htmlFor="item1">Black</label></div></div></AccordionContent>
              <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <label htmlFor="item1">Red</label></div></div></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item2">
              <AccordionTrigger>Fit</AccordionTrigger>
              <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <label htmlFor="item1">Slim</label></div></div></AccordionContent>
              <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <label htmlFor="item1">Relaxed</label></div></div></AccordionContent>
              <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <label htmlFor="item1">Baggy</label></div></div></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item3">
              <AccordionTrigger>Gender</AccordionTrigger>
              <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <label htmlFor="item1">Men</label></div></div></AccordionContent>
              <AccordionContent><div className="flex gap-2"><Checkbox id="item1" /> <div> <label htmlFor="item1">Women</label></div></div></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="grow min-h-full p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {phots.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  {post.title}
                </CardHeader>
                <CardContent>
                  <img src={post.url} alt={post.title}></img>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
