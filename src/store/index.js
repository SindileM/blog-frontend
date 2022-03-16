import { createStore } from "vuex";
import { auth } from "./auth.module";
import { blog } from "./blog.module";
const store = createStore({
  modules: {
    auth,
    blog
  },
});
export default store;