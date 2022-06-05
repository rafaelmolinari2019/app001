<template>
  <div id="app">
    <Profissional />
    <div><Atendimento /></div>
    <div><Revisao /></div>
  </div>
</template>


<script>
import Profissional from "./components/Profissional.vue";
import Atendimento from "./components/Atendimento.vue";
import Revisao from "./components/Revisao.vue";

export default {
  name: "app",
  components: {
    Profissional,
    Atendimento,
    Revisao,
  },
};
</script>
