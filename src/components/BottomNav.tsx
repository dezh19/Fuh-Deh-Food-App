import { Home, Store, ShoppingCart, User } from 'lucide-react';

type BottomNavProps = {
  activeTab: 'home' | 'vendors' | 'cart' | 'profile';
  onTabChange: (tab: 'home' | 'vendors' | 'cart' | 'profile') => void;
  cartCount: number;
};

export function BottomNav({ activeTab, onTabChange, cartCount }: BottomNavProps) {
  const navItems = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'vendors' as const, icon: Store, label: 'Vendors' },
    { id: 'cart' as const, icon: ShoppingCart, label: 'Cart', badge: cartCount },
    { id: 'profile' as const, icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 safe-area-bottom">
      <div className="max-w-md mx-auto flex items-center justify-around px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="flex flex-col items-center justify-center py-2 px-4 relative transition-colors"
            >
              <div className="relative">
                <Icon 
                  className={`size-6 transition-colors ${
                    isActive ? 'text-amber-600' : 'text-neutral-500'
                  }`}
                />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full size-5 flex items-center justify-center">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className={`text-xs mt-1 ${
                isActive ? 'text-amber-600' : 'text-neutral-500'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
