import { popularProducts } from "../models/Product";

// Dữ liệu tạm thời cho CRUD (vì không có backend)
let products = [...popularProducts];

/**
 * Lấy tất cả sản phẩm
 */
export function getAllProducts() {
  return products;
}

/**
 * Tìm sản phẩm theo id
 * @param {number} id
 */
export function getProductById(id) {
  return products.find((p) => p.id === id);
}

/**
 * Tìm sản phẩm theo từ khóa (name, description, brand)
 * @param {string} keyword
 */
export function searchProducts(keyword) {
  const lower = keyword.trim().toLowerCase();
  if (!lower) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.brand.toLowerCase().includes(lower)
  );
}

/**
 * Thêm sản phẩm mới
 * @param {Object} product
 * @returns {Object} sản phẩm đã thêm
 */
export function createProduct(product) {
  const newId = products.length
    ? Math.max(...products.map((p) => p.id)) + 1
    : 1;
  const newProduct = { ...product, id: newId };
  products.push(newProduct);
  return newProduct;
}

/**
 * Cập nhật sản phẩm theo id
 * @param {number} id
 * @param {Object} updates
 * @returns {Object|null} sản phẩm đã cập nhật hoặc null nếu không tìm thấy
 */
export function updateProduct(id, updates) {
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  products[idx] = { ...products[idx], ...updates };
  return products[idx];
}

/**
 * Xóa sản phẩm theo id
 * @param {number} id
 * @returns {boolean} true nếu xóa thành công, false nếu không tìm thấy
 */
export function deleteProduct(id) {
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return false;
  products.splice(idx, 1);
  return true;
}
