<template>
  <div class="footer">
      <div class="fit">

<section class="links-wrapper">
          <section class="footer-links">
              <h1>Help</h1>
              <router-link to="">Contact Us</router-link>
              <router-link to="">Payments</router-link>
              <router-link to="">Shipping</router-link>
              <router-link to="">FAQ</router-link>
          </section>

          <section class="footer-links">
              <h1>About</h1>
              <router-link to="">History</router-link>
              <router-link to="">Sustainability</router-link>
              <router-link to="">Careers</router-link>
          </section>
</section>

<section class="social-media">
    <img src="@/assets/sinuslogo.svg" alt="" class="sinus-logo">

    <article class="media-icons">
        <img src="@/assets/twitterlogo.svg" alt="">
        <img src="@/assets/instagramlogo.svg" alt="">
        <img src="@/assets/facebooklogo.svg" alt="">

    </article>
</section>

      </div>
  </div>
</template>

<style lang="scss" scoped>
h1{
    margin: 0;
}
.footer{
    height: 400px;

}
.fit{
    padding: 0rem 5rem;
    background-image: url('../assets/tom-morbey-QJz32ZuCArg-unsplash.jpg');
    background-position-y: 46%;
    background-position-x: 60%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
}
.links-wrapper{
    display: flex;
    justify-content: space-between;
    align-content:flex-start;
    width: 19rem;
}
.footer-links{
    display: flex;
    flex-direction: column;
    width: 1rem;
}
a {
  text-decoration: none;
  color: inherit;
}

.social-media{
    width: 20rem;
    justify-self: right;
}
.media-icons{
    padding-top: 3rem;
    display: flex;
    justify-content: space-around;
}
</style>