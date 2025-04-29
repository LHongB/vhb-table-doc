<template>
  <div>
    <h2>{{ $t('app.aside.nav.theme') }}</h2>
    <p class="tip">第一种方式：创建 scss 文件（<a class="link" href="https://github.com/x-extends/vhb-table/blob/master/styles/variable.scss" target="_blank">查看所有变量</a>），并引入所有样式</p>
    <pre>
      <pre-code class="scss">
        // 修改样式变量
        $vhb-font-size: 14px;
        $vhb-font-color: #666;
        $vhb-primary-color: #409eff;
        $vhb-table-font-color: $vhb-font-color;
        $vhb-table-border-color: #e8eaec;
        $vhb-table-border-radius: 4px;
        // ...

        @import 'vhb-table/styles/index.scss';
      </pre-code>
    </pre>
    <p class="tip">第二种方式：创建 scss 文件（<a class="link" href="https://github.com/x-extends/vhb-table/blob/master/styles/variable.scss" target="_blank">查看所有变量</a>），并引入所有样式</p>
    <pre>
      <pre-code class="scss">
        @import 'vhb-table/styles/variable.scss';

        // 修改样式变量
        $vhb-font-size: 14px;
        $vhb-font-color: #666;
        $vhb-primary-color: #409eff;
        $vhb-table-font-color: $vhb-font-color;
        $vhb-table-border-color: #e8eaec;
        $vhb-table-border-radius: 4px;
        // ...

        @import 'vhb-table/styles/modules.scss';
      </pre-code>
    </pre>
    <p class="tip">第三种方式：创建 scss 文件（<a class="link" href="https://github.com/x-extends/vhb-table/blob/master/styles/variable.scss" target="_blank">查看所有变量</a>），并按需引入模块样式（<a class="link" href="https://github.com/x-extends/vhb-table/blob/master/styles/modules.scss" target="_blank">查看所有模块</a>）</p>
    <pre>
      <pre-code class="scss">
        @import 'vhb-table/styles/variable.scss';

        // 修改样式变量
        $vhb-font-size: 14px;
        $vhb-font-color: #666;
        $vhb-primary-color: #409eff;
        $vhb-table-font-color: $vhb-font-color;
        $vhb-table-border-color: #e8eaec;
        $vhb-table-border-radius: 4px;
        // ...

        @import 'vhb-table/styles/icon.scss';
        @import 'vhb-table/styles/table.scss';
        @import 'vhb-table/styles/column.scss';
        @import 'vhb-table/styles/header.scss';
        @import 'vhb-table/styles/body.scss';
        @import 'vhb-table/styles/footer.scss';
        @import 'vhb-table/styles/filter.scss';
        // ...
      </pre-code>
    </pre>
  </div>
</template>
