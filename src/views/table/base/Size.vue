<template>
  <div>
    <p class="tip">
      可以设置大小尺寸：medium / small / mini<br>
      默认大小：Table 48px 、Button 34px、Input 34px、Checkbox 16px、Radio 16px，可以通过 scss 变量修改，<a class="link" href="https://github.com/x-extends/vhb-table/blob/master/styles/variable.scss" target="_blank">查看所有变量</a><br><a class="link" href="https://github.com/x-extends/vhb-table-demo/tree/master/vhb-table-by-theme" target="_blank">（项目示例）</a>
    </p>

    <vhb-table
      border
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column type="radio" width="60"></vhb-column>
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="age" title="Age" sortable></vhb-column>
      <vhb-column field="sex" title="Sex" :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vhb-column>
      <vhb-column field="sex2" title="Sex2" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]" :filter-multiple="false"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">设置大小为 medium，默认大小：Table 44px 、Button 32px、Input 32px、Checkbox 15px、Radio 15px</p>

    <vhb-table
      border
      size="medium"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column type="radio" width="60"></vhb-column>
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="age" title="Age" sortable></vhb-column>
      <vhb-column field="sex" title="Sex" :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vhb-column>
      <vhb-column field="sex2" title="Sex2" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]" :filter-multiple="false"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
    </pre>

    <p class="tip">设置大小为 small，默认大小：Table 40px 、Button 30px、Input 30px、Checkbox 14px、Radio 14px</p>

    <vhb-table
      border
      size="small"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column type="radio" width="60"></vhb-column>
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="age" title="Age" sortable></vhb-column>
      <vhb-column field="sex" title="Sex" :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vhb-column>
      <vhb-column field="sex2" title="Sex2" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]" :filter-multiple="false"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[4] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[5] }}</pre-code>
    </pre>

    <p class="tip">设置大小为 mini，默认大小：Table 36px 、Button 28px、Input 28px、Checkbox 14px、Radio 14px</p>

    <vhb-table
      border
      size="mini"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column type="radio" width="60"></vhb-column>
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="age" title="Age" sortable></vhb-column>
      <vhb-column field="sex" title="Sex" :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vhb-column>
      <vhb-column field="sex2" title="Sex2" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]" :filter-multiple="false"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[6] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[7] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
      ],
      demoCodes: [
        `
        <vhb-table
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column type="radio" width="60"></vhb-column>
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="age" title="Age" sortable></vhb-column>
          <vhb-column field="sex" title="Sex" :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vhb-column>
          <vhb-column field="sex2" title="Sex2" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]" :filter-multiple="false"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
              ]
            }
          }
        }
        `,
        `
        <vhb-table
          size="medium"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column type="radio" width="60"></vhb-column>
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="age" title="Age" sortable></vhb-column>
          <vhb-column field="sex" title="Sex" :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vhb-column>
          <vhb-column field="sex2" title="Sex2" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]" :filter-multiple="false"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
              ]
            }
          }
        }
        `,
        `
        <vhb-table
          size="small"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column type="radio" width="60"></vhb-column>
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="age" title="Age" sortable></vhb-column>
          <vhb-column field="sex" title="Sex" :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vhb-column>
          <vhb-column field="sex2" title="Sex2" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]" :filter-multiple="false"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
              ]
            }
          }
        }
        `,
        `
        <vhb-table
          size="mini"
          :data="tableData">
          <<vhb-column type="seq" width="60"></vhb-column>
          <vhb-column type="radio" width="60"></vhb-column>
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="age" title="Age" sortable></vhb-column>
          <vhb-column field="sex" title="Sex" :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vhb-column>
          <vhb-column field="sex2" title="Sex2" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]" :filter-multiple="false"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
              ]
            }
          }
        }
        `
      ]
    }
  }
}
</script>
