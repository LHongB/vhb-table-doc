<template>
  <div>
    <h2>{{ $t('app.aside.nav.modal') }}</h2>

    <p class="tip">
      轻提示框、提示框、弹出窗口，查看 <router-link class="link" :to="{name: 'VHBAPI', params: {name: 'modal'}}">API</router-link>，可以通过 <router-link class="link" :to="{name: 'StartGlobal'}">setup</router-link> 设置全局参数<br>
      对于某些场景如果需要动态创建的窗口，可以通过以下 API 全局调用：<br>
      打开窗口：<br>
      open(options: ModalOptions)<br>
      打开消息框：<br>
      message(options: ModalOptions)<br>
      message(content: string, title?: string)<br>
      打开提示框：<br>
      alert(options: ModalOptions) 打开提示框<br>
      alert(content: string, title?: string)<br>
      打开确认框：<br>
      confirm(options: ModalOptions) 打开确认框<br>
      confirm(content: string, title?: string)<br>
      手动关闭当前活动的窗口：<br>
      close(id?: string)<br>
    </p>

    <p>
      <vhb-button content="默认消息框" @click="openMessage({ content: '消息提示' })"></vhb-button>
      <vhb-button content="info" @click="openMessage({ content: 'info 消息提示', status: 'info' })"></vhb-button>
      <vhb-button content="warning" @click="openMessage({ content: 'warning 消息提示', status: 'warning' })"></vhb-button>
      <vhb-button content="question" @click="openMessage({ content: 'question 消息提示', status: 'question' })"></vhb-button>
      <vhb-button content="success" @click="openMessage({ content: 'success 消息提示', status: 'success' })"></vhb-button>
      <vhb-button content="error" @click="openMessage({ content: 'error 消息提示', status: 'error' })"></vhb-button>
      <vhb-button content="loading" @click="openMessage({ content: 'loading 消息提示', status: 'loading' })"></vhb-button>
      <vhb-button content="自定义图标" @click="openMessage({ content: 'iconStatus 自定义图标', status:'success', iconStatus: 'fa fa-thumbs-up' })"></vhb-button>
      <vhb-button content="不允许重复点击" @click="openMessage({ content: '不允许重复点击', id: 'unique1' })"></vhb-button>
    </p>

    <p>
      <vhb-button content="基本提示框" @click="openAlert({ content: '基本提示框', title: '标题1' })"></vhb-button>
      <vhb-button content="info" @click="openAlert({ content: 'info 提示框', status: 'info' })"></vhb-button>
      <vhb-button content="warning" @click="openAlert({ content: 'warning 提示框', status: 'warning' })"></vhb-button>
      <vhb-button content="question" @click="openAlert({ content: 'question 提示框', status: 'question' })"></vhb-button>
      <vhb-button content="success" @click="openAlert({ content: 'success 提示框', status: 'success' })"></vhb-button>
      <vhb-button content="error" @click="openAlert({ content: 'error 提示框', title:'app.body.msg.error', status: 'error' })"></vhb-button>
      <vhb-button content="loading" @click="openAlert({ content: 'loading 提示框', status: 'loading' })"></vhb-button>
      <vhb-button content="自定义图标" @click="openAlert({ content: 'iconStatus 自定义图标', status:'error', iconStatus: 'fa fa-hand-peace-o' })"></vhb-button>
      <vhb-button content="禁止拖动" @click="openAlert({ content: '禁止后，按住头部无法进行拖动', draggable: false })"></vhb-button>
      <vhb-button content="确认提示框" @click="confirmEvent"></vhb-button>
    </p>

    <p>
      <vhb-button @click="value1 = true">默认尺寸</vhb-button>
      <vhb-modal v-model="value1">
        <template #default>
          <div>默认尺寸</div>
          <div>xxxxxxxxx</div>
          <div>xxxxxxxxxx</div>
        </template>
      </vhb-modal>
      <vhb-button @click="value2 = true" size="medium">中等尺寸</vhb-button>
      <vhb-modal v-model="value2" size="medium">
        <template #default>
          <div>中等尺寸</div>
          <div>xxxxxxxxx</div>
          <div>xxxxxxxxxx</div>
        </template>
      </vhb-modal>
      <vhb-button @click="value3 = true" size="small">小型尺寸</vhb-button>
      <vhb-modal v-model="value3" size="small">
        <template #default>
          <div>小型尺寸</div>
          <div>xxxxxxxxx</div>
          <div>xxxxxxxxxx</div>
        </template>
      </vhb-modal>
      <vhb-button @click="value4 = true" size="mini">超小尺寸</vhb-button>
      <vhb-modal v-model="value4" size="mini">
        <template #default>
          <div>超小尺寸</div>
          <div>xxxxxxxxx</div>
          <div>xxxxxxxxxx</div>
        </template>
      </vhb-modal>
    </p>

    <p>
      <vhb-button content="点击遮罩层可以关闭" @click="openAlert({ content: '点击遮罩层可以关闭', maskClosable: true })"></vhb-button>
      <vhb-button content="按 Escape 键可以关闭" @click="openAlert({ content: '按 Escape 键可以关闭', escClosable: true })"></vhb-button>
      <vhb-button content="锁界面不要遮罩层" @click="openAlert({ content: '锁界面不要遮罩层', mask: false })"></vhb-button>
      <vhb-button content="多窗口、叠加窗口" @click="openAlert({ content: '多窗口、叠加窗口（一旦脱离当前实例，需要配合手动关闭）', lockView: false, mask: false })"></vhb-button>
      <vhb-button content="允许拖动范围超出屏幕" @click="openAlert({ content: '允许拖动范围超出屏幕', marginSize: -500 })"></vhb-button>
    </p>

    <p>
      <vhb-button @click="value5 = true">基本窗口</vhb-button>
      <vhb-modal v-model="value5" width="600" show-footer>
        <template #default>
          <vhb-table
            show-overflow
            auto-resize
            height="300"
            :data="tableData">
            <vhb-column type="seq" width="60"></vhb-column>
            <vhb-column field="name" title="app.body.label.name"></vhb-column>
            <vhb-column field="sex" title="app.body.label.sex"></vhb-column>
            <vhb-column field="age" title="app.body.label.age"></vhb-column>
          </vhb-table>
        </template>
      </vhb-modal>

      <vhb-button @click="value6 = true">窗口初始位置</vhb-button>
      <vhb-modal v-model="value6" width="600" :position="{top: 200, left: 200}">
        <template #default>
          <vhb-table
            show-overflow
            auto-resize
            height="300"
            :data="tableData">
            <vhb-column type="seq" width="60"></vhb-column>
            <vhb-column field="name" title="app.body.label.name"></vhb-column>
            <vhb-column field="sex" title="app.body.label.sex"></vhb-column>
            <vhb-column field="age" title="app.body.label.age"></vhb-column>
          </vhb-table>
        </template>
      </vhb-modal>

      <vhb-button @click="value7 = true">拖动窗口调整大小</vhb-button>
      <vhb-modal v-model="value7" show-zoom resize>
        <template #default>
          <div style="color: red">按住头部移动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住左边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: red">按住右边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
        </template>
      </vhb-modal>

      <vhb-button @click="value8 = true">记忆功能的窗口</vhb-button>
      <vhb-modal v-model="value8" title="记忆功能的窗口" width="600" height="400" show-zoom resize remember>
        <template #default>
          <vhb-form :data="formData3" :rules="formRules3" title-align="right" title-width="60">
            <vhb-form-item title="基本信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'fa fa-address-card-o'}"></vhb-form-item>
            <vhb-form-item title="名称" field="name" span="12">
              <template #default>
                <vhb-input v-model="formData3.name" placeholder="请输入名称"></vhb-input>
              </template>
            </vhb-form-item>
            <vhb-form-item title="昵称" field="nickname" span="12">
              <template #default>
                <vhb-input v-model="formData3.nickname" placeholder="请输入昵称"></vhb-input>
              </template>
            </vhb-form-item>
            <vhb-form-item title="性别" field="sex" span="12">
              <vhb-select v-model="formData3.sex" transfer>
                <vhb-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
              </vhb-select>
            </vhb-form-item>
            <vhb-form-item title="年龄" field="age" span="12">
              <template #default>
                <vhb-input v-model="formData3.age" type="number" placeholder="请输入年龄"></vhb-input>
              </template>
            </vhb-form-item>
            <vhb-form-item title="其他信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'fa fa-info-circle'}"></vhb-form-item>
            <vhb-form-item title="地址" field="address" span="24">
              <template #default>
                <vhb-textarea v-model="formData3.address"></vhb-textarea>
              </template>
            </vhb-form-item>
            <vhb-form-item align="center" span="24">
              <template #default>
                <vhb-button type="submit" status="primary">提交</vhb-button>
                <vhb-button type="reset">重置</vhb-button>
              </template>
            </vhb-form-item>
          </vhb-form>
        </template>
      </vhb-modal>

      <vhb-button @click="value9 = true">最大化显示</vhb-button>
      <vhb-modal v-model="value9" title="最大化显示" width="600" height="400" show-zoom resize remember fullscreen>
        <template #default>
          <div style="color: red">默认最大化显示</div>
          <div style="color: red">按住头部移动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住左边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: red">按住右边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
        </template>
      </vhb-modal>

      <vhb-button @click="value10 = true">阻止关闭</vhb-button>
      <vhb-modal v-model="value10" title="阻止关闭" width="800" height="400" :before-hide-method="beforeHideMethod" show-zoom resize>
        <template #default>
          <vhb-table
            border
            resizable
            show-overflow
            auto-resize
            height="auto"
            :data="tableData">
            <vhb-column type="seq" width="60"></vhb-column>
            <vhb-column field="name" title="app.body.label.name"></vhb-column>
            <vhb-column field="sex" title="app.body.label.sex"></vhb-column>
            <vhb-column field="age" title="app.body.label.age"></vhb-column>
          </vhb-table>
        </template>
      </vhb-modal>

      <vhb-button @click="value11 = true">完整功能的窗口（移动、拖动、状态保存）</vhb-button>
      <vhb-modal v-model="value11" id="myModal6" width="800" height="400" min-width="460" min-height="320" show-zoom resize remember storage transfer>
        <template #title>
          <span style="color: red;">完整功能的窗口（移动、拖动、状态保存）</span>
          <span style="color: red;">通过设置 transfer 将弹框容器插入 body</span>
        </template>
        <template #default>
          <vhb-grid
            border
            resizable
            show-overflow
            auto-resize
            height="auto"
            :pager-config="tablePage"
            :proxy-config="tableProxy"
            :columns="tableColumn"
            :toolbar-config="tableToolbar"></vhb-grid>
        </template>
      </vhb-modal>
    </p>

    <pre>
      <pre-code>
        | Escape | 如果开启配置，则支持关闭窗口 |
      </pre-code>
    </pre>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import VHBTable from 'vhb-table'

