import { useState } from 'react';
import { Search, MapPin, Star, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { vendors } from '../data/vendors';

type VendorsProps = {
  onSelectVendor: (vendorId: string) => void;
};

export function Vendors({ onSelectVendor }: VendorsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'restaurant', 'home cook', 'street food'];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || vendor.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 pt-12 pb-6">
        <h1 className="text-2xl mb-4">Discover Vendors</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search vendors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-lg text-neutral-900 placeholder:text-neutral-400"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-white text-amber-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Vendor List */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-neutral-600">
            {filteredVendors.length} vendors found
          </p>
          <button className="flex items-center gap-2 text-sm text-amber-600">
            <Filter className="size-4" />
            Filter
          </button>
        </div>

        <div className="space-y-4">
          {filteredVendors.map(vendor => (
            <button
              key={vendor.id}
              onClick={() => onSelectVendor(vendor.id)}
              className="w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 p-4">
                <ImageWithFallback
                  src={vendor.image}
                  alt={vendor.name}
                  className="size-24 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 text-left">
                  <div className="flex items-start justify-between mb-1">
                    <h3>{vendor.name}</h3>
                    {vendor.featured && (
                      <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm">{vendor.rating}</span>
                    <span className="text-sm text-neutral-500">({vendor.reviews})</span>
                    <span className="text-xs text-neutral-400 ml-2">• {vendor.type}</span>
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

        {filteredVendors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500">No vendors found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
