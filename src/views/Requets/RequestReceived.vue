<template>
  <div class="container mx-auto mt-10 p-5">
    <div v-if="request.length === 0" class="text-gray-500 text-center">
      No requests have been submitted yet.
    </div>

    <ul class="space-y-6">
      <li
        v-for="req in receivedRequests"
        :key="req.id"
        class="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
      >
        <div class="flex items-center gap-4 mb-3">
          <img
            :src="req.image"
            alt="Coach"
            class="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <h3 class="text-lg font-semibold text-gray-800">
              Coach: {{ req.firstname }} {{ req.lastname }}
            </h3>
            <p class="text-sm text-gray-500">
              Request from:
              <span class="font-medium text-blue-600">{{ req.email }}</span>
            </p>
          </div>
        </div>

        <div class="bg-purple-50 border border-gray-200 p-4 rounded-md">
          <p class=" text-purple-700 italic">"{{ req.message }}"</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    request() {
      return this.$store.state.request;
    },
    coaches() {
      return this.$store.state.coaches;
    },
    receivedRequests() {
      const recRequest = this.request.map((req) => {
        const coach = this.coaches.find((c) => c.id == req.id);
        return Object.assign(req, coach);
      });

      return recRequest;
    },
  },
};
</script>
