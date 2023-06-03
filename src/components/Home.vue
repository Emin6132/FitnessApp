<template>
  <div class="Home">
    <div class="pictures">
      <div class="join-me-text">
        Start working <br />now to have your dream <br />
        body in 1 month

        <router-link class="start-text" :to="{ name: 'Training' }"
          >Start NOW</router-link
        >
      </div>
      <div class="picture-one"></div>
    </div>

    <div class="pictures">
      <div class="picture-two"></div>
      <div class="join-me-text">
        Buy your auxiliary <br />
        chemicals from us and do your sports more energetic

        <router-link class="start-text" :to="{ name: 'Shopping' }"
          >Shopping NOW</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.pictures {
  display: flex;
}
.picture-one {
  transition: 300ms;
  width: 100%;
  height: 940px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.75)),
    url("https://www.muscleandfitness.com/wp-content/uploads/2018/04/woman-abs-workout-dumbbell-1109.jpg?quality=86&strip=all");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}
.picture-two {
  transition: 300ms;
  width: 100%;
  height: 940px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.75)),
    url("https://www.eniyioneri.net/wp-content/uploads/2022/05/en-iyi-kreatin-onerileri-min.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}
.join-me-text {
  flex-direction: column;
  font-size: 22px;
  width: 400px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: rgba(48, 48, 48, 0.836);
}
.start-text {
  color: rgba(255, 0, 0, 0.76);
}
</style>
