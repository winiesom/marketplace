"use client";

import { collections } from '@/constants/collections/Collections';
import { useSearchParams } from 'next/navigation';
import CollectionPage from '@/components/collections/CollectionPage';

const Page = () => {
  const search = useSearchParams();

  // retrieve id from query parameter
  const itemId = search.get('id');

  // Find the collection with a matching id
  const selectedCollection = collections.find(collection => collection.id == itemId);
  console.log(selectedCollection, 'selectuyyyy')
 
  return (
    <div>
      <CollectionPage selectedCollection={selectedCollection} />
    </div>
  )

}

export default Page
