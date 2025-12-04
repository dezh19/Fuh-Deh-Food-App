export const vendors = [
  {
    id: '1',
    name: "Aunty Pearl's Kitchen",
    type: 'home cook',
    location: 'Georgetown, Guyana',
    rating: 4.8,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1758874960533-a0925d4f645c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBob21lJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Traditional Guyanese home cooking passed down through generations. Specializing in authentic curry and roti.',
    hours: 'Mon-Sat: 11am-8pm',
    phone: '+592 123 4567',
    featured: true,
    story: "Aunty Pearl has been cooking traditional Guyanese dishes for over 30 years. Her recipes are family treasures, passed down from her grandmother who cooked in the rural villages of Berbice. Every dish tells a story of Guyana's rich cultural heritage.",
    specialty: 'Award-winning Curry Chicken and handmade Roti',
    menu: [
      {
        id: 'm1-1',
        name: 'Curry Chicken with Roti',
        description: 'Tender chicken in aromatic curry sauce, served with fresh handmade roti',
        price: 12.50,
        image: 'https://images.unsplash.com/photo-1729824159986-376b49c6b7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwY3VycnklMjBkaXNofGVufDF8fHx8MTc2NDc4NTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm1-2',
        name: 'Pepperpot',
        description: 'Traditional Amerindian meat stew with cassareep, slow-cooked to perfection',
        price: 15.00,
        image: 'https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm1-3',
        name: 'Cook-up Rice',
        description: 'One-pot rice dish with pigeon peas, coconut milk, and your choice of meat',
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1729824159986-376b49c6b7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwY3VycnklMjBkaXNofGVufDF8fHx8MTc2NDc4NTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm1-4',
        name: 'Fried Plantain',
        description: 'Golden crispy plantain slices, the perfect side dish',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1723437496818-1b5fef565cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudGFpbiUyMGZvb2R8ZW58MXx8fHwxNzY0Nzg1MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  },
  {
    id: '2',
    name: "Demerara Delights",
    type: 'restaurant',
    location: 'New Amsterdam, Guyana',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern take on classic Guyanese dishes in a family-friendly atmosphere.',
    hours: 'Daily: 10am-10pm',
    phone: '+592 234 5678',
    featured: true,
    story: "Founded in 2015, Demerara Delights brings together the best of Guyanese cuisine with a contemporary twist. Our chefs trained in both traditional methods and modern culinary techniques to create unforgettable dining experiences.",
    specialty: 'Fusion Guyanese cuisine with international influences',
    menu: [
      {
        id: 'm2-1',
        name: 'Metemgee',
        description: 'Hearty coconut-based stew with ground provisions, plantains, and salted fish',
        price: 13.50,
        image: 'https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm2-2',
        name: 'Fried Fish & Bake',
        description: 'Crispy fried fish served with fluffy fried bake and tangy sauce',
        price: 11.00,
        image: 'https://images.unsplash.com/photo-1587869776335-bdef48f8114e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGZpc2glMjBwbGF0ZXxlbnwxfHx8fDE3NjQ3ODUwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm2-3',
        name: 'Garlic Pork',
        description: 'Marinated pork in garlic and vinegar, a Christmas favorite available year-round',
        price: 14.00,
        image: 'https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  },
  {
    id: '3',
    name: "Street Food Supreme",
    type: 'street food',
    location: 'Stabroek Market, Georgetown',
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1688954880485-cc9be9d3a185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmb29kJTIwdmVuZG9yfGVufDF8fHx8MTc2NDc0MjgyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Authentic street food experience with quick bites and local favorites.',
    hours: 'Daily: 6am-6pm',
    phone: '+592 345 6789',
    featured: false,
    story: "Operating from the bustling Stabroek Market for over 15 years, Street Food Supreme has become an institution. From early morning commuters to late afternoon shoppers, we serve up quick, delicious, and authentic Guyanese street food.",
    specialty: 'Best Pholourie and Bara in Georgetown',
    menu: [
      {
        id: 'm3-1',
        name: 'Pholourie',
        description: 'Fried split pea fritters served with tangy tamarind sauce',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm3-2',
        name: 'Chicken Foot Souse',
        description: 'Pickled chicken feet with cucumber, hot pepper, and lime',
        price: 6.50,
        image: 'https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm3-3',
        name: 'Bara & Channa',
        description: 'Fried flatbread with spiced chickpea curry',
        price: 4.00,
        image: 'https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  },
  {
    id: '4',
    name: "Coastal Curry House",
    type: 'restaurant',
    location: 'Berbice, Guyana',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1729824159986-376b49c6b7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwY3VycnklMjBkaXNofGVufDF8fHx8MTc2NDc4NTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Seafood specialties and coastal delicacies with authentic Indo-Guyanese flavors.',
    hours: 'Wed-Mon: 11am-9pm',
    phone: '+592 456 7890',
    featured: false,
    story: "Located on the beautiful Berbice coast, our restaurant celebrates the Indo-Guyanese culinary tradition with fresh seafood caught daily. Our recipes honor the Indian heritage that is integral to Guyanese culture.",
    specialty: 'Fresh seafood curry and coastal specialties',
    menu: [
      {
        id: 'm4-1',
        name: 'Shrimp Curry',
        description: 'Fresh coastal shrimp in rich curry sauce with rice',
        price: 16.00,
        image: 'https://images.unsplash.com/photo-1729824159986-376b49c6b7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwY3VycnklMjBkaXNofGVufDF8fHx8MTc2NDc4NTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm4-2',
        name: 'Dhal Puri',
        description: 'Flatbread stuffed with spiced split peas, served with curried potatoes',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm4-3',
        name: 'Bangamary Fish Curry',
        description: 'Local bangamary fish in traditional curry preparation',
        price: 14.50,
        image: 'https://images.unsplash.com/photo-1587869776335-bdef48f8114e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGZpc2glMjBwbGF0ZXxlbnwxfHx8fDE3NjQ3ODUwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  },
  {
    id: '5',
    name: "Granny's Guyanese Goodies",
    type: 'home cook',
    location: 'Linden, Guyana',
    rating: 4.9,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1758874960533-a0925d4f645c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBob21lJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Homemade comfort food and traditional desserts that remind you of home.',
    hours: 'Tue-Sun: 12pm-7pm',
    phone: '+592 567 8901',
    featured: false,
    story: "Granny started cooking for the community 40 years ago from her home kitchen. Now in her 70s, she still oversees every dish, ensuring that each meal carries the love and tradition of true Guyanese home cooking.",
    specialty: 'Traditional desserts and comfort food',
    menu: [
      {
        id: 'm5-1',
        name: 'Black Pudding',
        description: 'Traditional blood sausage with rice and spices',
        price: 7.50,
        image: 'https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm5-2',
        name: 'Cassava Pone',
        description: 'Sweet cassava cake with coconut and spices',
        price: 5.50,
        image: 'https://images.unsplash.com/photo-1640718367222-84f2b61d34f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ3ODUwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'm5-3',
        name: 'Chow Mein',
        description: 'Guyanese-style stir-fried noodles with vegetables and chicken',
        price: 9.00,
        image: 'https://images.unsplash.com/photo-1729824159986-376b49c6b7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwY3VycnklMjBkaXNofGVufDF8fHx8MTc2NDc4NTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  }
];
