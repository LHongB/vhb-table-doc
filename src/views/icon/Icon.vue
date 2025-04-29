<template>
  <div>
    <h2>{{ $t('app.aside.nav.icon') }}</h2>
    <p class="tip">内置轻量级的 css 图标，可以通过 <router-link class="link" :to="{name: 'StartIcons'}">setup</router-link> 替换为 font 图标，例如第三方图标库：font-awesome、inconfont</p>

    <h3>{{ $t('使用方法') }}</h3>
    <p class="">直接通过设置类名为 vhb-icon--edit-outline 来使用即可。例如：</p>
    <demo-block>
      <div slot="source">
        <i class="vhb-icon--edit-outline"></i>
        <i class="vhb-icon--refresh"></i>
        <i class="vhb-icon--print"></i>
        <vhb-button status="primary" icon="vhb-icon--search">图标按钮</vhb-button>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[0] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('图标集合') }}</h3>
    <ul class="vhb-row icon-list" title="点击复制内容">
      <li class="vhb-col--4" v-for="item in list" :key="item.icon" @click="copyEvent(item)">
        <i :class="item.icon"></i>
        <div class="title">{{ item.icon }}</div>
      </li>
    </ul>

  </div>
</template>

<script>
import XEClipboard from 'xe-clipboard'
import VHBTable from 'vhb-table'

export default {
  data () {
    return {
      list: [
        {
          icon: 'vhb-icon--caret-top'
        },
        {
          icon: 'vhb-icon--caret-bottom'
        },
        {
          icon: 'vhb-icon--caret-left'
        },
        {
          icon: 'vhb-icon--caret-right'
        },
        {
          icon: 'vhb-icon--arrow-top'
        },
        {
          icon: 'vhb-icon--arrow-bottom'
        },
        {
          icon: 'vhb-icon--arrow-left'
        },
        {
          icon: 'vhb-icon--arrow-right'
        },
        {
          icon: 'vhb-icon--d-arrow-left'
        },
        {
          icon: 'vhb-icon--d-arrow-right'
        },
        {
          icon: 'vhb-icon--menu'
        },
        {
          icon: 'vhb-icon--edit-outline'
        },
        {
          icon: 'vhb-icon--more'
        },
        {
          icon: 'vhb-icon--check'
        },
        {
          icon: 'vhb-icon--close'
        },
        {
          icon: 'vhb-icon--plus'
        },
        {
          icon: 'vhb-icon--minus'
        },
        {
          icon: 'vhb-icon--refresh'
        },
        {
          icon: 'vhb-icon--refresh roll'
        },
        {
          icon: 'vhb-icon--funnel'
        },
        {
          icon: 'vhb-icon--question'
        },
        {
          icon: 'vhb-icon--info'
        },
        {
          icon: 'vhb-icon--warning'
        },
        {
          icon: 'vhb-icon--success'
        },
        {
          icon: 'vhb-icon--error'
        },
        {
          icon: 'vhb-icon--remove'
        },
        {
          icon: 'vhb-icon--circle-plus'
        },
        {
          icon: 'vhb-icon--zoomin'
        },
        {
          icon: 'vhb-icon--zoomout'
        },
        {
          icon: 'vhb-icon--upload'
        },
        {
          icon: 'vhb-icon--download'
        },
        {
          icon: 'vhb-icon--eye'
        },
        {
          icon: 'vhb-icon--eye-slash'
        },
        {
          icon: 'vhb-icon--calendar'
        },
        {
          icon: 'vhb-icon--dot'
        },
        {
          icon: 'vhb-icon--print'
        },
        {
          icon: 'vhb-icon--search'
        }
      ],
      demoCodes: [
        `
        <i class="vhb-icon--edit-outline"></i>
        <i class="vhb-icon--refresh"></i>
        <i class="vhb-icon--print"></i>
        <vhb-button status="primary" icon="vhb-icon--search">图标按钮</vhb-button>
        `
      ]
    }
  },
  methods: {
    copyEvent ({ icon }) {
      if (XEClipboard.copy(icon)) {
        VHBTable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.source{
  i{
    color: #606266;
    margin-right:40px;
    font-size: 26px;
    vertical-align: middle;
  }
}

.icon-list {
  font-size: 26px;
  text-align: center;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  overflow: hidden;
  margin: 0;
  &:after {
    content: "";
    clear: both;
  }
  & > li {
    height: 100px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    padding-top: 10px;
    & > i {
      color: #606266;
      border-color: #606266;
    }
    &:hover {
      & > i {
        color: #5CB6FF;
        border-color: #5CB6FF;
      }
    }
    .title {
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
</style>
