"use client";
import { useState } from "react";
  
   export default function Home() {

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sort, setSort] = useState("new");

  const products = [
    {
      name: "Citra Hops",
      price: 5.99,
      description: "Ideal for IPAs and Pale Ales",
      image: "/img/products/citra_hops.jpg",
      type: "hops",
    },
    {
      name: "Maris Otter Pale Malt",
      price: 2.50,
      description: "Perfect for traditional ales",
      image: "/img/products/maris_otter_malt.jpg",
      type: "malts",
    },
    {
      name: "SafAle US-05 Dry Ale Yeast",
      price: 3.25,
      description: "Clean fermenting American ale yeast",
      image: "/img/products/safale_us05_yeast.jpg",
      type: "yeast",
    },
    {
      name: "Cascade Hops",
      price: 7.49,
      description: "Great for dry hopping",
      image: "/img/products/cascade_hops.jpg",
      type: "hops",
    },
    {
      name: "Caramel Malt 60L",
      price: 3.00,
      description: "Head retention in darker beers",
      image: "/img/products/caramel_malt.jpg",
      type: "malts",
    },
    {
      name: "Saaz Hops",
      price: 4.75,
      description: "Essential for Lagers",
      image: "/img/products/saaz_hops.jpg",
      type: "hops",
    },
    {
      name: "Pilsner Malt",
      price: 2.20,
      description: "Foundation for lagers and pilsners",
      image: "/img/products/pilsner_malt.jpg",
      type: "malts",
    },
    {
      name: "Imperial Organic Yeast A07",
      price: 8.99,
      description: "American ales with citrus notes",
      image: "/img/products/imperial_yeast.jpg",
      type: "yeast",
    },
    {
      name: "Centennial Hops",
      price: 6.20,
      description: 'Often called "Super Cascade"',
      image: "/img/products/centennial_hops.jpg",
      type: "hops",
    },
    {
      name: "Mosaic Hops",
      price: 9.50,
      description: "Ideal for IPAs and Pale Ales",
      image: "/img/products/mosaic_hops.jpg",
      type: "hops",
    },
    {
      name: "West Coast IPA - All-Grain Kit",
      price: 60,
      description: "West Coast IPA",
      image: "/img/products/ipa_kit.jpg",
      type: "adjuncts",
    },
    {
      name: "Unmalted Wheat",
      price: 1.80,
      description: "Belgian Witbier",
      image: "/img/products/unmalted_wheat.jpg",
      type: "adjuncts",
    },
  ];
  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" || product.type === selectedCategory;

  return matchesSearch && matchesCategory;
});

const sortedProducts = [...filteredProducts];

if (sort === "low") {
  sortedProducts.sort((a, b) => a.price - b.price);
}

if (sort === "high") {
  sortedProducts.sort((a, b) => b.price - a.price);
}

  return (
    <>
      <header>
        <div className="header-container">
          <a href="#" className="header__logo">
            <img src="/img/logo.svg" alt="Hop & Barley Logo" />
            <p className="logo-text">Hop & Barley</p>
          </a>

          <nav className="header__nav">
            <ul>
              <li><a href="#">Products</a></li>
              <li><a href="#">Guides & Recipes</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <div className="header__auth-buttons">
            <a href="#" className="button button--secondary">
              Sign in
            </a>

            <a href="#" className="button button--primary">
              Register
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-banner">
          <img
            src="/img/background/hopfen-fields.jpg"
            alt="Beautiful hops on a dark background"
            className="hero-banner__image"
          />
          <div className="hero-banner__overlay"></div>
        </section>

        <div className="container main-content-grid">
          <aside className="sidebar filter-menu">
            <div className="sidebar__section">
              <h3 className="section-title">Keywords</h3>

              <div className="keywords-list"></div>
            </div>

            <div className="sidebar__section">
              <h3 className="section-title">Product Type</h3>

              <div className="checkbox-group">
                <label className="checkbox-container">
                  Hops
                  <input type="checkbox" 
                  checked={selectedCategory === "hops"}
                  onChange={() => setSelectedCategory("hops")} />
                  <span className="checkmark"></span>
                </label>

                <label className="checkbox-container">
                  Malts
                  <input type="checkbox" 
                  checked={selectedCategory === "malts"}
                  onChange={() => setSelectedCategory("malts")} />
                  <span className="checkmark"></span>
                </label>

                <label className="checkbox-container">
                  Yeast
                  <input type="checkbox" 
                  checked={selectedCategory === "yeast"}
                  onChange={() => setSelectedCategory("yeast")} />
                  <span className="checkmark"></span>
                </label>

                <label className="checkbox-container">
                  Adjuncts
                  <input type="checkbox" 
                  checked={selectedCategory === "adjuncts"}
                  onChange={() => setSelectedCategory("adjuncts")} />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </aside>

          <section className="products-area product-grid-section">
            <div className="search-sort-bar">
              <div className="search-input-wrapper">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />

                <button className="search-button" aria-label="Search">
                   <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <div className="sort-options">
                <button className={sort === "new" ? "sort-button active-sort" : "sort-button"}
                  onClick={() => setSort("new")}>
                  New
                </button>

                <button className={sort === "low" ? "sort-button active-sort" : "sort-button"}
                 onClick={() => setSort("low")}>
                  Price ascending
                </button>

                <button className={sort === "high" ? "sort-button active-sort" : "sort-button"}
                 onClick={() => setSort("high")}>
                  Price descending
                </button>

                <button className={sort === "rating" ? "sort-button active-sort" : "sort-button"}
                 onClick={() => setSort("rating")}>
                  Rating
                </button>
              </div>
            </div>

            <div className="product-grid">
              {sortedProducts.map((product) => (
                <a href="#" className="product-card-link" key={product.name}>
                  <div className="product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card__image"
                    />

                    <div className="product-card__info">
                      <h4 className="product-card__name">
                        {product.name}
                      </h4>

                      <p className="product-card__price">
                        ${product.price.toFixed(2)}
                      </p>

                      <p className="product-card__description">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pagination">
              <a href="#" className="pagination__link pagination__link--prev">
                ← Previous
              </a>

              <div className="pagination-list">
                <a href="#" className="pagination__link active">
                  1
                </a>

                <a href="#" className="pagination__link">
                  2
                </a>

                <a href="#" className="pagination__link">
                  3
                </a>

                <span className="pagination__dots">...</span>

                <a href="#" className="pagination__link">
                  20
                </a>
              </div>

              <a href="#" className="pagination__link pagination__link--next">
                Next →
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}