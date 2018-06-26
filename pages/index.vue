<template>
  <div>
    <h1>Hello Nuxt JS!</h1>
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
