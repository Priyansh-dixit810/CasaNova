const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.1911]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Desert Oasis",
    description: "Experience the tranquility of the desert in this unique adobe-style home. Stargaze at night and enjoy the serene landscape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590153751190-4c9695a4f8e8"
    },
    price: 900,
    location: "Sedona",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-111.7633, 34.8697]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Parisian Apartment",
    description: "Charming apartment in the heart of Paris. Walk to cafes, museums, and the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    },
    price: 1800,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Tokyo Capsule Stay",
    description: "Compact and efficient capsule stay in the bustling Shinjuku area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    price: 500,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Barcelona Rooftop Loft",
    description: "Sunny loft with rooftop views of Barcelona’s Gothic Quarter.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    },
    price: 1300,
    location: "Barcelona",
    country: "Spain",
    geometry: {
      type: "Point",
      coordinates: [2.1734, 41.3851]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Amsterdam Canal House",
    description: "Historic canal house with charming interiors and water views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600596543165-0c1ae6aa5a4e"
    },
    price: 1600,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Sydney Harbour View",
    description: "Watch the sunrise over the harbour from this stylish apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496616392163-822bfaef0dbf"
    },
    price: 1700,
    location: "Sydney",
    country: "Australia",
    geometry: {
      type: "Point",
      coordinates: [151.2093, -33.8688]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Santorini White Villa",
    description: "Iconic white-washed villa with views over the Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    price: 2000,
    location: "Santorini",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.4615, 36.3932]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Reykjavik Cabin",
    description: "Northern lights and rustic living in this cozy Icelandic cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1606702874214-d1d1e2cd03e3"
    },
    price: 1100,
    location: "Reykjavik",
    country: "Iceland",
    geometry: {
      type: "Point",
      coordinates: [-21.8277, 64.1265]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Cape Town Hilltop Villa",
    description: "Panoramic views of Table Mountain and the Atlantic Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551907234-ef5ff9f09982"
    },
    price: 1500,
    location: "Cape Town",
    country: "South Africa",
    geometry: {
      type: "Point",
      coordinates: [18.4241, -33.9249]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Rio Beach House",
    description: "Walk to Copacabana and enjoy Brazilian hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534367610401-6f1dfb43f437"
    },
    price: 1400,
    location: "Rio de Janeiro",
    country: "Brazil",
    geometry: {
      type: "Point",
      coordinates: [-43.1729, -22.9068]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Toronto City Condo",
    description: "Modern and sleek high-rise condo in downtown Toronto.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    },
    price: 1300,
    location: "Toronto",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-79.3832, 43.6532]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Dubai Marina Suite",
    description: "Luxurious suite overlooking the glamorous Dubai Marina.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    price: 2500,
    location: "Dubai",
    country: "UAE",
    geometry: {
      type: "Point",
      coordinates: [55.1419, 25.0772]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Venice Canal Flat",
    description: "Float your way through Venice and stay in this cozy canal-side flat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549647316-3bbf996e5c36"
    },
    price: 1350,
    location: "Venice",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Bangkok Riverside Apartment",
    description: "Experience vibrant street food and markets by day, and quiet riverside views by night.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1553484771-20803b6d9c62"
    },
    price: 850,
    location: "Bangkok",
    country: "Thailand",
    geometry: {
      type: "Point",
      coordinates: [100.5018, 13.7563]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "London Studio Flat",
    description: "Cozy studio with access to parks, the tube, and iconic British pubs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593412558690-cb4d7b8a6cfd"
    },
    price: 1600,
    location: "London",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-0.1276, 51.5072]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Seoul City Retreat",
    description: "Modern comforts and K-culture all around in this high-rise apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126"
    },
    price: 1400,
    location: "Seoul",
    country: "South Korea",
    geometry: {
      type: "Point",
      coordinates: [126.978, 37.5665]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Himalayan Hill Home",
    description: "Stay in the lap of the Himalayas and enjoy cool air and mountain tea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602524205983-6e755ef51d12"
    },
    price: 700,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2432]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Petra Desert Camp",
    description: "Camp under the stars near the ancient city of Petra in this Bedouin-style retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544984243-ec57ea16c266"
    },
    price: 800,
    location: "Petra",
    country: "Jordan",
    geometry: {
      type: "Point",
      coordinates: [35.4444, 30.3285]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Swiss Alps Chalet",
    description: "A luxury wooden chalet tucked in the snowy mountains, ideal for skiing and hot chocolate.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad"
    },
    price: 1800,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Santorini Cliff House",
    description: "Wake up to ocean views and white-washed architecture on the cliffs of Santorini.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509474520651-683111b19f39"
    },
    price: 1600,
    location: "Santorini",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.4333, 36.3932]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Dubai Marina Suite",
    description: "Experience luxury high-rise living in this modern suite overlooking Dubai Marina.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
    },
    price: 2200,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.1372, 25.0806]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "New Zealand Lakehouse",
    description: "Find peace at this lakefront home with mountain views and nearby hiking trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499696010180-025ef6e1f9e0"
    },
    price: 1500,
    location: "Queenstown",
    country: "New Zealand",
    geometry: {
      type: "Point",
      coordinates: [168.6615, -45.0312]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Reykjavik Studio Apartment",
    description: "Explore Iceland's capital from this modern and cozy downtown apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593529467220-9fd441b155fa"
    },
    price: 1200,
    location: "Reykjavik",
    country: "Iceland",
    geometry: {
      type: "Point",
      coordinates: [-21.9426, 64.1466]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Buenos Aires Balcony Flat",
    description: "Dance the tango and soak in the city’s vibe from your charming balcony flat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664"
    },
    price: 1000,
    location: "Buenos Aires",
    country: "Argentina",
    geometry: {
      type: "Point",
      coordinates: [-58.3816, -34.6037]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Lisbon Alfama Loft",
    description: "Traditional meets trendy in this charming loft in Lisbon’s oldest neighborhood.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590490350325-777e71b2d0aa"
    },
    price: 950,
    location: "Lisbon",
    country: "Portugal",
    geometry: {
      type: "Point",
      coordinates: [-9.1333, 38.7169]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Himalayan Hill Homestay",
    description: "A peaceful escape in the Indian Himalayas with tea gardens and snowy peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568371852174-6c5b3d89d188"
    },
    price: 800,
    location: "Darjeeling",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [88.2627, 27.0360]
    },
    owner: "6885ecd745710f08e805b86f"
  },
  {
    title: "Toronto Skyline Condo",
    description: "Modern condo in downtown Toronto with unbeatable skyline views and nightlife access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566768974414-dfbd64c69c97"
    },
    price: 1300,
    location: "Toronto",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-79.3832, 43.6532]
    },
    owner: "6885ecd745710f08e805b86f"
  },
];


module.exports = { data: sampleListings };