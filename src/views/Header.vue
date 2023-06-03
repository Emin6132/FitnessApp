<template>
  <div class="header">
    <div class="header-top">
      <div class="title">
        <div class="sentence-one">
          No <span class="sentence-one-word">Pain</span> No
          <span class="sentence-one-word">Gain</span>
        </div>

        <div class="sentence-two">
          <span class="word">Shut</span> <span class="word">Up</span>
        </div>
        <div class="sentence-three">AND</div>
        <div class="sentence-four word">Train</div>
      </div>
      <div class="section">
        <router-link class="option left-option" :to="{ name: 'Home' }"
          >Home</router-link
        >
        <router-link class="option" :to="{ name: 'Training' }"
          >Training</router-link
        >
        <router-link class="option" :to="{ name: 'Shopping' }"
          >Shop</router-link
        >
        <router-link class="option right-option" :to="{ name: 'Contact' }"
          >Contact</router-link
        >
      </div>
    </div>
    <div class="header-center">
      <div class="header-center-text">
        <strong>
          MAXIMIZE <br />
          YOUR FULL <br />
          POTENTIAL.
        </strong>
      </div>
      <div class="header-center-text-two">
        Do your best and show them <br />
        Who Is The King
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
body {
  margin: 0;
}
</style>
<style lang="scss" scoped>
body {
  margin: 0%;
  background-color: rgba(211, 211, 211, 0.678);
}
.header {
  transition: 300ms;
  width: 100%;
  height: 940px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.75)),
    url("https://cdn.evrimagaci.org/i4iY3ij_mSiFxH-TtqLb6elNVT4=/evrimagaci.org%2Fpublic%2Fcontent_media%2F8c600c06bb07fb4188765ecca4e23219.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.header-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.header-center {
  padding: 80px 0px 0px 18vh;
}
.header-center-text {
  font-size: 86px;
  color: rgba(255, 255, 255, 0.493);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.header-center-text-two {
  font-size: 44px;
  font-style: italic;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgba(255, 217, 0, 0.555);
}
.title {
  padding: 10px 10px 10px 10px;
  font-family: monospace;
  font-size: 16px;
}
.section {
  display: flex;
}
.option {
  text-decoration: none;
  transition: 300ms;
  background-color: rgba(255, 0, 0, 0.377);
  color: white;
  list-style: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  cursor: pointer;
}
.option:hover {
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 50px;
}
.right-option {
  margin-right: 20px;
  border-bottom-right-radius: 10px;
}
.left-option {
  border-bottom-left-radius: 10px;
}
span {
  color: red;
}
.word {
  color: lightgray;
}
.sentence-one {
  color: white;
}
.sentence-two {
  padding: 2px 0px 0px 24px;
}
.sentence-three {
  color: white;
  font-size: 24px;
  padding: 0px 0px 0px 70px;
}
.sentence-four {
  padding: 1px 0px 0px 97px;
}
.sentence-one-word {
  font-size: 22px;
}
.sentence-one-word {
  font-size: 22px;
}
</style>
