"use client";

import { Suspense } from 'react';
import { collections } from '@/constants/collections/Collections';
import { useSearchParams } from 'next/navigation';
import CollectionPage from '@/components/collections/CollectionPage';

const Page = () => {
  const search = useSearchParams();


  // retrieve id from query parameter
  const itemId = search.get('id');

  // Find the collection with a matching id
  const selectedCollection = collections.find(collection => collection.id == itemId);
 
  return (
    <Suspense>
      <div>
      <CollectionPage selectedCollection={selectedCollection} />
      </div>
    </Suspense>
  )

}

export default Page
