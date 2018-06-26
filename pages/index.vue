<template>
  <div>
    <h1>Hello Nuxt JS!</h1>
    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
    <hello-world :data="posts"/>


  </div>
</template>

<script>
import HelloWorld from "~/components/HelloWorld";
import fetch from 'isomorphic-fetch';

export default {
  components: {
    HelloWorld
  },
  async asyncData(context) {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await resp.json();
    console.log("POSTS: ", posts);
    return { posts }; //unstructured
  }
}
</script>
