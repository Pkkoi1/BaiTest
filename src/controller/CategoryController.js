import { categories as initialCategories } from "../models/Category";

// Dữ liệu tạm thời cho CRUD (vì không có backend)
let categories = [...initialCategories];

/**
 * Lấy tất cả category
 */
export function getAllCategories() {
  return categories;
}

/**
 * Tìm category theo slug
 * @param {string} slug
 */
export function getCategoryBySlug(slug) {
  return categories.find(
    (cat) =>
      cat.slug === slug ||
      (cat.children && cat.children.some((child) => child.slug === slug))
  );
}

/**
 * Thêm category mới
 * @param {Object} category
 * @returns {Object} category đã thêm
 */
export function createCategory(category) {
  const newId = categories.length
    ? Math.max(...categories.map((c) => c.id)) + 1
    : 1;
  const newCategory = { ...category, id: newId };
  categories.push(newCategory);
  return newCategory;
}

/**
 * Cập nhật category theo id
 * @param {number} id
 * @param {Object} updates
 * @returns {Object|null} category đã cập nhật hoặc null nếu không tìm thấy
 */
export function updateCategory(id, updates) {
  const idx = categories.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  categories[idx] = { ...categories[idx], ...updates };
  return categories[idx];
}

/**
 * Xóa category theo id
 * @param {number} id
 * @returns {boolean} true nếu xóa thành công, false nếu không tìm thấy
 */
export function deleteCategory(id) {
  const idx = categories.findIndex((c) => c.id === id);
  if (idx === -1) return false;
  categories.splice(idx, 1);
  return true;
}
