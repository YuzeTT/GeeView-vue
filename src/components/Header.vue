<template>
  <!-- <div class="home_header">
    <router-link to="/" class="home_header_tab">Home</router-link>
    <router-link to="/about" class="home_header_tab">About</router-link>
  </div> -->
  <div>
    <div class="header_title">
      <span>GeeView</span>
    </div>
    <div class="header_button">
      <el-button type="text" @click="openStatus" :style="header.status">
        <i class="iconfont icon-sqlserver" style="font-size:18px"></i>
        <span style="padding-left:5px">{{ header.status.text }}</span>
      </el-button>
      <el-button type="text" @click="openLogin" :style="login.style">
        <i class="iconfont icon-user" style="font-size:18px"></i>
        <span style="padding-left:5px">{{login.userid}}</span>
      </el-button>
    </div>
  </div>
  
</template>

<script>
import config from '../../package.json'
export default {
  data() {
    return {
      version: config.version,
      alert: {
        title: '警告'
      },
      header: {
        status: {
          text: '连接中',
          color:'#909399',
        }
      },
      login: {
        userid: '未登录',
        qqname: '',
        style: {
          color:'#F56C6C',
        }
      }
    }
  },
  mounted () {
    // 判断登录状态
    const qq = localStorage.getItem('qq')
    console.log(qq)
    if (localStorage.getItem('qq') != null) {
      this.$axios
        .get('https://api.usuuu.com/qq/'+qq)
        .then(response => {
          console.log(response)
          this.login.userid = response.data.data.name
          this.login.style.color = '#909399'
        })
    }
    // 后端连通测试
    this.$axios
      .get('/status')
      .then(response => {
        if (response.data.status == 200) {
          this.header.status.color = '#67C23A'
          this.header.status.text = '已连接'
        }
      })
      .catch(error => {
        console.log(error)
        this.header.status.color = '#F56C6C'
        this.header.status.text = '无连接'
      })
    // 判断版本给出提示
    if (this.version.split(' ')[1]=='Beta') {
      this.alert.title = '当前为测试版，版本号：'+this.version
    }
    
  },
  methods: {
    openStatus() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
     openLogin:function() {
      if(localStorage.getItem('qq') == null) {
        this.$prompt('请输入QQ号', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'QQ号格式不正确'
        }).then(({ value }) => {
          localStorage.setItem('qq', value);
          location.reload() 
        }).catch(() => {
          
        });
        
      }else{
        this.$confirm('确定要退出登录吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.removeItem('qq')
          this.login.userid = '未登录'
          this.login.style.color = '#F56C6C'
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          location.reload()
        }).catch(() => {
        })
      }
    }
  }
}
</script>

<style>
.home_header_tab {
  line-height: 60px;
  font-size: 30px;
  font-weight: 500;
  text-decoration:none;
  padding: 0 10px;
  color: #888D9B;
}

.router-link-exact-active {
  color: #443E3E;
}

.header_title {
  text-align: center;
  font-size: 40px;
  line-height: 60px;
  font-weight: bold;
  color: #2f3e4c;
  padding-top: 20px;
}

.header_button {
  text-align: center;
}

.header_button span {
  font-size: 18px;
}
</style>