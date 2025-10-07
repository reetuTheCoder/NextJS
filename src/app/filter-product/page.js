'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import styles from './ProductFilter.module.css'
import { allProducts } from './allProducts'


export default function ProductFilter() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const category = searchParams.get('category') || 'all'
  const brand = searchParams.get('brand') || 'all'
  const minPrice = searchParams.get('minPrice') || '0'
  const maxPrice = searchParams.get('maxPrice') || '10000'
  const search = searchParams.get('search') || ''

  const filteredProducts = allProducts.filter(product => {
    if (category !== 'all' && product.category !== category) return false
    if (brand !== 'all' && product.brand !== brand) return false
    if (product.price < Number(minPrice)) return false
    if (product.price > Number(maxPrice)) return false
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all' || value === '' || value === '0') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`?${params.toString()}`)
  }

  const clearFilters = () => router.push('?')
  const brands = [...new Set(allProducts.map(p => p.brand))]

  return (
    <div className={styles.container}>
      <div className={styles.maxContainer}>
        <h1 className={styles.title}>Product Store</h1>
        <div className={`${styles.grid} ${styles.gridLarge}`}>
          <div style={{ gridColumn: 'span 1' }}>
            <div className={styles.sidebar}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 className={styles.sectionTitle}>Filters</h2>
                <button onClick={clearFilters} className={styles.buttonClear}>Clear All</button>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Search</label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => updateFilter('search', e.target.value)}
                  placeholder="Search products..."
                  className={styles.input}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Category</label>
                <select value={category} onChange={(e) => updateFilter('category', e.target.value)} className={styles.select}>
                  <option value="all">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="home">Home</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Brand</label>
                <select value={brand} onChange={(e) => updateFilter('brand', e.target.value)} className={styles.select}>
                  <option value="all">All Brands</option>
                  {brands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Price Range</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input type="number" value={minPrice} onChange={(e) => updateFilter('minPrice', e.target.value)} placeholder="Min" className={styles.priceInput} />
                  <input type="number" value={maxPrice} onChange={(e) => updateFilter('maxPrice', e.target.value)} placeholder="Max" className={styles.priceInput} />
                </div>
              </div>

              <div className={styles.filterInfo}>
                <p>Showing {filteredProducts.length} of {allProducts.length} products</p>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 3' }}>
            {filteredProducts.length === 0 ? (
              <div className={styles.noProducts}>
                <p>No products found matching your filters.</p>
                <button onClick={clearFilters} className={styles.addToCartButton}>Clear Filters</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                {filteredProducts.map(product => (
                  <div key={product.id} className={styles.productCard}>
                    <div style={{ marginBottom: '16px' }}>
                      <span className={styles.productCategory}>{product.category}</span>
                    </div>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productBrand}>{product.brand}</p>
                    <p className={styles.productPrice}>${product.price}</p>
                    <button className={styles.addToCartButton}>Add to Cart</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
