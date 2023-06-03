<template>
  <div class="container">
    <div class="text">
      You can send us an e-mail from the contact <br />
      section what kind of training you want. <br />
      We will reply to your mail within 24 hours. <br />
      <router-link class="contact-button" :to="{ name: 'Contact' }"
        >Contact</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  height: 58.7rem;
  width: 100%;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  border-radius: 20px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 44%;
  height: 30%;
  box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.5);
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 32px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.contact-button {
  text-decoration: none;
}
</style>
