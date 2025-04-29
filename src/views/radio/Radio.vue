<template>
  <div>
    <h2>{{ $t('app.aside.nav.radio') }}</h2>
    <p class="tip">单选框、单选祖、单选按钮</p>

    <p>
      <vhb-radio name="n1" v-model="value1" label="1" content="默认尺寸"></vhb-radio>
      <vhb-radio name="n1" v-model="value1" label="2" content="中等尺寸" size="medium"></vhb-radio>
      <vhb-radio name="n1" v-model="value1" label="3" content="小型尺寸" size="small"></vhb-radio>
      <vhb-radio name="n1" v-model="value1" label="4" content="超小尺寸" size="mini"></vhb-radio>
    </p>

    <p>
      <vhb-radio name="n2" v-model="value2" label="1" content="单选1"></vhb-radio>
      <vhb-radio name="n2" v-model="value2" label="2" content="禁用2" disabled></vhb-radio>
      <vhb-radio name="n2" v-model="value2" label="3" content="单选3"></vhb-radio>
    </p>

    <p>
      <vhb-radio-group v-model="value3">
        <vhb-radio label="1" content="HTML"></vhb-radio>
        <vhb-radio label="2" content="CSS"></vhb-radio>
        <vhb-radio label="3" content="Javascript"></vhb-radio>
        <vhb-radio label="4" content="SASS"></vhb-radio>
        <vhb-radio label="5" content="LESS"></vhb-radio>
      </vhb-radio-group>
    </p>

    <p>
      <vhb-radio-group v-model="value8" :strict="false">
        <vhb-radio label="1" content="支持取消1"></vhb-radio>
        <vhb-radio label="2" content="支持取消2"></vhb-radio>
        <vhb-radio label="3" content="支持取消3"></vhb-radio>
      </vhb-radio-group>
    </p>

    <p>
      <vhb-radio-group v-model="value4">
        <vhb-radio-button label="1" content="按钮1"></vhb-radio-button>
        <vhb-radio-button label="2" content="按钮2"></vhb-radio-button>
        <vhb-radio-button label="3" content="按钮3"></vhb-radio-button>
      </vhb-radio-group>
      <vhb-radio-group v-model="value5" size="medium">
        <vhb-radio-button label="1" content="按钮1"></vhb-radio-button>
        <vhb-radio-button label="2" content="按钮2"></vhb-radio-button>
        <vhb-radio-button label="3" content="按钮3"></vhb-radio-button>
      </vhb-radio-group>
      <vhb-radio-group v-model="value6" size="small" :strict="false">
        <vhb-radio-button label="1" content="按钮1"></vhb-radio-button>
        <vhb-radio-button label="2" content="按钮2"></vhb-radio-button>
        <vhb-radio-button label="3" content="按钮3"></vhb-radio-button>
      </vhb-radio-group>
      <vhb-radio-group v-model="value7" size="mini" :strict="false">
        <vhb-radio-button label="1" content="按钮1"></vhb-radio-button>
        <vhb-radio-button label="2" content="按钮2"></vhb-radio-button>
        <vhb-radio-button label="3" content="按钮3"></vhb-radio-button>
      </vhb-radio-group>
    </p>

    <pre>
      <pre-code>
        | Tab | 切换到上一个 |
        | Shift + Tab | 切换到下一个 |
        | Arrow Up ↑ | 如果在分组内则移动到上一个选项 |
        | Arrow Left ← | 如果在分组内则移动到上一个选项 |
        | Arrow Down ↓ | 如果在分组内则移动到下一个选项 |
        | Arrow Right → | 如果在分组内则移动到下一个选项 |
        | Spacebar | 按下勾选 |
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
export default {
  data  () {
    return {
      value1: null,
      value2: '2',
      value3: '3',
      value4: null,
      value5: null,
      value6: '1',
      value7: '1',
      value8: '',
      demoCodes: [
        `
        <p>
          <vhb-radio name="n1" v-model="value1" label="1" content="默认尺寸"></vhb-radio>
          <vhb-radio name="n1" v-model="value1" label="2" content="中等尺寸" size="medium"></vhb-radio>
          <vhb-radio name="n1" v-model="value1" label="3" content="小型尺寸" size="small"></vhb-radio>
          <vhb-radio name="n1" v-model="value1" label="4" content="超小尺寸" size="mini"></vhb-radio>
        </p>

        <p>
          <vhb-radio name="n2" v-model="value2" label="1" content="单选1"></vhb-radio>
          <vhb-radio name="n2" v-model="value2" label="2" content="禁用2" disabled></vhb-radio>
          <vhb-radio name="n2" v-model="value2" label="3" content="单选3"></vhb-radio>
        </p>

        <p>
          <vhb-radio-group v-model="value3">
            <vhb-radio label="1" content="HTML"></vhb-radio>
            <vhb-radio label="2" content="CSS"></vhb-radio>
            <vhb-radio label="3" content="Javascript"></vhb-radio>
            <vhb-radio label="4" content="SASS"></vhb-radio>
            <vhb-radio label="5" content="LESS"></vhb-radio>
          </vhb-radio-group>
        </p>

        <p>
          <vhb-radio-group v-model="value8" :strict="false">
            <vhb-radio label="1" content="支持取消1"></vhb-radio>
            <vhb-radio label="2" content="支持取消2"></vhb-radio>
            <vhb-radio label="3" content="支持取消3"></vhb-radio>
          </vhb-radio-group>
        </p>

        <p>
          <vhb-radio-group v-model="value4">
            <vhb-radio-button label="1" content="按钮1"></vhb-radio-button>
            <vhb-radio-button label="2" content="按钮2"></vhb-radio-button>
            <vhb-radio-button label="3" content="按钮3"></vhb-radio-button>
          </vhb-radio-group>
          <vhb-radio-group v-model="value5" size="medium">
            <vhb-radio-button label="1" content="按钮1"></vhb-radio-button>
            <vhb-radio-button label="2" content="按钮2"></vhb-radio-button>
            <vhb-radio-button label="3" content="按钮3"></vhb-radio-button>
          </vhb-radio-group>
          <vhb-radio-group v-model="value6" size="small" :strict="false">
            <vhb-radio-button label="1" content="按钮1"></vhb-radio-button>
            <vhb-radio-button label="2" content="按钮2"></vhb-radio-button>
            <vhb-radio-button label="3" content="按钮3"></vhb-radio-button>
          </vhb-radio-group>
          <vhb-radio-group v-model="value7" size="mini" :strict="false">
            <vhb-radio-button label="1" content="按钮1"></vhb-radio-button>
            <vhb-radio-button label="2" content="按钮2"></vhb-radio-button>
            <vhb-radio-button label="3" content="按钮3"></vhb-radio-button>
          </vhb-radio-group>
        </p>
        `,
        `
        export default {
          data () {
            return {
              value1: null,
              value2: '2',
              value3: '3',
              value4: null,
              value5: null,
              value6: '1',
              value7: '1',
              value8: ''
            }
          }
        }
        `
      ]
    }
  }
}
</script>
