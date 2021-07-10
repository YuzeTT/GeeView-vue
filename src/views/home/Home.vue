<template>
  <div>
    <el-container style="max-width: 75rem;margin:0 auto">
      <el-header style="height:140px">
        <Header/>
      </el-header>
      <el-main>
        <el-alert
          :title="alert.title"
          type="warning"
          effect="dark"
          description="您当前正在使用非正式版！可能出现不稳定等情况。"
          show-icon>
        </el-alert>
        <div style="padding: 5px 0"></div>
        <Welcome/>
        <ProductList/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const axios = require('axios');
// const package_info = require().parseJSON()
import config from '../../../package.json'
import Welcome from '@/components/Welcome.vue'
import Header from '@/components/Header.vue'
import ProductList from '@/components/ProductList.vue'
export default {
  components: {
    Welcome,
    Header,
    ProductList
  },
  data() {
    return {
      version: config.version,
      alert: {
        title: '警告'
      },
    }
  },
  mounted () {
    if (this.version.split('-')[1]=='alpha') {
      this.alert.title = '当前为测试版，版本号：'+this.version
    }
  },
  methods: {
    
  }
}
</script>

<style>
@import url('//at.alicdn.com/t/font_2662851_4bg9iai3ceo.css');
body{
  background-color: #F4F8FB;
  /* font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif; */
  font-family: "PingFang SC",Arial,sans-serif;
}
</style>