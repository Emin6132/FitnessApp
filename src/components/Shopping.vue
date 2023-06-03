<template>
  <div class="app">
    <div class="products">
      <div class="Products-Section-Name">
        <div class="Products-Section-Name-İn">Creatin</div>
      </div>
      <div
        class="product-card"
        v-for="product in CreatinProdcuts"
        :key="product.id"
      >
        <div><img class="product-img" v-bind:src="product.src" /></div>
        <div class="product-name">{{ product.Name }}</div>
        <div class="product-info">{{ product.İnfo }}</div>
        <div class="price-addBasket">
          <div class="product-price">{{ product.price }}</div>
          <button class="AddBasketButton" type="button">
            {{ product.AddBasket }}
          </button>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="Products-Section-Name">
        <div class="Products-Section-Name-İn">Bcaa</div>
      </div>
      <div
        class="product-card"
        v-for="product in BcaaProducts"
        :key="product.id"
      >
        <div><img class="product-img" v-bind:src="product.src" /></div>
        <div class="product-name">{{ product.Name }}</div>
        <div class="product-info">{{ product.İnfo }}</div>
        <div class="price-addBasket">
          <div class="product-price">{{ product.price }}</div>
          <button class="AddBasketButton" type="button">
            {{ product.AddBasket }}
          </button>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="Products-Section-Name">
        <div class="Products-Section-Name-İn">Protein Powder</div>
      </div>
      <div
        class="product-card"
        v-for="product in ProteinPowderProducts"
        :key="product.id"
      >
        <div><img class="product-img" v-bind:src="product.src" /></div>
        <div class="product-name">{{ product.Name }}</div>
        <div class="product-info">{{ product.İnfo }}</div>
        <div class="price-addBasket">
          <div class="product-price">{{ product.price }}</div>
          <button class="AddBasketButton" type="button">
            {{ product.AddBasket }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",

  data() {
    return {
      CreatinProdcuts: [
        {
          id: 1,
          Name: "Mad Line Creatin",
          price: "29.99$",
          İnfo: "5000 Gr",
          AddBasket: "Add Basket",
          src: "https://www.hardlinenutrition.com/image/cache/catalog/enerji-guc/kreatin500g_3d_cizim_03-600x600.png",
        },
        {
          id: 2,
          Name: "BioTechUSA",
          price: "46.99$",
          İnfo: "300 Gr",
          AddBasket: "Add Basket",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsFdbbtNZNMdAZiscw9TImGAqKLX7lpcNBQ&usqp=CAU",
        },
        {
          id: 3,
          Name: "Nosorog",
          price: "22.99$",
          İnfo: "240 Caps",
          AddBasket: "Add Basket",
          src: "https://img.joomcdn.net/2c3a25791dac8b6ae96b8446d048b975a4cd50a4_original.jpeg",
        },
        {
          id: 4,
          Name: "MONOHYDRATE",
          price: "30.99 $",
          İnfo: "500 Gr",
          AddBasket: "Add Basket",
          src: "https://www.wakeupbodynutrition.com/storage/2022/01/eng_pl_OstroVit-Supreme-Pure-Creatine-Monohydrate-500-g-16618_1-1.png",
        },
        {
          id: 5,
          Name: "BigJoy",
          price: "29.99 $",
          İnfo: "300 Gr",
          AddBasket: "Add Basket",
          src: "https://cdn.cimri.io/image/1000x1000/bigjoycreabiggrkreatin_141324884.jpg",
        },
      ],
      BcaaProducts: [
        {
          id: 1,
          Name: "Dynamic Nutrition",
          price: "16.99$",
          İnfo: "5000 Gr",
          AddBasket: "Add Basket",
          src: "https://productimages.hepsiburada.net/s/22/1500/9947252916274.jpg",
        },
        {
          id: 2,
          Name: "XTREME NUTRITION",
          price: "34.99$",
          İnfo: "5000 Gr",
          AddBasket: "Add Basket",
          src: "https://productimages.hepsiburada.net/s/22/1500/9947253047346.jpg",
        },
        {
          id: 3,
          Name: "HARDLINE",
          price: "21.50$",
          İnfo: "500 Gr",
          AddBasket: "Add Basket",
          src: "https://productimages.hepsiburada.net/s/41/500/10689476034610.jpg",
        },
        {
          id: 4,
          Name: "HIQ BCAA ENERGY",
          price: "23.99 $",
          İnfo: "390 Gr",
          AddBasket: "Add Basket",
          src: "https://cdn.shopify.com/s/files/1/0579/3795/2829/products/HIQ-BCAA-ENERGY-WATERMELON-THUMB_1080x.jpg?v=1669645738",
        },
        {
          id: 5,
          Name: "Torq Nutrition",
          price: "19.99 $",
          İnfo: "500 Gr",
          AddBasket: "Add Basket",
          src: "https://www.sporcueczane.com/image/cache/catalog/Torq%20Yeni/amino%20asit/bcaa-500-%C3%A7ilek-600x600.png",
        },
      ],
      ProteinPowderProducts: [
        {
          id: 1,
          Name: "MultiPower",
          price: "99.99$",
          İnfo: "2000 Gr",
          AddBasket: "Add Basket",
          src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQt6iqYCrsEH1FVi-h3zquogkIB9shKuqU0GeK7B8CUEdgsRK32QiwKd9DD7B-HxFQHksPLL01yD7Ub4WGSwZJk8mwy2FlC4au3uoSenceH8Hxz-logScKUKQ&usqp=CAE",
        },
        {
          id: 2,
          Name: "Volume Tech",
          price: "49.99$",
          İnfo: "2400 Gr",
          AddBasket: "Add Basket",
          src: "https://powertechsport.com/image/cache/catalog/urun/protein-tozu/volumutech/volumutech-2400-muz-protein-tozu-600x600.jpg",
        },
        {
          id: 3,
          Name: "Optimum Gold Standard",
          price: "114.99$",
          İnfo: "2200 Gr",
          AddBasket: "Add Basket",
          src: "https://contents.mediadecathlon.com/p2006424/k$155df7d00ae0c34e8742f10d6fc8fdc3/sq/optimum-gold-standard-whey-protein-tozu-cikolata-22-kg.jpg?format=auto&f=969x969",
        },
        {
          id: 4,
          Name: "POWERTECH",
          price: "81.99 $",
          İnfo: "1800 Gr",
          AddBasket: "Add Basket",
          src: "https://www.egedogalmarket.com/image/cache/catalog/powertech/protein%20tozu/izole-whey-protein-tozu-1800-gr-cikolata-2-550x550.jpg",
        },
        {
          id: 5,
          Name: "OPTIMUM Nutrition",
          price: "119.99 $",
          İnfo: "2273 Gr",
          AddBasket: "Add Basket",
          src: "https://productimages.hepsiburada.net/s/50/375/11046242484274.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.products {
  text-align: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: rgba(226, 229, 228);
  justify-content: space-evenly;
  width: 100%;
  text-align: center;
  display: flex;
}
.product-card {
  margin-bottom: 100px;
  border-radius: 10px;
  width: 16%;
  min-height: 350px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0.5);
  margin-top: 20px;
}
.product-img {
  padding: 20px 20px 0px 20px;
  width: 90%;
}
.product-name {
  font-size: 18px;
}
.product-info {
  margin-top: 4px;
}
.AddBasketButton {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  color: white;
  padding: 10px 0px 10px 0px;
  width: 40%;
  height: 45px;
  border: none;
  background-color: rgb(23, 92, 182);
  font-size: 16px;
  cursor: pointer;
}
.price-addBasket {
  margin-top: 10px;
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.product-price {
  padding: 12px 10px 0px 10px;
  text-align: center;
  height: 45px;
  display: flex;
  background-color: rgb(23, 92, 182);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.Products-Section-Name {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  background-color: red;
  border-radius: 10px;
  width: 6%;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0.5);
  margin-top: 20px;
}
.Products-Section-Name-İn {
  display: flex;
  font-size: 30px;
  transform: rotate(270deg);
}
</style>
