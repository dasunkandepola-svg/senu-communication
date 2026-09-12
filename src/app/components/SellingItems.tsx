import { Search, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Item {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

const items: Item[] = [
  {
    id: 1,
    name: "Atlas Active Fit School Bag",
    category: "School Bags",
    price: "LKR 3,500",
    description: "with Spine Shield Technology support the healthy posture of growing kids with key ...",
    image: "/GF7001401-21-min-600x600.jpg",
  },
  {
    id: 2,
    name: "ATLAS (SLS CERTIFIED) AQUA WATER BOTTLE",
    category: "Water Bottles",
    price: "Rs. 990",
    description: "Screw Cap Bottles, Back to school, Water bottles for kids, BPA Free, Leak Proof, Durable, Easy to Clean, 100% Safe",
    image: "/508137-600x600.jpg",
  },
  {
    id: 3,
    name: "ATLAS COLOUR PEN WALLET 12 COLOURS",
    category: "Colour Products",
    price: "Rs. 470",
    description: "Smooth writing blue ink pens",
    image: "/508246-600x600.jpg",
  },
  {
    id: 4,
    name: "ATLAS CALCULATOR AT2276C",
    category: "Office Products, Calculators",
    price: "Rs. 2100",
    description: "Standard grade calculator with large display and solar power",
    image: "/AT-2276C_front_.jpg",
  },
  {
    id: 5,
    name: "JK Copier Paper - A4 500",
    category: "Art Supplies",
    price: "Rs. 3000",
    description: "Sheets Pack of 500, 80 GSM, High-quality paper for printing and copying",
    image: "/fe1e162e72f27f24150335c3d72bc171.jpg",
  },
  {
    id: 6,
    name: "ATLAS BINDER GLUE BOTTLE 100G",
    category: "School Products",
    price: "Rs. 175",
    description: "Glue bottle with precision tip for easy application",
    image: "/GF3013201-min-600x600.jpg",
  },
  {
    id: 7,
    name: "ATLAS A4 WRITING PAPER 56GSM",
    category: "Art Supplies",
    price: "Rs. 280",
    description: "High-quality writing paper for school and office use",
    image: "/PF0083206-min-600x600 - Copy.jpg",
  },
  {
    id: 8,
    name: "ATLAS COLOUR PAPER A4 ",
    category: "Art Supplies",
    price: "Rs. 660",
    description: "High-quality paper for drawings",
    image: "/PF0083227-600x600.jpg",
  },
  {
    id: 9,
    name: "ATLAS A4 WRITING PAPER 56GSM",
    category: "Writing Tools",
    price: "Rs. 280",
    description: "Paper Products, Writing Papers",
    image: "/PF0083206-min-600x600.jpg",
  },
  {
    id: 10,
    name: "ATLAS PAPER FOOLSCAP 250 SHEETS",
    category: "Writing Tools",
    price: "Rs. 1000",
    description: "Paper Products",
    image: "/PF0084105-600x600.jpg",
  },
  {
    id: 11,
    name: "ATLAS COLOUR SPARX 24 COLOURS",
    category: "Writing Tools",
    price: "Rs. 1130",
    description: "Colour Pencils",
    image: "/WF7050605-min-600x600.jpg",
  },
  {
    id: 12,
    name: "PAPERLINE PHOTOCOPY PAPER A3",
    category: "Paper Products",
    price: "Rs. 2568",
    description: "Copy Papers, A3 Size, 80 GSM, Pack of 500 Sheets",
    image: "/TT0010307-min.jpg",
  },
  {
    id: 13,
    name: "STAPLER PIN # 369",
    category: "Supplies",
    price: "Rs. 80",
    description: "Office Products, Staplers & Pins",
    image: "/TT0040302-min-1-600x600 - Copy.jpg",
  },
  {
    id: 14,
    name: "STAPLER PIN # 380",
    category: "Office Products, Staplers & Pins",
    price: "Rs. 200",
    description: "Office Products, Staplers & Pins",
    image: "/TT0040302-min-1-600x600.jpg",
  },
  {
    id: 15,
    name: "PUNCHER SMALL",
    category: "Office Products, Punchers",
    price: "Rs. 150",
    description: "Punchers for paper, small size, durable metal construction",
    image: "/TT0050103-min.jpg",
  },
  {
    id: 16,
    name: "CARDBOARD FILE",
    category: "Office Products",
    price: "Rs. 18",
    description: "Files",
    image: "/TT1003205-min-600x600.jpg",
  },
  {
    id: 17,
    name: "CARDBOARD FILE",
    category: "Office Products",
    price: "Rs. 18",
    description: "Files",
    image: "/TT1003206-min-600x600.jpg",
  },
  {
    id: 18,
    name: "CARDBOARD FILE",
    category: "Office Products",
    price: "Rs. 18",
    description: "Files",
    image: "/TT1003207-min-600x600.jpg",
  },
  {
    id: 19,
    name: "ECO BLOCK BAG",
    category: "Accessories",
    price: "Rs. 1090",
    description: "BlockBuddies",
    image: "/TT4020202-600x600.jpg",
  },
  {
    id: 20,
    name: "ATLAS COLOUR PEN FELTA 12 COLOURS",
    category: "Writing Tools",
    price: "Rs. 420",
    description: "Colour Pens",
    image: "/WF8050201-min-600x600.jpg",
  },
];

export function SellingItems() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Notebooks", "Writing Tools", "Art Supplies", "Mathematics", "Stationery", "Books", "Bags", "Accessories"];

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-blue-100 dark:text-gray-300">Browse our complete range of school items</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-12 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No items found matching your search.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">{item.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{item.description}</p>
                      <p className="text-blue-600 dark:text-blue-400 font-bold text-xl">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-blue-50 dark:bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Need Help Finding Something?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Visit our shop or contact us for more information about our products
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+94123456789"
              className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-800 transition"
            >
              Call Us
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
