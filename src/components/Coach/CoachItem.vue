<template>
  <div
    class="coach-card bg-blue-50 rounded-xl p-5 shadow-sm hover:shadow-2xl transition-shadow duration-300 border-3 border-blue-200 "
  >
    <div class="flex items-center gap-4 mb-4 ">
      <img
        class="w-24 h-24 object-cover rounded-full "
        :src="coach.image"
        alt="profile-photo"
      />

      <div>
        <h2 class="text-xl font-bold text-gray-800">
          {{ coach.firstname }} {{ coach.lastname }}
        </h2>
        <p class="text-gray-500">
          <strong>Hourly Rate:</strong>
          <span
            class="bg-green-100 text-emerald-800 font-semibold rounded-2xl px-3"
          >
            $ {{ coach.hourlyRate }}
          </span>
        </p>
      </div>
    </div>
    <div class="mb-2">
      <p class="text-gray-700">
        <strong>Specialized Areas:</strong>
      </p>
      <ul class="flex flex-wrap gap-2 ">
        <li
          v-for="area in coach.areas"
          :key="area"
          :class="[
            'text-sm px-3',
            'py-1',
            'mt-1',
            'rounded-full',
            'coach-' + area,
          ]"
        >
          {{ area }}
        </li>
      </ul>
      <p class="text-gray-600 mt-3 italic">
        {{ coach.description }}
      </p>
    </div>
    <div
      :class="[
        {
          'container flex justify-around items-center  p-5 border-2 border-amber-300  rounded-2xl font-semibold ':
            variant == 'detaile',
        },
      ]"
    >
      <div v-if="this.$route.meta.isCoachDetailPage">
        <h1 class="bg-red-100 text-red-500 p-2">Are You interested?</h1>
        <h1 class="m-3">
          <span class="bg-green-100 text-green-500 p-2"> If yes</span> , then
          you can reach out us
        </h1>
      </div>
      <div
        class="flex justify-self-start items-center"
      >
        <RouterLink
          class="text-white bg-gradient-to-br from bg-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-2 text-center me-2 mb-2"
           :to="{
            name:'Contact'
           }"
          >
          Contact
        </RouterLink>
        <RouterLink
          v-if="!this.$route.meta.isCoachDetailPage"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
          :to="{
            name: 'CoachDetails',
            params: {
              id: this.coach.id,
            },
          }"
        >
          View full Profile
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    coach: {
      type: Object,
      required: true,
    },
    variant: {
      type: String,
      default: "default",
    },
  },

  methods: {},
};
</script>
