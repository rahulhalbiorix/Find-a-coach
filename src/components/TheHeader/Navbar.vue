<template>
  <header class="bg-indigo-900 text-white shadow-lg flex">
    <nav class="w-full max-w-7xl mx-auto p-5 flex items-center justify-between">
      <h1 class="text-2xl font-semibold">
        <RouterLink
          to="/"
          class="hover:text-yellow-300 transition-all duration-300"
          >Find a Coach</RouterLink
        >
      </h1>
      <ul class="flex space-x-6">
        <li>
          <RouterLink
            to="/coaches"
            class="hover:border-2 p-3 hover:text-violet-400 transition-all duration-300 text-lg"
            >All Coaches</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/requests"
            class="relative  hover:border-2 p-3 hover:text-violet-400 transition-all duration-300 text-lg"
          >
            Requests
            <span
              v-if="unreadCount > 0"
              class="absolute  -top-1.5  -right-4 text-xs bg-purple-700 text-white font-semibold px-2 py-1 rounded-full shadow-md ring-2 ring-white"
            >
              {{ unreadCount }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  computed: {
    unreadCount() {
      return this.$store.state.request.length;
    },
  },
};
</script>

<style>
ul > li {
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}

li .router-link-active {
  border: 2px solid violet;
  padding: 12px;
  color: violet;
}
</style>
