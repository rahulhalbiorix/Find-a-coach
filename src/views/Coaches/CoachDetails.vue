<template>       
      <CoachItem variant="detaile"  class="bg-white container mx-auto mt-10"  :coach="coach"></CoachItem>
</template>

<script>
import CoachItem from '../../components/Coach/CoachItem.vue';

export default{
   props:['id'],
   components:{
    CoachItem
   },
   data(){
    return{
        coaches: this.$store.state.coaches,
        //  id: this.$route.params.id   --> we can direct access id using props:true
    }
   },
   computed:{
    coach(){
      return this.coaches.filter(obj=>obj.id == this.id)[0]
    }
   }

}

</script>