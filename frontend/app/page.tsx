'use client';
import Navbar from '../components/ui/navbar';
import Footer from '../components/ui/Footer';
import { Button } from "@/components/ui/button"
import Link from 'next/dist/client/link';
import FeaturedProducts from '@/components/ui/featured-products';


export default function Page() {
  return (
    <div>
      <Navbar />

      <main className="min-h-100 flex items-center">
        <div className="flex-1">
          <img src="/kitchen.jpg" className="w-full h-full object-cover" alt="kitchen" />
        </div>
        <div className="flex-1 p-12 text-6xl font-bold">
          Benvingut a M&S Cuines
          <p className="text-xl font-normal mt-4">Dissenyem i fabriquem cuines a mida.</p>
          <Link href="/products">
            <Button className="mt-8 bg-stone-400 text-white hover:bg-stone-600">Les nostres novetats</Button>
          </Link>
          
          <FeaturedProducts />
        </div>
      </main>

      <Footer />
    </div>
  );
}

