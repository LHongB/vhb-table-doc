<template>
  <router-link class="link" :to="{name: 'VHBAPI', params: {name: 'virtual-tree'}, query: {filterName: prop}}">{{ prop || name }}</router-link>
</template>

<script>
export default {
  name: 'VirtualTreeApiLink',
  props: {
    name: String,
    prop: String
  }
}
</script>
