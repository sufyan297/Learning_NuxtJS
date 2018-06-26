<template>
  <div>
    <ol>
      <li v-for="post in data" :key="post.id">
        <div>
          <h3>{{post.id}}</h3>
          <h2>{{post.title}}</h2>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      posts: [{
        id: 1,
        title: 'Sufyan'
      }]
    }
  },
  props: {
    data: Array
  },
  asyncData (context) {
    
    console.log("context: DATA: ", context);
    return true;
  }
}
</script>

<style>

</style>
