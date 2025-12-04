import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import type { CartItem } from '../App';

type CartProps = {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onClearCart: () => void;
};

export function Cart({ items, onUpdateQuantity, onClearCart }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 5.00 : 0;
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <ShoppingCart className="size-20 text-neutral-300 mb-4" />
        <h2 className="text-xl mb-2">Your cart is empty</h2>
        <p className="text-neutral-500 text-center">
          Browse our vendors and add some delicious Guyanese dishes to your cart!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 pt-12 pb-6">
        <h1 className="text-2xl mb-1">Your Cart</h1>
        <p className="text-amber-50">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
      </div>

      {/* Cart Items */}
      <div className="px-6 py-6">
        <div className="space-y-4 mb-6">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-4 mb-3">
                <ImageWithFallback
                  src={item.image}
                  alt={item.dishName}
                  className="size-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="mb-1">{item.dishName}</h3>
                  <p className="text-sm text-neutral-500 mb-2">{item.vendorName}</p>
                  <p className="text-amber-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => onUpdateQuantity(item.id, 0)}
                  className="text-neutral-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="size-5" />
                </button>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 bg-neutral-100 rounded-lg p-1">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-white rounded transition-colors"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-white rounded transition-colors"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h3 className="mb-4">Order Summary</h3>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-neutral-700">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-neutral-700">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="border-t border-neutral-200 pt-3">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="text-amber-600">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full bg-amber-500 hover:bg-amber-600 h-12"
            size="lg"
          >
            Proceed to Checkout
          </Button>
          <Button
            variant="outline"
            className="w-full h-12"
            onClick={onClearCart}
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
