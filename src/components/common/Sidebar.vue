<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-setting",
          index: "dashboard",
          title: "系统首页"
        },
        {
          icon: "el-icon-tickets",
          index: "1",
          title: "个人资料",
            subs:[
               {
                   index:"table",
                   title:"贫困人员资料查询"
               }
            ]
        },
        {
          icon: "el-icon-date",
          index: "2",
          title: "贫困人员申请",
          subs: [
              {
                  index: "identity_verify",
                  title: "身份审核"
              },
              {
                  index: "fund_application",
                  title: "资金申请"
              }
              // {
              //     index: "editor",
              //     title: "富文本编辑器"
              // },
              // {
              //     index: "markdown",
              //     title: "markdown编辑器"
              // },
              // {
              //     index: "upload",
              //     title: "文件上传"
              // }
          ]
        },
          {
              icon: "el-icon-date",
              index: "3",
              title: "申请记录",
              subs: [
                  {
                      index: "s_identity_check",
                      title: "身份审核记录"
                  },
                  {
                      index: "s_money_apply",
                      title: "资金申请记录"
                  }
              ]
          },
          {
              icon: "el-icon-date",
              index: "4",
              title: "村委",
              subs: [
                  {
                      index: "c_identity_perfect",
                      title: "身份完善"
                  },
                  {
                      index: "c_identity_check",
                      title: "身份审核"
                  },
                  {
                      index: "c_money_check",
                      title: "资金审批"
                  },
                  {
                      index: "c_poor_people",
                      title: "贫困人员"
                  }
              ]
          },
          // {
          //     icon: "el-icon-message",
          //     index: "tabs",
          //     title: "tab选项卡"
          // },
        // {
        //   icon: "el-icon-rank",
        //   index: "drag",
        //   title: "拖拽列表"
        // },
        // {
        //   icon: "el-icon-warning",
        //   index: "permission",
        //   title: "权限测试"
        // },
        // {
        //   icon: "el-icon-error",
        //   index: "404",
        //   title: "404页面"
        // }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
.el-menu-item,
.el-submenu__title {
  height: 70px;
  line-height: 70px;
}
.el-submenu__title {
  height: 70px;
  line-height: 70px;
}
</style>
