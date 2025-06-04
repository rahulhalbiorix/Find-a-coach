<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <nav>
            <h1>
                <RouterLink to="/"> Find a coach </RouterLink>  
            </h1>
            <ul>
                <li><RouterLink to="/coaches">All Coach</RouterLink></li>
                <li><RouterLink to="/requests">Request</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>