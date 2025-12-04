import { useState } from 'react';
import { Home } from './components/Home';
import { Vendors } from './components/Vendors';
import { VendorDetail } from './components/VendorDetail';
import { Cart } from './components/Cart';
import { Profile } from './components/Profile';
import { BottomNav } from './components/BottomNav';

export type CartItem = {
  id: string;
  vendorId: string;
  vendorName: string;
  dishName: string;
  price: number;
  quantity: number;
  image: string;
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'vendors' | 'cart' | 'profile'>('home');
  const [selectedVendorId, setSelectedVendorId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(i => i.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(i => i.id === id ? { ...i, quantity } : i)
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {selectedVendorId ? (
        <VendorDetail
          vendorId={selectedVendorId}
          onBack={() => setSelectedVendorId(null)}
          onAddToCart={handleAddToCart}
        />
      ) : (
        <>
          {activeTab === 'home' && (
            <Home onViewVendor={setSelectedVendorId} />
          )}
          {activeTab === 'vendors' && (
            <Vendors onSelectVendor={setSelectedVendorId} />
          )}
          {activeTab === 'cart' && (
            <Cart
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onClearCart={handleClearCart}
            />
          )}
          {activeTab === 'profile' && <Profile />}
        </>
      )}
      
      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        cartCount={cartCount}
      />
    </div>
  );
}
