import { ArrowLeft, MapPin, Star, Clock, Phone, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { vendors } from '../data/vendors';
import { Button } from './ui/button';
import { useState } from 'react';
import type { CartItem } from '../App';

type VendorDetailProps = {
  vendorId: string;
  onBack: () => void;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
};

export function VendorDetail({ vendorId, onBack, onAddToCart }: VendorDetailProps) {
  const vendor = vendors.find(v => v.id === vendorId);
  const [selectedTab, setSelectedTab] = useState<'menu' | 'about'>('menu');

  if (!vendor) return null;

  const handleAddToCart = (dish: typeof vendor.menu[0]) => {
    onAddToCart({
      id: dish.id,
      vendorId: vendor.id,
      vendorName: vendor.name,
      dishName: dish.name,
      price: dish.price,
      image: dish.image,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative h-64">
        <ImageWithFallback
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full"
        >
          <ArrowLeft className="size-6 text-neutral-900" />
        </button>

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
          <Heart className="size-6 text-neutral-900" />
        </button>
      </div>

      {/* Vendor Info */}
      <div className="px-6 py-6">
        <h1 className="text-2xl mb-2">{vendor.name}</h1>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="size-5 fill-amber-400 text-amber-400" />
            <span>{vendor.rating}</span>
            <span className="text-neutral-500">({vendor.reviews} reviews)</span>
          </div>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-600">{vendor.type}</span>
        </div>

        <div className="flex items-start gap-2 mb-3">
          <MapPin className="size-5 text-neutral-500 mt-0.5" />
          <span className="text-neutral-700">{vendor.location}</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Clock className="size-5 text-neutral-500" />
          <span className="text-neutral-700">{vendor.hours}</span>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Phone className="size-5 text-neutral-500" />
          <span className="text-neutral-700">{vendor.phone}</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-neutral-200 mb-6">
          <button
            onClick={() => setSelectedTab('menu')}
            className={`pb-3 border-b-2 transition-colors ${
              selectedTab === 'menu'
                ? 'border-amber-500 text-amber-600'
                : 'border-transparent text-neutral-500'
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => setSelectedTab('about')}
            className={`pb-3 border-b-2 transition-colors ${
              selectedTab === 'about'
                ? 'border-amber-500 text-amber-600'
                : 'border-transparent text-neutral-500'
            }`}
          >
            About
          </button>
        </div>

        {/* Content */}
        {selectedTab === 'menu' ? (
          <div className="space-y-6">
            {vendor.menu.map(dish => (
              <div key={dish.id} className="flex gap-4 pb-6 border-b border-neutral-100 last:border-0">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="size-24 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="mb-1">{dish.name}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600">${dish.price.toFixed(2)}</span>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(dish)}
                      className="bg-amber-500 hover:bg-amber-600"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3 className="mb-3">About {vendor.name}</h3>
            <p className="text-neutral-700 mb-6">{vendor.description}</p>
            
            <h3 className="mb-3">Our Story</h3>
            <p className="text-neutral-700 mb-4">{vendor.story}</p>
            
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
              <h4 className="mb-2">Specialty</h4>
              <p className="text-sm text-neutral-700">{vendor.specialty}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
