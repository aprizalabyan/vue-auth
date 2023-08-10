<template>
  <div>
    <h3>Welcome back {{ username }}</h3>
    <!-- <div class="d-flex mt-4">
      <div v-for="data in dataImg" :key="data.id" class="me-2">
        <img 
          :src="'https://fastly.picsum.photos/id/8/5000/' + data.name"
          width="200px"
          @error="handleError"
        >
        {{ isError }}
      </div>
    </div> -->
  </div>
</template>

<script>
import { getSession } from '@/helpers/session'

export default {
  data(){
    return {
      isError: false,
      didLoad: true,
      dataImg: [
        {
          id: 1,
          name: '3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWu',
        },
        {
          id: 2,
          name: '3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA',
        },
        {
          id: 3,
          name: '3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWus',
        },
      ]
    }
  },
  computed: {
    getSrc(){
      return this.isError ? '@/assets/logo.png' : 'https://fastly.picsum.photos/id/8/5000/333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA'
    },
    username() {
      return getSession().username
    }
  },
  methods: {
    handleError(e){
      e.target.src = 'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM'
      console.log(e.target.src, 'error');
      this.isError = true
      this.didLoad = false
    }
  },
  mounted() {
    console.log(getSession());
  }
}
</script>

<style>

</style>