export default {
  data  () {
    return {
      value1: false,
      value2: false,
      value3: false,
      value4: false,
      value5: false,
      value6: false,
      value7: false,
      value8: false,
      value9: false,
      value10: false,
      value11: false,
      sexList: [
        { label: '', value: '' },
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ],
      formData3: {
        name: '',
        nickname: '',
        sex: '',
        age: 26,
        address: null
      },
      formRules3: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        nickname: [
          { required: true, message: '请输入昵称' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ]
      },
      tablePage: {
        pageSize: 10
      },
      tableProxy: {
        props: {
          result: 'result',
          total: 'page.total'
        },
        ajax: {
          query: () => {
            return new Promise(resolve => {
              const list = [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }
              ]
              resolve({
                result: list,
                page: {
                  total: 140
                }
              })
            })
          }
        }
      },
      tableToolbar: {
        buttons: [
          { code: 'myBtn1', name: '按钮1' },
          { code: 'myBtn2', name: '按钮2' }
        ],
        refresh: true,
        custom: true
      },
      tableColumn: [
        { type: 'checkbox', width: 50 },
        { type: 'seq', width: 60 },
        { field: 'name', title: 'Name' },
        { field: 'nickname', title: 'Nickname' },
        {
          field: 'role',
          title: 'Role',
          filters: [
            { label: '前端', value: '前端' },
            { label: '后端', value: '后端' },
            { label: '设计师', value: '设计师' },
            { label: '管理员', value: '管理员' },
            { label: '项目经理', value: '项目经理' },
            { label: '测试', value: '测试' },
            { label: '美工', value: '美工' },
            { label: '数据库', value: '数据库' }
          ]
        },
        { field: 'describe', title: 'Describe' }
      ],
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
      ],
      demoCodes: [
        `
        <p>
          <vhb-button content="默认消息框" @click="openMessage({ content: '消息提示' })"></vhb-button>
          <vhb-button content="info" @click="openMessage({ content: 'info 消息提示', status: 'info' })"></vhb-button>
          <vhb-button content="warning" @click="openMessage({ content: 'warning 消息提示', status: 'warning' })"></vhb-button>
          <vhb-button content="question" @click="openMessage({ content: 'question 消息提示', status: 'question' })"></vhb-button>
          <vhb-button content="success" @click="openMessage({ content: 'success 消息提示', status: 'success' })"></vhb-button>
          <vhb-button content="error" @click="openMessage({ content: 'error 消息提示', status: 'error' })"></vhb-button>
          <vhb-button content="loading" @click="openMessage({ content: 'loading 消息提示', status: 'loading' })"></vhb-button>
          <vhb-button content="自定义图标" @click="openMessage({ content: 'iconStatus 自定义图标', status:'success', iconStatus: 'fa fa-thumbs-up' })"></vhb-button>
          <vhb-button content="不允许重复点击" @click="openMessage({ content: '不允许重复点击', id: 'unique1' })"></vhb-button>
        </p>

        <p>
          <vhb-button content="基本提示框" @click="openAlert({ content: '基本提示框', title: '标题1' })"></vhb-button>
          <vhb-button content="info" @click="openAlert({ content: 'info 提示框', status: 'info' })"></vhb-button>
          <vhb-button content="warning" @click="openAlert({ content: 'warning 提示框', status: 'warning' })"></vhb-button>
          <vhb-button content="question" @click="openAlert({ content: 'question 提示框', status: 'question' })"></vhb-button>
          <vhb-button content="success" @click="openAlert({ content: 'success 提示框', status: 'success' })"></vhb-button>
          <vhb-button content="error" @click="openAlert({ content: 'error 提示框', title:'app.body.msg.error', status: 'error' })"></vhb-button>
          <vhb-button content="loading" @click="openAlert({ content: 'loading 提示框', status: 'loading' })"></vhb-button>
          <vhb-button content="自定义图标" @click="openAlert({ content: 'iconStatus 自定义图标', status:'error', iconStatus: 'fa fa-hand-peace-o' })"></vhb-button>
          <vhb-button content="禁止拖动" @click="openAlert({ content: '禁止后，按住头部无法进行拖动', draggable: false })"></vhb-button>
          <vhb-button content="确认提示框" @click="confirmEvent"></vhb-button>
        </p>

        <p>
          <vhb-button @click="value1 = true">默认尺寸</vhb-button>
          <vhb-modal v-model="value1">
            <template #default>
              <div>默认尺寸</div>
              <div>xxxxxxxxx</div>
              <div>xxxxxxxxxx</div>
            </template>
          </vhb-modal>
          <vhb-button @click="value2 = true" size="medium">中等尺寸</vhb-button>
          <vhb-modal v-model="value2" size="medium">
            <template #default>
              <div>中等尺寸</div>
              <div>xxxxxxxxx</div>
              <div>xxxxxxxxxx</div>
            </template>
          </vhb-modal>
          <vhb-button @click="value3 = true" size="small">小型尺寸</vhb-button>
          <vhb-modal v-model="value3" size="small">
            <template #default>
              <div>小型尺寸</div>
              <div>xxxxxxxxx</div>
              <div>xxxxxxxxxx</div>
            </template>
          </vhb-modal>
          <vhb-button @click="value4 = true" size="mini">超小尺寸</vhb-button>
          <vhb-modal v-model="value4" size="mini">
            <template #default>
              <div>超小尺寸</div>
              <div>xxxxxxxxx</div>
              <div>xxxxxxxxxx</div>
            </template>
          </vhb-modal>
        </p>

        <<p>
          <vhb-button content="点击遮罩层可以关闭" @click="openAlert({ content: '点击遮罩层可以关闭', maskClosable: true })"></vhb-button>
          <vhb-button content="按 Escape 键可以关闭" @click="openAlert({ content: '按 Escape 键可以关闭', escClosable: true })"></vhb-button>
          <vhb-button content="锁界面不要遮罩层" @click="openAlert({ content: '锁界面不要遮罩层', mask: false })"></vhb-button>
          <vhb-button content="多窗口、叠加窗口" @click="openAlert({ content: '多窗口、叠加窗口（一旦脱离当前实例，需要配合手动关闭）', lockView: false, mask: false })"></vhb-button>
          <vhb-button content="允许拖动范围超出屏幕" @click="openAlert({ content: '允许拖动范围超出屏幕', marginSize: -500 })"></vhb-button>
        </p>

        <p>
          <vhb-button @click="value5 = true">基本窗口</vhb-button>
          <vhb-modal v-model="value5" width="600" show-footer>
            <template #default>
              <vhb-table
                show-overflow
                auto-resize
                height="300"
                :data="tableData">
                <vhb-column type="seq" width="60"></vhb-column>
                <vhb-column field="name" title="app.body.label.name"></vhb-column>
                <vhb-column field="sex" title="app.body.label.sex"></vhb-column>
                <vhb-column field="age" title="app.body.label.age"></vhb-column>
              </vhb-table>
            </template>
          </vhb-modal>

          <vhb-button @click="value6 = true">窗口初始位置</vhb-button>
          <vhb-modal v-model="value6" width="600" :position="{top: 200, left: 200}">
            <template #default>
              <vhb-table
                show-overflow
                auto-resize
                height="300"
                :data="tableData">
                <vhb-column type="seq" width="60"></vhb-column>
                <vhb-column field="name" title="app.body.label.name"></vhb-column>
                <vhb-column field="sex" title="app.body.label.sex"></vhb-column>
                <vhb-column field="age" title="app.body.label.age"></vhb-column>
              </vhb-table>
            </template>
          </vhb-modal>

          <vhb-button @click="value7 = true">拖动窗口调整大小</vhb-button>
          <vhb-modal v-model="value7" show-zoom resize>
            <template #default>
              <div style="color: red">按住头部移动！！！！！！！！！！！！！！！</div>
              <div style="color: blue">按住左边距拖动！！！！！！！！！！！！！！！</div>
              <div style="color: red">按住右边距拖动！！！！！！！！！！！！！！！</div>
              <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
              <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
              <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
            </template>
          </vhb-modal>

          <vhb-button @click="value8 = true">记忆功能的窗口</vhb-button>
          <vhb-modal v-model="value8" title="记忆功能的窗口" width="600" height="400" show-zoom resize remember>
            <template #default>
              <vhb-form :data="formData3" :rules="formRules3" title-align="right" title-width="60">
                <vhb-form-item title="基本信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'fa fa-address-card-o'}"></vhb-form-item>
                <vhb-form-item title="名称" field="name" span="12">
                  <template #default>
                    <vhb-input v-model="formData3.name" placeholder="请输入名称"></vhb-input>
                  </template>
                </vhb-form-item>
                <vhb-form-item title="昵称" field="nickname" span="12">
                  <template #default>
                    <vhb-input v-model="formData3.nickname" placeholder="请输入昵称"></vhb-input>
                  </template>
                </vhb-form-item>
                <vhb-form-item title="性别" field="sex" span="12">
                  <vhb-select v-model="formData3.sex" transfer>
                    <vhb-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
                  </vhb-select>
                </vhb-form-item>
                <vhb-form-item title="年龄" field="age" span="12">
                  <template #default>
                    <vhb-input v-model="formData3.age" type="number" placeholder="请输入年龄"></vhb-input>
                  </template>
                </vhb-form-item>
                <vhb-form-item title="其他信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'fa fa-info-circle'}"></vhb-form-item>
                <vhb-form-item title="地址" field="address" span="24">
                  <template #default>
                    <vhb-textarea v-model="formData3.address"></vhb-textarea>
                  </template>
                </vhb-form-item>
                <vhb-form-item align="center" span="24">
                  <template #default>
                    <vhb-button type="submit" status="primary">提交</vhb-button>
                    <vhb-button type="reset">重置</vhb-button>
                  </template>
                </vhb-form-item>
              </vhb-form>
            </template>
          </vhb-modal>

          <vhb-button @click="value9 = true">最大化显示</vhb-button>
          <vhb-modal v-model="value9" title="最大化显示" width="600" height="400" show-zoom resize remember fullscreen>
            <template #default>
              <div style="color: red">默认最大化显示</div>
              <div style="color: red">按住头部移动！！！！！！！！！！！！！！！</div>
              <div style="color: blue">按住左边距拖动！！！！！！！！！！！！！！！</div>
              <div style="color: red">按住右边距拖动！！！！！！！！！！！！！！！</div>
              <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
              <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
              <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
            </template>
          </vhb-modal>

          <vhb-button @click="value10 = true">阻止关闭</vhb-button>
          <vhb-modal v-model="value10" title="阻止关闭" width="800" height="400" :before-hide-method="beforeHideMethod" show-zoom resize>
            <template #default>
              <vhb-table
                border
                resizable
                show-overflow
                auto-resize
                height="auto"
                :data="tableData">
                <vhb-column type="seq" width="60"></vhb-column>
                <vhb-column field="name" title="app.body.label.name"></vhb-column>
                <vhb-column field="sex" title="app.body.label.sex"></vhb-column>
                <vhb-column field="age" title="app.body.label.age"></vhb-column>
              </vhb-table>
            </template>
          </vhb-modal>

          <vhb-button @click="value11 = true">完整功能的窗口（移动、拖动、状态保存）</vhb-button>
          <vhb-modal v-model="value11" id="myModal6" width="800" height="400" min-width="460" min-height="320" show-zoom resize remember storage transfer>
            <template #title>
              <span style="color: red;">完整功能的窗口（移动、拖动、状态保存）</span>
              <span style="color: red;">通过设置 transfer 将弹框容器插入 body</span>
            </template>
            <template #default>
              <vhb-grid
                border
                resizable
                show-overflow
                auto-resize
                height="auto"
                :pager-config="tablePage"
                :proxy-config="tableProxy"
                :columns="tableColumn"
                :toolbar-config="tableToolbar"></vhb-grid>
            </template>
          </vhb-modal>
        </p>
        `,
        `
        export default {
          data () {
            return {
              value1: false,
              value2: false,
              value3: false,
              value4: false,
              value5: false,
              value6: false,
              value7: false,
              value8: false,
              value9: false,
              value10: false,
              value11: false,
              sexList: [
                { label: '', value: '' },
                { label: '女', value: '0' },
                { label: '男', value: '1' }
              ],
              formData3: {
                name: '',
                nickname: '',
                sex: '',
                age: 26,
                address: null
              },
              formRules3: {
                name: [
                  { required: true, message: '请输入名称' },
                  { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
                ],
                nickname: [
                  { required: true, message: '请输入昵称' }
                ],
                sex: [
                  { required: true, message: '请选择性别' }
                ]
              },
              tablePage: {
                pageSize: 10
              },
              tableProxy: {
                props: {
                  result: 'result',
                  total: 'page.total'
                },
                ajax: {
                  query: () => {
                    return new Promise(resolve => {
                      const list = [
                        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
                        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
                        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }
                      ]
                      resolve({
                        result: list,
                        page: {
                          total: 140
                        }
                      })
                    })
                  }
                }
              },
              tableToolbar: {
                buttons: [
                  { code: 'myBtn1', name: '按钮1' },
                  { code: 'myBtn2', name: '按钮2' }
                ],
                refresh: true,
                custom: true
              },
              tableColumn: [
                { type: 'checkbox', width: 50 },
                { type: 'seq', width: 60 },
                { field: 'name', title: 'Name' },
                { field: 'nickname', title: 'Nickname' },
                {
                  field: 'role',
                  title: 'Role',
                  filters: [
                    { label: '前端', value: '前端' },
                    { label: '后端', value: '后端' },
                    { label: '设计师', value: '设计师' },
                    { label: '管理员', value: '管理员' },
                    { label: '项目经理', value: '项目经理' },
                    { label: '测试', value: '测试' },
                    { label: '美工', value: '美工' },
                    { label: '数据库', value: '数据库' }
                  ]
                },
                { field: 'describe', title: 'Describe' }
              ]
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
              ]
            }
          },
          methods: {
            async beforeHideMethod () {
              const type = await VHBTable.modal.confirm('您确定要关闭吗？')
              if (type === 'confirm') {
                VHBTable.modal.message({ content: \`允许关闭 \${type}\`, status: 'success' })
              } else {
                VHBTable.modal.message({ content: \`禁止关闭 \${type}\`, status: 'error' })
                return new Error()
              }
            },
            confirmEvent () {
              VHBTable.modal.confirm('您确定要删除吗？').then(type => {
                VHBTable.modal.message({ content: \`点击了 \${type}\` })
              })
            },
            openMessage (options) {
              VHBTable.modal.message(options)
            },
            openAlert (options) {
              VHBTable.modal.alert(options)
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    async beforeHideMethod () {
      const type = await VHBTable.modal.confirm('您确定要关闭吗？')
      if (type === 'confirm') {
        VHBTable.modal.message({ content: `允许关闭 ${type}`, status: 'success' })
      } else {
        VHBTable.modal.message({ content: `禁止关闭 ${type}`, status: 'error' })
        return new Error()
      }
    },
    confirmEvent () {
      VHBTable.modal.confirm('您确定要删除吗？').then(type => {
        VHBTable.modal.message({ content: `点击了 ${type}` })
      })
    },
    openMessage (options) {
      VHBTable.modal.message(options)
    },
    openAlert (options) {
      VHBTable.modal.alert(options)
    }
  }
}
</script>
