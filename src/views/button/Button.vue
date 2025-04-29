<template>
  <div>
    <h2>{{ $t('app.aside.nav.button') }}</h2>
    <p class="tip">标准按钮，文本按钮、下拉按钮，可以使用任意第三方字体图标，例如：font-awesome、inconfont...</p>

    <h3>{{ $t('基础用法') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vhb-button content="默认颜色"></vhb-button>
          <vhb-button status="primary" content="主要颜色"></vhb-button>
          <vhb-button status="success" content="成功颜色"></vhb-button>
          <vhb-button status="info" content="信息颜色"></vhb-button>
          <vhb-button status="warning" content="警告颜色"></vhb-button>
          <vhb-button status="danger" content="危险颜色"></vhb-button>
        </p>
        <p>
          <vhb-button content="默认尺寸"></vhb-button>
          <vhb-button size="medium" content="中等尺寸"></vhb-button>
          <vhb-button size="small" content="小型尺寸"></vhb-button>
          <vhb-button size="mini" content="超小尺寸"></vhb-button>
        </p>
        <p>
          <vhb-button type="text" content="默认颜色"></vhb-button>
          <vhb-button type="text" status="primary" content="主要颜色"></vhb-button>
          <vhb-button type="text" status="success" content="信息颜色"></vhb-button>
          <vhb-button type="text" status="info" content="信息颜色"></vhb-button>
          <vhb-button type="text" status="warning" content="警告颜色"></vhb-button>
          <vhb-button type="text" status="danger" content="危险颜色"></vhb-button>
        </p>
        <p>
          <vhb-button round>圆角按钮</vhb-button>
          <vhb-button loading round>圆角按钮</vhb-button>
          <vhb-button status="primary" round>主要颜色</vhb-button>
          <vhb-button status="success" round>成功颜色</vhb-button>
          <vhb-button status="info" round>信息颜色</vhb-button>
          <vhb-button status="warning" round>警告颜色</vhb-button>
          <vhb-button status="danger" round>危险颜色</vhb-button>
        </p>
        <p>
          <vhb-button icon="fa fa-plus" circle></vhb-button>
          <vhb-button loading circle></vhb-button>
          <vhb-button status="primary" icon="fa fa-save" circle></vhb-button>
          <vhb-button status="success" icon="fa fa-check" circle></vhb-button>
          <vhb-button status="info" icon="fa fa-info" circle></vhb-button>
          <vhb-button status="warning" icon="fa fa-warning" circle></vhb-button>
          <vhb-button status="danger" icon="fa fa-trash-o" circle></vhb-button>
        </p>
        <p>
          <vhb-button icon="fa fa-plus"></vhb-button>
          <vhb-button loading></vhb-button>
          <vhb-button status="primary" icon="fa fa-save"></vhb-button>
          <vhb-button status="success" icon="fa fa-check"></vhb-button>
          <vhb-button status="info" icon="fa fa-info"></vhb-button>
          <vhb-button status="warning" icon="fa fa-warning"></vhb-button>
          <vhb-button status="danger" icon="fa fa-trash-o"></vhb-button>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[0] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('禁用状态') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vhb-button content="默认禁用颜色" disabled></vhb-button>
          <vhb-button status="primary" content="主要禁用颜色" disabled></vhb-button>
          <vhb-button status="success" content="成功禁用颜色" disabled></vhb-button>
          <vhb-button status="info" content="信息禁用颜色" disabled></vhb-button>
          <vhb-button status="warning" content="警告禁用颜色" disabled></vhb-button>
          <vhb-button status="danger" content="危险禁用颜色" disabled></vhb-button>
        </p>
        <p>
          <vhb-button type="text" content="默认禁用颜色" disabled></vhb-button>
          <vhb-button type="text" status="primary" content="主要禁用颜色" disabled></vhb-button>
          <vhb-button type="text" status="success" content="成功禁用颜色" disabled></vhb-button>
          <vhb-button type="text" status="info" content="信息禁用颜色" disabled></vhb-button>
          <vhb-button type="text" status="warning" content="警告禁用颜色" disabled></vhb-button>
          <vhb-button type="text" status="danger" content="危险禁用颜色" disabled></vhb-button>
        </p>

      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[1] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('加载中') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vhb-button content="默认颜色" loading></vhb-button>
          <vhb-button status="primary" content="主要颜色" loading></vhb-button>
          <vhb-button status="success" content="成功颜色" loading></vhb-button>
          <vhb-button status="info" content="信息颜色" loading></vhb-button>
          <vhb-button status="warning" content="警告颜色" loading></vhb-button>
          <vhb-button status="danger" content="危险颜色" loading></vhb-button>
        </p>

         <p>
          <vhb-button type="text" content="默认颜色" loading></vhb-button>
          <vhb-button type="text" status="primary" content="主要颜色" loading></vhb-button>
          <vhb-button type="text" status="success" content="成功颜色" loading></vhb-button>
          <vhb-button type="text" status="info" content="信息颜色" loading></vhb-button>
          <vhb-button type="text" status="warning" content="警告颜色" loading></vhb-button>
          <vhb-button type="text" status="danger" content="危险颜色" loading></vhb-button>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[2] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('下拉按钮') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vhb-button transfer>
            <template #default>默认颜色</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
          <vhb-button status="primary" transfer>
            <template #default>主要颜色</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text" status="primary">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
          <vhb-button status="success" transfer>
            <template #default>成功颜色</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text" status="success">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
          <vhb-button status="info" transfer>
            <template #default>信息颜色</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text" status="my-purple">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
          <vhb-button status="warning" transfer placement="top">
            <template #default>固定向上</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text" status="warning">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
          <vhb-button status="danger" transfer placement="bottom">
            <template #default>固定向下</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text" status="danger">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
        </p>

         <p>
          <vhb-button size="mini" content="超小下拉按钮">
            <template #dropdowns>
              <vhb-button type="text" content="下拉按钮1"></vhb-button>
              <vhb-button type="text" status="primary" content="下拉按钮2"></vhb-button>
              <vhb-button type="text" content="下拉按钮3"></vhb-button>
            </template>
          </vhb-button>
          <vhb-button size="small" content="小型下拉按钮">
            <template #dropdowns>
              <vhb-button type="text" content="下拉按钮1"></vhb-button>
              <vhb-button type="text" status="success" content="下拉按钮2"></vhb-button>
              <vhb-button type="text" content="下拉按钮3"></vhb-button>
            </template>
          </vhb-button>
          <vhb-button size="medium" content="固定向上" placement="top">
            <template #dropdowns>
              <vhb-button type="text" content="下拉按钮1"></vhb-button>
              <vhb-button type="text" status="warning" content="下拉按钮2"></vhb-button>
              <vhb-button type="text" content="下拉按钮3"></vhb-button>
            </template>
          </vhb-button>
          <vhb-button content="固定向下" placement="bottom">
            <template #dropdowns>
              <vhb-button type="text" content="下拉按钮1"></vhb-button>
              <vhb-button type="text" status="danger" content="下拉按钮2"></vhb-button>
              <vhb-button type="text" content="下拉按钮3"></vhb-button>
            </template>
          </vhb-button>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[3] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('第三方图标') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vhb-button icon="fa fa-plus">第三方图标</vhb-button>
          <vhb-button status="primary" icon="fa fa-save">主要图标颜色</vhb-button>
          <vhb-button status="success" icon="fa fa-check">成功图标颜色</vhb-button>
          <vhb-button status="info" icon="fa fa-info">信息图标颜色</vhb-button>
          <vhb-button status="warning" icon="fa fa-warning">警告图标颜色</vhb-button>
          <vhb-button status="danger" icon="fa fa-trash-o">危险图标颜色</vhb-button>
        </p>

        <p>
          <vhb-button icon="fa fa-download">默认图标颜色</vhb-button>
          <vhb-button icon="fa fa-save my-primary">主要图标颜色</vhb-button>
          <vhb-button icon="fa fa-check my-success">成功图标颜色</vhb-button>
          <vhb-button icon="fa fa-info my-info">信息图标颜色</vhb-button>
          <vhb-button icon="fa fa-warning my-warning">警告图标颜色</vhb-button>
          <vhb-button icon="fa fa-trash-o my-danger">危险图标颜色</vhb-button>
        </p>

        <p>
          <vhb-button type="text" icon="fa fa-plus">使用第三方图标</vhb-button>
          <vhb-button type="text" status="primary" icon="fa fa-save">主要图标颜色</vhb-button>
          <vhb-button type="text" status="success" icon="fa fa-check">成功图标颜色</vhb-button>
          <vhb-button type="text" status="info" icon="fa fa-info">信息图标颜色</vhb-button>
          <vhb-button type="text" status="warning" icon="fa fa-warning">警告图标颜色</vhb-button>
          <vhb-button type="text" status="danger" icon="fa fa-trash-o">危险图标颜色</vhb-button>
        </p>

        <p>
          <vhb-button type="text" icon="fa fa-plus"></vhb-button>
          <vhb-button type="text" icon="fa fa-refresh"></vhb-button>
          <vhb-button status="primary" icon="fa fa-download">图标按钮</vhb-button>
          <vhb-button status="my-purple" icon="fa fa-save">自定义按钮颜色</vhb-button>
          <vhb-button icon="fa fa-graduation-cap my-green">自定义图标颜色</vhb-button>
          <vhb-button> <i class="my-icn"></i> 自定义图标</vhb-button>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[4] }}</pre-code></pre>
    </demo-block>

    <pre>
      <pre-code>
        | Tab | 切换到上一个 |
        | Shift + Tab | 切换到下一个 |
        | Spacebar | 按下点击 |
        | Enter | 点击 |
      </pre-code>
    </pre>

    <!-- <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="css">{{ demoCodes[1] }}</pre-code>
    </pre> -->
  </div>
