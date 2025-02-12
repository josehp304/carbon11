"use client"
import React, { useEffect, useState } from "react";
import { supabase, testConnection } from "@/lib/initsupabase";

export default function Test() {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase.storage.from('products').getPublicUrl('Screenshot (1).png');
            if (data) {
                setImageUrl(data);

            } else if (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="min-h-screen bg-gray-100 text-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold mb-2 text-gray-800">Test Supabase Connection</h1>
                <p className="text-lg text-gray-600">Check the console for connection status.</p>
                {imageUrl && <img src={imageUrl.publicUrl} alt="Test" />}
            </div>
        </main>
    );
}
