import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent,CardDescription,CardHeader, } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Car } from "lucide-react";
import FilterBar from "@/components/ui/filterBar";




  const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.ACCESS_KEY}&count=10&query=fashion&orientation=portrait`,{
    cache:'no-store',
                                                              
  });
  const phots = await res.json();
  



export default function product() {
  console.log(process.env.ACCESS_KEY)
  console.log(phots);
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col md:flex-row justify-between pt-16 w-full h-full">
      <FilterBar />
        <div className="w-full min-h-full p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {phots.map((post) => (
               <Card key ={post.id}>
                <CardHeader>
                  <h1>{post.alt_description}</h1>
                </CardHeader>
                <CardContent>
                  <img src={post.urls.raw} ></img>
                </CardContent>
              </Card> 
            ))} 
          </div>
        </div>
      </div>
    </main>
  )
}
