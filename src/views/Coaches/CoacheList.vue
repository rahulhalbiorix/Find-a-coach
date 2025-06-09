<template>
  <div class="container mx-auto">
    <div class="mt-5">
      <FilterCoachList></FilterCoachList>
    </div>

    <div  class="border border-gray-200">
      <div class="py-4 px-10 flex justify-between items-center border-b-2 border-gray-300 "
      >
        <button
          class="text-white bg-gradient-to-br from bg-blue-500 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-300 font-medium rounded text-sm px-5 py-3 text-center me-2 mb-2"
          @click="A"
        >
          Refresh
        </button>
        <button
          class="text-white bg-gradient-to-r from-teal-500 to-teal-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2"
          @click="B"
        >
          Register as a Coach
        </button>
      </div>
      <div class="coach-list grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        <CoachItem  variant="list"  v-for="coach in coaches"  :key="coach.id" :coach="coach">
        </CoachItem>
      </div>
    </div>
  </div>
</template>

<script>

import CoachItem from '/src/components/Coach/CoachItem.vue'
import FilterCoachList from '/src/components/Coach/FilterCoachList.vue'

export default {
  components: {
    CoachItem,
    FilterCoachList
  },

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
