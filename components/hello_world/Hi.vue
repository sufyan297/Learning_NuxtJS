<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      :pagination.sync="pagination"
      :loading="loading"
      hide-actions
      class="elevation-2"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.title }}</td>
        <td>{{ props.item.body }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>

  </div>
</template>

<script>

export default {
  data: () => {
    return {
      loading: false,
      pagination: {
        rowsPerPage: 10
      },
      headers: [  
        { text: '#', value: 'id' },
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'body' }
      ]
    }
  },
  props: {
    data: Array
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  }
}
</script>

<style>

</style>
