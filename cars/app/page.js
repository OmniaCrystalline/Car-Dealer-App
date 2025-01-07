/** @format */

import CarForm from "./components/CarForm";
import { Suspense } from "react";

export default function Home() {
  let makers = fetch(process.env.URL).then((res) => res.json()).catch(e=>res.json(e.message))

  return (
    <main className='p-10'>
      <h1 className="text-xl text-blue-900 mb-2">Car Dealer App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CarForm makers={makers} />
      </Suspense>
    </main>
  );
}
