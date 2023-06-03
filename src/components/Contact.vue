<template>
  <div class="body">
    <div class="contact-container">
      <div class="img-container">
        <img
          src="https://www.shutterstock.com/image-vector/no-pain-gain-shut-train-600w-395302288.jpg"
          class="img"
        />
      </div>
      <div class="container">
        <h1>Contact Form</h1>
        <form
          action="https://formsubmit.co/d4bba4ba05d64b3c064500deca5f2a30"
          method="POST"
        >
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            v-model="Fname"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            v-model="email"
            required
          />
          <select name="Continent">
            <option>Turkey</option>
            <option>America</option>
            <option>Russia</option>
            <option>Germany</option>
            <option>Greek</option>
            <option>U.K</option>
          </select>
          <textarea
            name="Message"
            placeholder="Message"
            cols="30"
            rows="10"
            required
            v-model="Message"
          ></textarea>
          <button
            type="submit"
            @click="SendButton"
            :class="{ active: Class }"
            v-if="Fname.length > 0 && email.length > 0 && Message.length > 0"
          >
            <div class="icon-div" v-if="Class">
              <i class="fa-solid fa-check icon"></i>
            </div>
            {{ SendText }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Class: false,
      Fname: "",
      email: "",
      Message: "",
      SendText: "Send",
    };
  },
  methods: {
    SendButton() {
      this.Class = true;
      this.SendText = "Your message has been sent :)";
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58.7rem;
  background-color: grey;
}
.contact-container {
  display: flex;
}
.container {
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  margin: auto;
  width: 40rem;
  background-color: white;
  justify-content: center;
  height: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img {
  border-radius: 20px;
}
h1 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
form {
  display: flex;
  flex-direction: column;
  width: 24rem;
  gap: 1rem;
}
input,
select,
textarea {
  padding: 1.4rem;
  background: transparent;
  border: 1px solid black;
}

textarea {
  height: 6rem;
}

button {
  height: 54px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  margin: auto;
  border: none;
  width: 100%;
  padding: 1.4rem;
  cursor: pointer;
  background: #673de6;
  color: white;
}
.active {
  margin: auto;
  border-radius: 50px;
  background: #ff2b75;
  transition: 1.5s;
}
.icon-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -83px;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.5);
}
.icon {
  font-size: 18px;
}
</style>
