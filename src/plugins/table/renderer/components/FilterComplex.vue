<template>
  <div class="my-filter-complex">
    <div class="my-fc-type">
      <vhb-radio v-model="option.data.type" name="fType" label="has">包含</vhb-radio>
      <vhb-radio v-model="option.data.type" name="fType" label="eq">等于</vhb-radio>
    </div>
    <div class="my-fc-name">
      <vhb-input v-model="option.data.name" type="text" placeholder="请输入名称" @input="changeOptionEvent()"></vhb-input>
    </div>
    <div class="my-fc-footer">
      <vhb-button status="primary" @click="confirmEvent">确认</vhb-button>
      <vhb-button @click="resetEvent">重置</vhb-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterComplex',
  props: {
    params: Object
  },
  data () {
    return {
      size: 'mini', // 被所有子组件继承 size
      column: null,
      option: null
    }
  },
  created () {
    this.load()
  },
  methods: {
    load () {
      const { column } = this.params
      const option = column.filters[0]
      this.column = column
      this.option = option
    },
    changeOptionEvent () {
      const { params, option } = this
      const { $panel } = params
      const checked = !!option.data.name
      $panel.changeOption(null, checked, option)
    },
    confirmEvent () {
      const { $panel } = this.params
      $panel.confirmFilter()
    },
    resetEvent () {
      const { $panel } = this.params
      $panel.resetFilter()
    }
  }
}
</script>

<style scoped>
.my-filter-complex {
  width: 260px;
  padding: 5px 15px 10px 15px;
}
.my-filter-complex .my-fc-type {
  padding: 8px 0;
}
.my-filter-complex .my-fc-footer {
  text-align: center;
}
</style>