</template>

<script>
export default {
  data  () {
    return {
      demoCodes: [
        `
        <p>
          <vhb-button content="默认颜色"></vhb-button>
          <vhb-button status="primary" content="主要颜色"></vhb-button>
          <vhb-button status="success" content="成功颜色"></vhb-button>
          <vhb-button status="info" content="信息颜色"></vhb-button>
          <vhb-button status="warning" content="警告颜色"></vhb-button>
          <vhb-button status="danger" content="危险颜色"></vhb-button>
        </p>
        <p>
          <vhb-button content="默认尺寸"></vhb-button>
          <vhb-button size="medium" content="中等尺寸"></vhb-button>
          <vhb-button size="small" content="小型尺寸"></vhb-button>
          <vhb-button size="mini" content="超小尺寸"></vhb-button>
        </p>
        <p>
          <vhb-button type="text" content="默认颜色"></vhb-button>
          <vhb-button type="text" status="primary" content="主要颜色"></vhb-button>
          <vhb-button type="text" status="success" content="信息颜色"></vhb-button>
          <vhb-button type="text" status="info" content="信息颜色"></vhb-button>
          <vhb-button type="text" status="warning" content="警告颜色"></vhb-button>
          <vhb-button type="text" status="danger" content="危险颜色"></vhb-button>
        </p>
        <p>
          <vhb-button round>圆角按钮</vhb-button>
          <vhb-button loading round>圆角按钮</vhb-button>
          <vhb-button status="primary" round>主要颜色</vhb-button>
          <vhb-button status="success" round>成功颜色</vhb-button>
          <vhb-button status="info" round>信息颜色</vhb-button>
          <vhb-button status="warning" round>警告颜色</vhb-button>
          <vhb-button status="danger" round>危险颜色</vhb-button>
        </p>
        <p>
          <vhb-button icon="fa fa-plus" circle></vhb-button>
          <vhb-button loading circle></vhb-button>
          <vhb-button status="primary" icon="fa fa-save" circle></vhb-button>
          <vhb-button status="success" icon="fa fa-check" circle></vhb-button>
          <vhb-button status="info" icon="fa fa-info" circle></vhb-button>
          <vhb-button status="warning" icon="fa fa-warning" circle></vhb-button>
          <vhb-button status="danger" icon="fa fa-trash-o" circle></vhb-button>
        </p>
        <p>
          <vhb-button icon="fa fa-plus"></vhb-button>
          <vhb-button loading></vhb-button>
          <vhb-button status="primary" icon="fa fa-save"></vhb-button>
          <vhb-button status="success" icon="fa fa-check"></vhb-button>
          <vhb-button status="info" icon="fa fa-info"></vhb-button>
          <vhb-button status="warning" icon="fa fa-warning"></vhb-button>
          <vhb-button status="danger" icon="fa fa-trash-o"></vhb-button>
        </p>
        `,

        `
        <p>
          <vhb-button content="默认禁用颜色" disabled></vhb-button>
          <vhb-button status="primary" content="主要禁用颜色" disabled></vhb-button>
          <vhb-button status="success" content="成功禁用颜色" disabled></vhb-button>
          <vhb-button status="info" content="信息禁用颜色" disabled></vhb-button>
          <vhb-button status="warning" content="警告禁用颜色" disabled></vhb-button>
          <vhb-button status="danger" content="危险禁用颜色" disabled></vhb-button>
        </p>
        <p>
          <vhb-button type="text" content="默认禁用颜色" disabled></vhb-button>
          <vhb-button type="text" status="primary" content="主要禁用颜色" disabled></vhb-button>
          <vhb-button type="text" status="success" content="成功禁用颜色" disabled></vhb-button>
          <vhb-button type="text" status="info" content="信息禁用颜色" disabled></vhb-button>
          <vhb-button type="text" status="warning" content="警告禁用颜色" disabled></vhb-button>
          <vhb-button type="text" status="danger" content="危险禁用颜色" disabled></vhb-button>
        </p>
        `,

         `
        <p>
          <vhb-button content="默认颜色" loading></vhb-button>
          <vhb-button status="primary" content="主要颜色" loading></vhb-button>
          <vhb-button status="success" content="成功颜色" loading></vhb-button>
          <vhb-button status="info" content="信息颜色" loading></vhb-button>
          <vhb-button status="warning" content="警告颜色" loading></vhb-button>
          <vhb-button status="danger" content="危险颜色" loading></vhb-button>
        </p>

         <p>
          <vhb-button type="text" content="默认颜色" loading></vhb-button>
          <vhb-button type="text" status="primary" content="主要颜色" loading></vhb-button>
          <vhb-button type="text" status="success" content="成功颜色" loading></vhb-button>
          <vhb-button type="text" status="info" content="信息颜色" loading></vhb-button>
          <vhb-button type="text" status="warning" content="警告颜色" loading></vhb-button>
          <vhb-button type="text" status="danger" content="危险颜色" loading></vhb-button>
        </p>
        `,

         `
        <p>
          <vhb-button transfer>
            <template #default>默认颜色</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
          <vhb-button status="primary" transfer>
            <template #default>主要颜色</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text" status="primary">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
          <vhb-button status="success" transfer>
            <template #default>成功颜色</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text" status="success">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
          <vhb-button status="info" transfer>
            <template #default>信息颜色</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text" status="my-purple">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
          <vhb-button status="warning" transfer placement="top">
            <template #default>固定向上</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text" status="warning">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
          <vhb-button status="danger" transfer placement="bottom">
            <template #default>固定向下</template>
            <template #dropdowns>
              <vhb-button type="text">下拉按钮1</vhb-button>
              <vhb-button type="text" status="danger">下拉按钮2</vhb-button>
              <vhb-button type="text">下拉按钮3</vhb-button>
            </template>
          </vhb-button>
        </p>

         <p>
          <vhb-button size="mini" content="超小下拉按钮">
            <template #dropdowns>
              <vhb-button type="text" content="下拉按钮1"></vhb-button>
              <vhb-button type="text" status="primary" content="下拉按钮2"></vhb-button>
              <vhb-button type="text" content="下拉按钮3"></vhb-button>
            </template>
          </vhb-button>
          <vhb-button size="small" content="小型下拉按钮">
            <template #dropdowns>
              <vhb-button type="text" content="下拉按钮1"></vhb-button>
              <vhb-button type="text" status="success" content="下拉按钮2"></vhb-button>
              <vhb-button type="text" content="下拉按钮3"></vhb-button>
            </template>
          </vhb-button>
          <vhb-button size="medium" content="固定向上" placement="top">
            <template #dropdowns>
              <vhb-button type="text" content="下拉按钮1"></vhb-button>
              <vhb-button type="text" status="warning" content="下拉按钮2"></vhb-button>
              <vhb-button type="text" content="下拉按钮3"></vhb-button>
            </template>
          </vhb-button>
          <vhb-button content="固定向下" placement="bottom">
            <template #dropdowns>
              <vhb-button type="text" content="下拉按钮1"></vhb-button>
              <vhb-button type="text" status="danger" content="下拉按钮2"></vhb-button>
              <vhb-button type="text" content="下拉按钮3"></vhb-button>
            </template>
          </vhb-button>
        </p>
        `,

       `
       <p>
          <vhb-button icon="fa fa-plus">第三方图标</vhb-button>
          <vhb-button status="primary" icon="fa fa-save">主要图标颜色</vhb-button>
          <vhb-button status="success" icon="fa fa-check">成功图标颜色</vhb-button>
          <vhb-button status="info" icon="fa fa-info">信息图标颜色</vhb-button>
          <vhb-button status="warning" icon="fa fa-warning">警告图标颜色</vhb-button>
          <vhb-button status="danger" icon="fa fa-trash-o">危险图标颜色</vhb-button>
        </p>

        <p>
          <vhb-button icon="fa fa-download">默认图标颜色</vhb-button>
          <vhb-button icon="fa fa-save my-primary">主要图标颜色</vhb-button>
          <vhb-button icon="fa fa-check my-success">成功图标颜色</vhb-button>
          <vhb-button icon="fa fa-info my-info">信息图标颜色</vhb-button>
          <vhb-button icon="fa fa-warning my-warning">警告图标颜色</vhb-button>
          <vhb-button icon="fa fa-trash-o my-danger">危险图标颜色</vhb-button>
        </p>

        <p>
          <vhb-button type="text" icon="fa fa-plus">使用第三方图标</vhb-button>
          <vhb-button type="text" status="primary" icon="fa fa-save">主要图标颜色</vhb-button>
          <vhb-button type="text" status="success" icon="fa fa-check">成功图标颜色</vhb-button>
          <vhb-button type="text" status="info" icon="fa fa-info">信息图标颜色</vhb-button>
          <vhb-button type="text" status="warning" icon="fa fa-warning">警告图标颜色</vhb-button>
          <vhb-button type="text" status="danger" icon="fa fa-trash-o">危险图标颜色</vhb-button>
        </p>

        <p>
          <vhb-button type="text" icon="fa fa-plus"></vhb-button>
          <vhb-button type="text" icon="fa fa-refresh"></vhb-button>
          <vhb-button status="primary" icon="fa fa-download">图标按钮</vhb-button>
          <vhb-button status="my-purple" icon="fa fa-save">自定义按钮颜色</vhb-button>
          <vhb-button icon="fa fa-graduation-cap my-green">自定义图标颜色</vhb-button>
          <vhb-button> <i class="my-icn"></i> 自定义图标</vhb-button>
        </p>

        .vhb-button.type--button.theme--my-purple,
        .vhb-button.type--button.theme--my-purple:hover {
          color: #fff;
        }
        .vhb-button.type--button.theme--my-purple {
          background-color: #800080;
        }
        .vhb-button.type--button.theme--my-purple:active {
          background-color: #a50aa5;
        }
        .my-green {
          color: #008000;
        }
        .my-primary {
          color: #3196ff;
        }
        .my-success {
          color: #67c23a;
        }
        .my-info {
          color: #909399;
        }
        .my-warning {
          color: #e6a23c;
        }
        .my-danger {
          color: #f56c6c;
        }
        .my-icn{
          width: 20px;
          height: 20px;
          display: inline-block;
          vertical-align: sub;
          background: #333;
        }
        `
      ]
    }
  }
}
</script>

<style>
.vhb-button.type--button.theme--my-purple,
.vhb-button.type--button.theme--my-purple:hover {
  color: #fff;
}
.vhb-button.type--button.theme--my-purple {
  background-color: #800080;
}
.vhb-button.type--button.theme--my-purple:active {
  background-color: #a50aa5;
}
.vhb-button.type--text.theme--my-purple {
  color: #800080;
}
.vhb-button.type--text.theme--my-purple:not(.is--disabled):hover {
  color: #a50aa5;
}
.my-green {
  color: #008000;
}
.my-primary {
  color: #3196ff;
}
.my-success {
  color: #67c23a;
}
.my-info {
  color: #909399;
}
.my-warning {
  color: #e6a23c;
}
.my-danger {
  color: #f56c6c;
}
.my-icn{
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: sub;
  background: #333;
}
</style>
