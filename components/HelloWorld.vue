<template>
  <div>
    <hi :data="data"/>
    This is Render Function
  </div>
</template>

<script>
import Hi from "./hello_world/Hi";
export default {
  components: {
    Hi
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return [{id: 1, title: "Mohammed Sufyan"}]
      }
    }
  }
}
</script>
