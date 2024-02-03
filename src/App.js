import * as React from "react";

export default function App(props) {
  return (
    <div className="container">
      <div className="header">
        <div className="top-header">
          <div className="header-title">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="header-title-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>

            <div className="header-title-text">
              MEDICINES
            </div>
          </div>

          <div className="header-search">
            <div className="search-input">
              Search medicines
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" class="search-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </div>
          <div className="header-button-group">
            <div className="header-order-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="order-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
              <div className="header-order-button-text">
                Orders
              </div>
            </div>
            <div className="header-cart-button">
              <div class="cart-badge">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="cart-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <span class="cart-badge-number">
                  3
                </span>
              </div>
              <div className="cart-text">
                Cart
              </div>
            </div>
          </div>

          <div className="sign-in-button">
            Sign In
          </div>
        </div>
        <div className="bottom-header">
          <div className="nav-btn">
            DOCTOR CONSULTATION
          </div>
          <div className="nav-btn">
            TREATMENTS
          </div>
          <div className="nav-btn">
            MEDICINES
          </div>
        </div>
        <div className="header-bottom-1" />
      </div>
      <div className="main">
        <div className="main-1">
          <div className="left-bar">
            <div className="left-bar-1">
              <div className="category-type">
                Shop By Manufacturer
              </div>
              <CategoryItem name={"Vaidyaratnam"} isChecked={true} />
              <CategoryItem name={"AVP"} />
              <div className="category-type">
                Shop By Medicines
              </div>
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <div className="category-type">
                Shop By Category
              </div>
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
              <CategoryItem name={"Capsules & Tablets"} />
            </div>
          </div>
          <div className="products-container">
            <div className="grid-container">
              <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                price={'$599'} />
              <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                price={'$599'} />
              <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                price={'$599'} />
              <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                price={'$599'} />
              <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                price={'$599'} />
              <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e9324decbb9be293a0c91066732aae3aa4c64f39947590bcfb9460fece58d804?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                title={'Gulguluthikthakam Kashayam Tablet 10’S'}
                description={'An Ayurvedic Tablet with multiple systemic benefits!\nAVP…'}
                price={'$599'} />
              <Card image_src={"https://cdn.builder.io/api/v1/image/assets/TEMP/10a61688fa56758b424ba7a06c5e8457ce7c49d8da254ec04bf8dbf2f7709eb4?apiKey=7b88b562a25d48f4a13544f631a99bf0&"}
                title={"Gulguluthikthakam Kashayam Tablet 10’S"}
                description={"An Ayurvedic Tablet with multiple systemic benefits!\nAVP…"}
                price={'$599'}
              />
            </div>
            <div className="loadmore-button">
              Load more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CategoryItem = ({ name, isChecked = false, onClick }) => {
  return (
    <div className="category-item">
      <div
        className={`check-box ${isChecked && "check-box-active"}`}
        onClick={() => onClick && onClick()}
      >
        {/* Optional: Include a checkmark or some content when the div is checked */}
        {isChecked && (
          <svg className="check-icon" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
          </svg>
        )}
      </div>
      <div className="category-item-text">
        {name}
      </div>
    </div>
  )
}

const Card = ({ image_src, title, description, price }) => {
  return (
    <div className="card-container">
      <div className="cart-container-1">
        <div className="img-container">
          <img
            loading="lazy"
            srcSet={image_src}
            className="card-image"
          />
        </div>
        <div className="cart-title">
          {title}
        </div>
        <div className="cart-description">
          {description}
        </div>
        <div className="cart-bottom">
          <div className="cart-price">
            {price}
          </div>
          <div className="add-to-cart">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  )
}
