import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent,CardDescription,CardHeader, } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Car } from "lucide-react";
import FilterBar from "@/components/ui/filterBar";


  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
  const phots = await res.json();


export default function product() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col md:flex-row justify-between pt-16 w-full h-full">
      <FilterBar />
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
