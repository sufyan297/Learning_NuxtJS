<template>
  <div>
    <h1>Hello Nuxt JS!</h1>
    <v-btn color="success" @click.stop="dialog = true">Success: Open Dialog</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
    <hello-world :data="posts"/>


    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          Dialog Title
        </v-card-title>
        <v-card-text>
          <v-select
            :items="select"
            label="Select State..."
            item-value="text"
            v-model="state"
            @change="onStateChange"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import HelloWorld from "~/components/HelloWorld";
import fetch from 'isomorphic-fetch';

export default {
  components: {
    HelloWorld
  },
  data: () => {
    return {
      dialog: false,
      state: null,
      snackbar: false,
      text: '',
      select: [
        { text: 'Gujarat' },
        { text: 'Maharashtra' },
        { text: 'Uttar Pradesh' },
        { text: 'Rajasthan' },
        { text: 'Madhya Pradesh' },
        { text: 'West Bengal' },
        { text: 'Tamilnadu' }
      ]
    }
  },
  methods:{
    onStateChange(state) {
      this.snackbar = true;
      this.text = "You selected " + state;
      console.log("STATE: ", state);
    }
  },
  async asyncData(context) {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await resp.json();
    // console.log("Context: REQ: ", context.req.session);
    // const posts = [
    //   {
    //     id: 1,
    //     title: "Mohammed Sufyan"
    //   }
    // ]
    // console.log("POSTS: ", posts);
    return { posts }; //unstructured
  }
}
</script>
