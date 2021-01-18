<template>
  <div class="container-fluid p-0 m-0 overflow-hidden">
    <div class="row">
      <div class="col-sm-12">
        <banner>
          <template v-slot:image>
              <div class="banner__overlay"></div>
              <img src="http://via.placeholder.com/1920x650" class="banner__image --display-desktop" alt="Banner Image" title="Banner Image" />
              <img src="http://via.placeholder.com/600x600" class="banner__image --display-mobile" alt="Banner Image" title="Banner Image" />
          </template>
          <template v-slot:title>
            <h1 class="banner__title">Hi Developer!</h1>
          </template>
          <template v-slot:content>
            <h3 class="banner__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          </template>
        </banner>
      </div>
      <div class="col-sm-12">
        <div class="d-flex flex-xl-row flex-lg-row flex-md-row  flex-md-row flex-column justify-content-center align-center p-4">
          <card v-for="service in services" :key="service.id">
            <template v-slot:image>
              <img v-if="service.image === ''" src="http://via.placeholder.com/400x300" class="card-img-top" alt="Content Image" title="Content Image" />
              <img v-else :src="service.image" class="card-img-top" alt="Content Image" title="Content Image" />
            </template>
            <template v-slot:text>
              <p class="card-text">{{service.content}}</p>
            </template>
            <template v-slot:footer>
              <button type="button" class="card__button">Read More</button>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Banner from '../components/Banner.vue'

export default {
  components: {
    Card,
    Banner
  },
  data () {
    return {
      services: [
        {
          id: 1,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: 'http://via.placeholder.com/400x300'
        },
        {
          id: 2,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'http://via.placeholder.com/400x300'
        },
        {
          id: 3,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
          image: 'http://via.placeholder.com/400x300'
        },
      ]
    }
  }
}
</script>
