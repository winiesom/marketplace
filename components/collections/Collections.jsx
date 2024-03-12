import CollectionCard from '../custom/CollectionCard';
import { collections } from '@/constants/collections/Collections';

const Collections = () => {
  
  return (
    <div>
      <div className="collections-title mb-8">Collections</div>

      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
      {collections.map((collection, index) => (
        <CollectionCard key={index} collection={collection} />
      ))}
      </div>
    </div>
  )
}

export default Collections
