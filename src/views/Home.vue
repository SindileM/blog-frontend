<template>
<section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          <!-- Slide 1 -->
          <div class="carousel-item active">
            <div class="carousel-background"><img src="https://i.postimg.cc/g24fLBhn/btslanding2.jpg" alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animate__animated animate__fadeInDown">Welcome to <span>7 Fates BTS</span></h2>
                <p class="animate__animated animate__fadeInUp">Welcome ARMY. This blog is dedicated to BTS. </p>
                <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Get Started</a>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <div class="carousel-background"><img src="https://i.postimg.cc/0Qt4b6KF/btslanding.jpg" alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Get Started</a>
              </div>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="carousel-item">
            <div class="carousel-background"><img src="https://i.postimg.cc/HnBQ9594/btslanding3.jpg" alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Get Started</a>
              </div>
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bi bi-chevron-double-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bi bi-chevron-double-right" aria-hidden="true"></span>
        </a>

      </div>
    </div>
  </section>
</template>

<style>
#hero {
  width: 100%;
  height: 100vh;
  background-color: rgba(21, 27, 26, 0.7);
  overflow: hidden;
  padding: 0;
}
#hero .carousel-item {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#hero .carousel-item::before {
  content: "";
  background-color: rgba(21, 27, 26, 0.7);
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
#hero .carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
#hero .carousel-content {
  text-align: center;
}
#hero h2 {
  color: #fff;
  margin-bottom: 30px;
  font-size: 48px;
  font-weight: 700;
}
#hero p {
  width: 80%;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
  margin: 0 auto 30px auto;
  color: #fff;
}
#hero .carousel-inner .carousel-item {
  transition-property: opacity;
  background-position: center top;
}
#hero .carousel-inner .carousel-item,
#hero .carousel-inner .active.carousel-item-start,
#hero .carousel-inner .active.carousel-item-end {
  opacity: 0;
}
#hero .carousel-inner .active,
#hero .carousel-inner .carousel-item-next.carousel-item-start,
#hero .carousel-inner .carousel-item-prev.carousel-item-end {
  opacity: 1;
  transition: 0.5s;
}
#hero .carousel-inner .carousel-item-next,
#hero .carousel-inner .carousel-item-prev,
#hero .carousel-inner .active.carousel-item-start,
#hero .carousel-inner .active.carousel-item-end {
  left: 0;
  transform: translate3d(0, 0, 0);
}
#hero .carousel-control-prev, #hero .carousel-control-next {
  width: 10%;
}
#hero .carousel-control-next-icon, #hero .carousel-control-prev-icon {
  background: none;
  font-size: 48px;
  line-height: 1;
  width: auto;
  height: auto;
}
#hero .carousel-indicators li {
  cursor: pointer;
  opacity: 1;
}
#hero .carousel-indicators .active {
  background-color: #1bbca3;
}
#hero .btn-get-started {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 50px;
  transition: 0.5s;
  line-height: 1;
  margin: 10px;
  color: #fff;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  border: 2px solid #1bbca3;
}
#hero .btn-get-started:hover {
  background: #1bbca3;
  color: #fff;
  text-decoration: none;
}
@media (max-width: 768px) {
  #hero h2 {
    font-size: 28px;
  }
}
@media (min-width: 1024px) {
  #hero p {
    width: 60%;
  }
  #hero .carousel-control-prev, #hero .carousel-control-next {
    width: 5%;
  }
}

</style>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
