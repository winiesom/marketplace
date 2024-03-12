import "./globals.css"

import Hero from '@/components/hero/Hero';
import Collections from '@/components/collections/Collections';

export default function Home({data}) {

  return (
    <main className="main-container">
      <Hero />
      <div className="collections-container">
        <Collections />
      </div>
    </main>
  );
};
