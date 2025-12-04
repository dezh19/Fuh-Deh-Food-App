import { User, MapPin, Heart, Clock, Settings, LogOut, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Profile() {
  const menuItems = [
    { icon: Clock, label: 'Order History', badge: '12' },
    { icon: Heart, label: 'Favorite Vendors', badge: '8' },
    { icon: MapPin, label: 'Delivery Addresses', badge: '2' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 pt-12 pb-8">
        <h1 className="text-2xl mb-6">Profile</h1>
        
        {/* User Info */}
        <div className="flex items-center gap-4">
          <Avatar className="size-20 border-4 border-white/30">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl mb-1">John Doe</h2>
            <p className="text-amber-50 text-sm">johndoe@email.com</p>
            <p className="text-amber-50 text-sm">+592 123 4567</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="grid grid-cols-3 divide-x divide-neutral-200">
            <div className="text-center px-2">
              <div className="text-amber-600 mb-1">24</div>
              <div className="text-xs text-neutral-600">Orders</div>
            </div>
            <div className="text-center px-2">
              <div className="text-amber-600 mb-1">8</div>
              <div className="text-xs text-neutral-600">Favorites</div>
            </div>
            <div className="text-center px-2">
              <div className="text-amber-600 mb-1">$342</div>
              <div className="text-xs text-neutral-600">Spent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors ${
                  index !== menuItems.length - 1 ? 'border-b border-neutral-100' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="size-5 text-neutral-600" />
                  <span className="text-neutral-900">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="size-5 text-neutral-400" />
                </div>
              </button>
            );
          })}
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h3 className="mb-3">About Fuh Deh Food</h3>
          <p className="text-sm text-neutral-600 mb-3">
            Celebrating authentic Guyanese creole cuisine by connecting local vendors with food lovers across Guyana and beyond.
          </p>
          <p className="text-xs text-neutral-500">Version 1.0.0</p>
        </div>

        {/* Logout Button */}
        <button className="w-full bg-white rounded-xl shadow-sm p-4 flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 transition-colors">
          <LogOut className="size-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
