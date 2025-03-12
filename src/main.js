import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App)
app.use(router); //l'application va utilise le router pour que l'on puisse définir des routes ( Il faut d'abord instancier le router puis faire un mount )
app.mount("#app"); //le mount permet de définir où le html est mis dans la page web ici dans la div app tout le code html y est.