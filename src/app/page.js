"use client";
import { useState, useEffect } from "react";
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious } from "@/components/ui/carousel";
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "../components/ui/card";
import Autoplay from "embla-carousel-autoplay"
export default function Home() {
  return (<>
    <main className={'w-full h-full'}>
      <section className={'w-full h-screen relative'}>
        {/* Background Image Container */}
        <div className={'absolute inset-0'}>
          <div className={'relative w-full h-full'}>
            <img 
              src="/home/hero.jpg"
              alt="Hero Background"
              className={'w-full h-full object-cover hidden md:block'}
            />
            <img 
              src="/home/hero2.jpg"
              alt="Hero Background"
              className={'w-full h-full object-cover md:hidden '}
            />
            {/* Optional overlay for better text visibility */}
            <div className={'absolute inset-0 bg-black/30'}></div>
          </div>
        </div>
        
        {/* Content Container */}
        <div className={'relative h-full max-w-7xl mx-auto pt-[4rem] px-4 sm:px-6 lg:px-8'}>
          {/* Add your hero content here */}
          <div className={'flex flex-col justify-center h-full text-white'}>
            <h1 className={'text-4xl md:text-6xl font-bold mb-4'}>
              Welcome to Our Store
            </h1>
            <p className={'text-xl md:text-2xl mb-8'}>
              Discover amazing products at great prices
            </p>
            <button className={'bg-white text-black px-8 py-3 rounded-md w-fit hover:bg-gray-100 transition-colors'}>
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-full p-5 ">
        <div className="max-w-7xl h-full mx-auto pt-5  ">
          <div className="h-10">
            <h1 className="flex items-center justify-center text-2xl pb-">Our Collection</h1>
          </div>
          <div className=" flex justify-center">
          <Carousel className="w-11/12 " plugins={[Autoplay({delay: 2000,}),]} opts={{loop:true}} >
            <CarouselContent className="">
            <CarouselItem className="md:basis-1/2"><Card>
              {/* <CardTitle> bag</CardTitle> */}
              <CardContent className="p-0">
                <img src="https://zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_460x.jpg?v=1727074641%20460w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_540x.jpg?v=1727074641%20540w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_720x.jpg?v=1727074641%20720w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_900x.jpg?v=1727074641%20900w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_1080x.jpg?v=1727074641%201080w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_1296x.jpg?v=1727074641%201296w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_1512x.jpg?v=1727074641%201512w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_1728x.jpg?v=1727074641%201728w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_2048x.jpg?v=1727074641%202048w"
                className="w-full h-full object-cover"
                />
                </CardContent></Card></CarouselItem>
                <CarouselItem className="md:basis-1/2"><Card>
              {/* <CardTitle> bag</CardTitle> */}
              <CardContent className="p-0">
                <img src="//zanerobe.com.au/cdn/shop/files/ZANEROBE-Flintlock-Tee-Forest-0_460x.jpg?v=1723684986 460w, //zanerobe.com.au/cdn/shop/files/ZANEROBE-Flintlock-Tee-Forest-0_540x.jpg?v=1723684986 540w, //zanerobe.com.au/cdn/shop/files/ZANEROBE-Flintlock-Tee-Forest-0_720x.jpg?v=1723684986 720w, //zanerobe.com.au/cdn/shop/files/ZANEROBE-Flintlock-Tee-Forest-0_900x.jpg?v=1723684986 900w, //zanerobe.com.au/cdn/shop/files/ZANEROBE-Flintlock-Tee-Forest-0_1080x.jpg?v=1723684986 1080w, //zanerobe.com.au/cdn/shop/files/ZANEROBE-Flintlock-Tee-Forest-0_1296x.jpg?v=1723684986 1296w, //zanerobe.com.au/cdn/shop/files/ZANEROBE-Flintlock-Tee-Forest-0_1512x.jpg?v=1723684986 1512w, //zanerobe.com.au/cdn/shop/files/ZANEROBE-Flintlock-Tee-Forest-0_1728x.jpg?v=1723684986 1728w, //zanerobe.com.au/cdn/shop/files/ZANEROBE-Flintlock-Tee-Forest-0_2048x.jpg?v=1723684986 2048w"
                className="w-full h-full object-cover"
                />
                </CardContent></Card></CarouselItem>
 <CarouselItem className="md:basis-1/2"><Card>
              {/* <CardTitle> bag</CardTitle> */}
              <CardContent className="p-0">
                <img src="https://zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_460x.jpg?v=1727074641%20460w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_540x.jpg?v=1727074641%20540w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_720x.jpg?v=1727074641%20720w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_900x.jpg?v=1727074641%20900w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_1080x.jpg?v=1727074641%201080w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_1296x.jpg?v=1727074641%201296w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_1512x.jpg?v=1727074641%201512w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_1728x.jpg?v=1727074641%201728w,%20//zanerobe.com.au/cdn/shop/files/ZANEROBE-ZR-Football-Pant-Black-01_cd38cbdf-cdc0-40df-8c44-4a5cf6208a28_2048x.jpg?v=1727074641%202048w"
                className="w-full h-full object-cover"
                />
                </CardContent></Card></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className ="hidden md:flex" />
            <CarouselNext className = "hidden md:flex"/>
            
          </Carousel>
          </div>
        </div>

      </section>

      <section>
        <footer className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                We are a premium fashion brand dedicated to bringing you the latest trends with exceptional quality and style.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 Fashion Brand. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  </>);
}