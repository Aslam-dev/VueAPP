<template>
  <div>
   <!--<Index /> -->
  </div>
  <button @click="navigate()"> Home</button>
</template>
<script>
import Index from "@/pages/index.vue";

export default {
  components: {
    Index,
  },
  methods: {
    navigate(){
      this.$router.push("/");
    },
  },
};
</script>
