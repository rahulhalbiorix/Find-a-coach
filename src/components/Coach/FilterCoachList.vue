<template>
  <div
    class="bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-md rounded-lg p-6 mb-6 border border-blue-200 text-sm font-sans"
  >
    <h2 class="text-lg font-bold text-blue-800 mb-6 tracking-wide">
      Filter Coaches
    </h2>

    <div class="flex flex-wrap gap-6 items-end">
      <!-- Name Filter -->
      <div class="flex flex-col w-full sm:w-48">
        <label for="searchName" class="text-blue-700 font-medium mb-2">Name</label>
        <input
          id="searchName"
          type="text"
          placeholder="Enter name"
          class="px-3 py-1.5 border border-blue-300 rounded-md bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      <!-- Min Rate -->
      <div class="flex flex-col w-full sm:w-36">
        <label for="minRate" class="text-blue-700 font-medium mb-2">Min Rate ($)</label>
        <input
          id="minRate"
          type="number"
          placeholder="Min"
          class="px-3 py-1.5 border border-blue-300 rounded-md bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      <!-- Max Rate -->
      <div class="flex flex-col w-full sm:w-36">
        <label for="maxRate" class="text-blue-700 font-medium mb-2">Max Rate ($)</label>
        <input
          id="maxRate"
          type="number"
          placeholder="Max"
          class="px-3 py-1.5 border border-blue-300 rounded-md bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      <!-- Specialized Areas -->
      <div class="flex flex-col w-full sm:w-auto">
        <label class="text-blue-700 font-medium mb-2">Areas</label>

        <!-- Custom Dropdown -->
        <div class="relative">
          <button
            id="dropdownCheckboxButton"
            type="button"
            @click="showDropdown"
            :class="[
              'w-full',
              'sm:w-auto',
              'px-3',
              'py-1.5',
              'bg-white',
              'border',
              'border-blue-300',
              'rounded-md',
              'shadow-inner',
              'text-blue-700',
              'font-medium',
              'hover:bg-blue-50',
              'focus:outline-none',
              'focus:ring-2',
              'focus:ring-blue-400',
              'focus:border-blue-400',
              'inline-flex',
              'items-center',
              'justify-between',
            ]"
          >
            Select Areas
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <div
            id="dropdownCheckboxMenu"
            v-show="isDropdownVisible"
            class="absolute w-full sm:w-48 bg-white border border-blue-300 rounded-lg shadow-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            style="top: 100%; left: 0;" 
          >
            <ul class="p-3 space-y-3 text-sm text-gray-700">
              <li>
                <div class="flex items-center">
                  <input
                    id="checkbox-item-1"
                    type="checkbox"
                    value="frontend"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                  />
                  <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900">Frontend</label>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <input
                    id="checkbox-item-2"
                    type="checkbox"
                    value="backend"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                  />
                  <label for="checkbox-item-2" class="ms-2 text-sm font-medium text-gray-900">Backend</label>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <input
                    id="checkbox-item-3"
                    type="checkbox"
                    value="career"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                  />
                  <label for="checkbox-item-3" class="ms-2 text-sm font-medium text-gray-900">Career</label>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <input
                    id="checkbox-item-4"
                    type="checkbox"
                    value="fitness"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                  />
                  <label for="checkbox-item-4" class="ms-2 text-sm font-medium text-gray-900">Fitness</label>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <input
                    id="checkbox-item-5"
                    type="checkbox"
                    value="life"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                  />
                  <label for="checkbox-item-5" class="ms-2 text-sm font-medium text-gray-900">Life</label>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <input
                    id="checkbox-item-6"
                    type="checkbox"
                    value="yoga"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                  />
                  <label for="checkbox-item-6" class="ms-2 text-sm font-medium text-gray-900">Yoga</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Reset Button -->
      <div class="ml-auto">
        <button
          class="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded shadow-sm mt-4 sm:mt-0 transition duration-200"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownVisible: false, // Controls dropdown visibility
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible; // Toggle dropdown visibility
    },
  },
};
</script>
