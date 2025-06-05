<template>
  <div class="coach-list grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
    <div
      v-for="coach in coaches"
      :key="coach.id"
      class="coach-card bg-white rounded-xl p-6 border hover:shadow-2xl transition-shadow duration-300"
    >
      <div class="flex items-center gap-4 mb-4">
        <img
          class="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
          :src=coach.image
          alt="profile-photo"
        />

        <div>
          <h2 class="text-xl font-bold text-gray-800">
            {{ coach.firstname }} {{ coach.lastname }}
          </h2>
          <p class="text-gray-500">
            <strong>Hourly Rate:</strong>
            <span class="text-black font-medium">
              $ {{ coach.hourlyRate }}
            </span>
          </p>
        </div>
      </div>
      <div class="mb-2">
        <p class="text-gray-700"><strong>Specialized Areas:</strong></p>
        <ul class="flex flex-wrap gap-2">
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
        <p class="text-gray-600 mt-3 italic">{{ coach.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coaches: this.$store.state.coaches,
    };
  },
};
</script>

<style>
.coach-frontend {
  background-color: #fef3c7;
  color: #92400e;
}
.coach-backend {
  background-color: #d1fae5;
  color: #065f46;
}
.coach-career {
  background-color: #fce7f3;
  color: #831843;
}
.coach-fitness {
  background-color: #e0f2fe;
  color: #0369a1;
}
.coach-life {
  background-color: #ede9fe;
  color: #5b21b6;
}
.coach-yoga {
  background-color: #ecfdf5;
  color: #047857;
}
</style>
