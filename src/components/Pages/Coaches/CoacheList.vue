<template>
    <ul v-for="coach in coaches" >
        <li>
              {{ coach }}
        </li>
    </ul>  

</template>

<script>
export default{
    data(){
        return{
            coaches: this.$store.state.coaches 
        }
    }
}

</script>