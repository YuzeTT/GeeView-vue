<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in products" :key="item.id">
        <el-card shadow="always">
          {{ item }}
        </el-card>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: ''
    }
  },
  mounted () {
    this.$axios
      .get('/productlist')
      .then(response => {
        console.log(this.$gwConfig)
        console.log(response)
        this.products = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.el-card {
  border-radius: .5rem;
  margin-top: 10px;
}
</style>