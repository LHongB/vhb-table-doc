<template>
  <div>
    <h2>{{ $t('app.aside.nav.checkbox') }}</h2>
    <p class="tip">复选框、复选组</p>

    <p>
      <vhb-checkbox v-model="value1" content="默认尺寸"></vhb-checkbox>
      <vhb-checkbox v-model="value2" size="medium" content="中等尺寸"></vhb-checkbox>
      <vhb-checkbox v-model="value3" size="small" content="小型尺寸"></vhb-checkbox>
      <vhb-checkbox v-model="value4" size="mini" content="超小尺寸"></vhb-checkbox>
      <vhb-checkbox v-model="value5" content="默认尺寸" indeterminate></vhb-checkbox>
      <vhb-checkbox v-model="value6" size="medium" content="中等尺寸" indeterminate></vhb-checkbox>
      <vhb-checkbox v-model="value7" size="small" content="小型尺寸" indeterminate></vhb-checkbox>
      <vhb-checkbox v-model="value8" size="mini" content="超小尺寸" indeterminate></vhb-checkbox>
    </p>

    <p>
      <vhb-checkbox v-model="value9" content="复选1"></vhb-checkbox>
      <vhb-checkbox v-model="value10" content="复选2" disabled></vhb-checkbox>
      <vhb-checkbox v-model="value11" content="自定义值" checked-value="1" unchecked-value="0"></vhb-checkbox>
    </p>

    <p>
      <vhb-checkbox-group v-model="value12">
        <vhb-checkbox label="1" content="HTML"></vhb-checkbox>
        <vhb-checkbox label="2" content="CSS"></vhb-checkbox>
        <vhb-checkbox label="3" content="Javascript"></vhb-checkbox>
        <vhb-checkbox label="4" content="SASS"></vhb-checkbox>
        <vhb-checkbox label="5" content="LESS"></vhb-checkbox>
      </vhb-checkbox-group>
    </p>

    <pre>
      <pre-code>
        | Tab | 切换到上一个 |
        | Shift + Tab | 切换到下一个 |
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
      value2: null,
      value3: null,
      value4: null,
      value5: false,
      value6: false,
      value7: false,
      value8: false,
      value9: true,
      value10: true,
      value11: '1',
      value12: ['3'],
      demoCodes: [
        `
        <p>
          <vhb-checkbox v-model="value1" content="默认尺寸"></vhb-checkbox>
          <vhb-checkbox v-model="value2" size="medium" content="中等尺寸"></vhb-checkbox>
          <vhb-checkbox v-model="value3" size="small" content="小型尺寸"></vhb-checkbox>
          <vhb-checkbox v-model="value4" size="mini" content="超小尺寸"></vhb-checkbox>
          <vhb-checkbox v-model="value5" content="默认尺寸" indeterminate></vhb-checkbox>
          <vhb-checkbox v-model="value6" size="medium" content="中等尺寸" indeterminate></vhb-checkbox>
          <vhb-checkbox v-model="value7" size="small" content="小型尺寸" indeterminate></vhb-checkbox>
          <vhb-checkbox v-model="value8" size="mini" content="超小尺寸" indeterminate></vhb-checkbox>
        </p>

        <p>
          <vhb-checkbox v-model="value9" content="复选1"></vhb-checkbox>
          <vhb-checkbox v-model="value10" content="复选2" disabled></vhb-checkbox>
          <vhb-checkbox v-model="value11" content="自定义值" checked-value="1" unchecked-value="0"></vhb-checkbox>
        </p>

        <p>
          <vhb-checkbox-group v-model="value12">
            <vhb-checkbox label="1" content="HTML"></vhb-checkbox>
            <vhb-checkbox label="2" content="CSS"></vhb-checkbox>
            <vhb-checkbox label="3" content="Javascript"></vhb-checkbox>
            <vhb-checkbox label="4" content="SASS"></vhb-checkbox>
            <vhb-checkbox label="5" content="LESS"></vhb-checkbox>
          </vhb-checkbox-group>
        </p>
        `,
        `
        export default {
          data () {
            return {
              value1: null,
              value2: null,
              value3: null,
              value4: null,
              value5: false,
              value6: false,
              value7: false,
              value8: false,
              value9: true,
              value10: true,
              value11: '1',
              value12: ['3']
            }
          }
        }
        `
      ]
    }
  }
}
</script>
