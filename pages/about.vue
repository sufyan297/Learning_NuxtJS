<template>
  <div>
    <h1>Getting Data From Server Side</h1>
    <h4>Looks good!</h4>
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
    console.log("Context: REQ: ", context.req.session);
    console.log("Request Data: ", context.req.data);
    const posts = context.req.data;
    console.log("POSTS: ", posts);
    return { posts }; //unstructured
  }
}
</script>
