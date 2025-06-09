<template>
  <form @submit.prevent="submitContactFormData">
    <mark>"ID" + {{ id }}</mark>
    <div
      class="container mx-auto p-6 rounded-lg shadow-md max-w-lg border-2 border-blue-200 mt-10"
    >
      <div class="mb-6">
        <label for="email" class="block text-lg font-semibold text-gray-800"
          >Your E-mail</label
        >
        <input
          id="email"
          type="email"
          v-model.trim="email"
          class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
        <div class="bg-pink-200 text-pink-500">{{ email }}</div>
      </div>

      <div class="mb-6">
        <label
          for="write-message"
          class="block text-lg font-semibold text-gray-800"
          >Write a Message</label
        >
        <textarea
          id="write-message"
          v-model.trim="message"
          class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          rows="6"
          placeholder="Write your message here..."
        ></textarea>
        <div class="bg-orange-200 text-orange-500">{{ message }}</div>
        <div
          v-if="!this.isFormValid"
          class="errors bg-red-100 text-red-500 font-semibold"
        >
          Plaese Enter valid email or valid message
        </div>
      </div>
      <div class="text-center">
        <button
          class="bg-blue-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send Message
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      email: "",
      message: "",
      isFormValid: true,
    };
  },
  methods: {
    submitContactFormData() {
      console.log("submit form data method is working...");
      if (this.email == "" || this.message == "" || !this.email.includes("@")) {
        this.isFormValid = false;
        return;
      } else {
        this.isFormValid = true;
        this.$store.dispatch("addRequest", {
          id: this.id,
          email: this.email,
          message: this.message,
        });

        this.email = "";
        this.message = "";

        alert("Your request has been submitted!");
      }
    },
  },
};
</script>
