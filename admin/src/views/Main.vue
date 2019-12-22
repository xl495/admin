<template>
    <el-container class="main-wrap">
      <el-aside width="200px">
        
      <el-menu router :default-openeds="['1']" unique-opened :default-active="$route.path" >
        
        <el-menu-item-group title="设置">
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>

      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        <span>admin</span>

        </el-header>

        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>

        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      model:{}
    }
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>
<style lang="scss">
.main-wrap {
  height: 100vh
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  
}
.el-aside {
  min-height: 100vh;
  color: #333;
}
</style>
