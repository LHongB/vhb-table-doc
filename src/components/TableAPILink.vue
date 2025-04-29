<template>
  <router-link class="link" :to="{name: 'VHBAPI', params: {name: 'table'}, query: {filterName: prop}}">{{ prop || name }}</router-link>
</template>

<script>
export default {
  name: 'TableApiLink',
  props: {
    name: String,
    prop: String
  }
}
</script>
