<template>
  <div class="bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-md rounded-lg p-4 mb-6 border border-blue-200 text-sm font-sans">
    <h2 class="text-lg font-bold text-blue-800 mb-4 tracking-wide"> Filter Coaches</h2>

    <div class="flex flex-wrap gap-4 items-end">

      <!-- Name Filter -->
      <div class="flex flex-col w-full sm:w-48">
        <label for="searchName" class="text-blue-700 font-medium mb-1">Name</label>
        <input
          id="searchName"
          type="text"
          placeholder="Enter name"
          class="px-3 py-1.5 border border-blue-300 rounded-md bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      <!-- Min Rate -->
      <div class="flex flex-col w-full sm:w-36">
        <label for="minRate" class="text-blue-700 font-medium mb-1">Min Rate ($)</label>
        <input
          id="minRate"
          type="number"
          placeholder="Min"
          class="px-3 py-1.5 border border-blue-300 rounded-md bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      <!-- Max Rate -->
      <div class="flex flex-col w-full sm:w-36">
        <label for="maxRate" class="text-blue-700 font-medium mb-1">Max Rate ($)</label>
        <input
          id="maxRate"
          type="number"
          placeholder="Max"
          class="px-3 py-1.5 border border-blue-300 rounded-md bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      <!-- Specialized Areas -->
      <div class="flex flex-col w-full sm:w-auto">
        <label class="text-blue-700 font-medium mb-1">Areas</label>
        <div class="flex flex-wrap gap-2 max-w-[400px] text-blue-900">
          <label class="flex items-center space-x-1 bg-white px-2 py-1 rounded shadow-sm hover:bg-blue-50">
            <input type="checkbox" value="frontend" class="accent-blue-600" />
            <span>Frontend</span>
          </label>
          <label class="flex items-center space-x-1 bg-white px-2 py-1 rounded shadow-sm hover:bg-blue-50">
            <input type="checkbox" value="backend" class="accent-blue-600" />
            <span>Backend</span>
          </label>
          <label class="flex items-center space-x-1 bg-white px-2 py-1 rounded shadow-sm hover:bg-blue-50">
            <input type="checkbox" value="career" class="accent-blue-600" />
            <span>Career</span>
          </label>
          <label class="flex items-center space-x-1 bg-white px-2 py-1 rounded shadow-sm hover:bg-blue-50">
            <input type="checkbox" value="fitness" class="accent-blue-600" />
            <span>Fitness</span>
          </label>
          <label class="flex items-center space-x-1 bg-white px-2 py-1 rounded shadow-sm hover:bg-blue-50">
            <input type="checkbox" value="life" class="accent-blue-600" />
            <span>Life</span>
          </label>
          <label class="flex items-center space-x-1 bg-white px-2 py-1 rounded shadow-sm hover:bg-blue-50">
            <input type="checkbox" value="yoga" class="accent-blue-600" />
            <span>Yoga</span>
          </label>
        </div>
      </div>

      <!-- Reset Button -->
      <div class="ml-auto">
        <button
          class="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded shadow-sm mt-2 sm:mt-0 transition duration-200"
        >
          🔄 Reset
        </button>
      </div>

    </div>
  </div>
</template>
