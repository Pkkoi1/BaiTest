/**
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 */

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {string} description
 * @property {number} price
 * @property {number} originalPrice
 * @property {number} categoryId
 * @property {string} brand
 * @property {string} imageUrl
 * @property {boolean} isOnSale
 * @property {boolean} inStock
 * @property {number} rating
 * @property {number} reviewCount
 */

export const popularProducts = [
  {
    id: 1,
    name: "Pineapple Glow Cream",
    slug: "pineapple-glow-1",
    description: "Kem dưỡng da từ chiết xuất dứa",
    price: 14.0,
    originalPrice: 36.0,
    categoryId: 1,
    brand: "AGELOC",
    imageUrl: "https://picsum.photos/300/400?random=1",
    isOnSale: true,
    inStock: true,
    rating: 4.5,
    reviewCount: 24,
  },
  {
    id: 2,
    name: "Pineapple AR+ Moisturizer",
    slug: "pineapple-arplus-2",
    description: "Kem dưỡng AR+ từ chiết xuất dứa",
    price: 14.0,
    originalPrice: 36.0,
    categoryId: 1,
    brand: "AGELOC",
    imageUrl: "https://picsum.photos/300/400?random=2",
    isOnSale: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 32,
  },
  {
    id: 3,
    name: "Pineapple Daily Cream",
    slug: "pineapple-daily-3",
    description: "Kem dưỡng da từ chiết xuất dứa",
    price: 14.0,
    originalPrice: 36.0,
    categoryId: 1,
    brand: "AGELOC",
    imageUrl: "https://picsum.photos/300/400?random=3",
    isOnSale: true,
    inStock: true,
    rating: 4.2,
    reviewCount: 18,
  },
  {
    id: 4,
    name: "Pineapple Premium Cream",
    slug: "pineapple-premium-4",
    description: "Kem dưỡng da từ chiết xuất dứa premium",
    price: 18.0,
    originalPrice: 42.0,
    categoryId: 1,
    brand: "AGELOC",
    imageUrl: "https://picsum.photos/300/400?random=4",
    isOnSale: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 36,
  },
  {
    id: 5,
    name: "Aloe Vera Gel",
    slug: "aloe-vera-gel-5",
    description: "Gel dưỡng ẩm chiết xuất lô hội",
    price: 12.0,
    originalPrice: 28.0,
    categoryId: 2,
    brand: "NATURE",
    imageUrl: "https://picsum.photos/300/400?random=5",
    isOnSale: false,
    inStock: true,
    rating: 4.3,
    reviewCount: 15,
  },
  {
    id: 6,
    name: "Vitamin C Serum",
    slug: "vitamin-c-serum-6",
    description: "Serum dưỡng sáng da vitamin C",
    price: 22.0,
    originalPrice: 30.0,
    categoryId: 2,
    brand: "DERMA",
    imageUrl: "https://picsum.photos/300/400?random=6",
    isOnSale: true,
    inStock: false,
    rating: 4.6,
    reviewCount: 40,
  },
  {
    id: 7,
    name: "Green Tea Cleanser",
    slug: "green-tea-cleanser-7",
    description: "Sữa rửa mặt chiết xuất trà xanh",
    price: 10.0,
    originalPrice: 18.0,
    categoryId: 3,
    brand: "PURESKIN",
    imageUrl: "https://picsum.photos/300/400?random=7",
    isOnSale: false,
    inStock: true,
    rating: 4.1,
    reviewCount: 12,
  },
  {
    id: 8,
    name: "Rose Water Toner",
    slug: "rose-water-toner-8",
    description: "Nước hoa hồng dưỡng ẩm",
    price: 16.0,
    originalPrice: 25.0,
    categoryId: 3,
    brand: "FLORAL",
    imageUrl: "https://picsum.photos/300/400?random=8",
    isOnSale: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 55,
  },
];
