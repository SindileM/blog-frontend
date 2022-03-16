import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let heroCarouselIndicators =("#hero-carousel-indicators")
let heroCarouselItems =('#heroCarousel .carousel-item', true)

// heroCarouselItems.forEach((item, index) => {
//   (index === 0) ?
//   heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
//     heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
// });

createApp(App).use(store).use(router).mount('#app')
