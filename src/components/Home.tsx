import { Search, MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { vendors } from '../data/vendors';

type HomeProps = {
  onViewVendor: (vendorId: string) => void;
};

export function Home({ onViewVendor }: HomeProps) {
  const featuredVendors = vendors.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 pt-12 pb-8">
        <h1 className="text-3xl mb-2">Fuh Deh Food</h1>
        <p className="text-amber-50 mb-6">Authentic Guyanese Creole Cuisine</p>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search for dishes or vendors..."
            className="w-full pl-11 pr-4 py-3 rounded-lg text-neutral-900 placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 py-8">
        <div className="relative rounded-xl overflow-hidden h-48 mb-6">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Guyanese cuisine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h2 className="text-2xl mb-1">Taste of Guyana</h2>
              <p className="text-sm text-neutral-200">Discover authentic creole flavors from local vendors</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-amber-600">250+</div>
            <div className="text-xs text-neutral-600 mt-1">Vendors</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-amber-600">500+</div>
            <div className="text-xs text-neutral-600 mt-1">Dishes</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-amber-600">10k+</div>
            <div className="text-xs text-neutral-600 mt-1">Orders</div>
          </div>
        </div>

        {/* Featured Vendors */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Featured Vendors</h2>
          <div className="space-y-4">
            {featuredVendors.map(vendor => (
              <button
                key={vendor.id}
                onClick={() => onViewVendor(vendor.id)}
                className="w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 p-4">
                  <ImageWithFallback
                    src={vendor.image}
                    alt={vendor.name}
                    className="size-24 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 text-left">
                    <h3 className="mb-1">{vendor.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="size-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm">{vendor.rating}</span>
                      <span className="text-sm text-neutral-500">({vendor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-neutral-600 mb-2">
                      <MapPin className="size-4" />
                      <span>{vendor.location}</span>
                    </div>
                    <p className="text-sm text-neutral-500 line-clamp-2">{vendor.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Dishes */}
        <div>
          <h2 className="text-xl mb-4">Popular Dishes</h2>
          <div className="grid grid-cols-2 gap-4">
            {vendors.slice(0, 4).flatMap(v => v.menu.slice(0, 1)).map(dish => (
              <div key={dish.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm mb-1">{dish.name}</h3>
                  <p className="text-amber-600">${dish.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
