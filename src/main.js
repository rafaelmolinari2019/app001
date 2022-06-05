import Vue from 'vue'
import App from './App.vue'
import Atendimento from "./components/Atendimento.vue";


Vue.config.productionTip = false

Vue.component('pagina-atendimento', Atendimento);


new Vue({
    render: h => h(App),
}).$mount('#app')