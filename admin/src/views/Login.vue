<template>
  <div class="login-wrap">
    <el-card class="login-from">
      <div slot="header">
        <span>请先登录!</span>
      </div>
      <el-form :model="model" label-width="80px" @submit.native.prevent>
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" native-type="submit" @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      model:{}
    }
  },
  methods:{
    async onSubmit(){
      const res = await this.$http.post('/login',this.model);
      localStorage.setItem('token',res.data.token);
      this.$message.success('登陆成功')
      this.$router.push('/');
      console.clear();
    }
  }
}
</script>
<style lang="scss">
.login-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-from {
    height: 350px;
    width: 600px;
  }
}
</style>
