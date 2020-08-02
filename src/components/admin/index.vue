<template>
  <a-layout>
    <a-layout-header class="header" :style="{backgroundColor: '#fff'}">
      <a-row>
        <a-col :span="14">
          <img src="" alt="">
          管理中心
        </a-col>
        <a-col :span="10">
          <div :style="{float: 'right'}">
            <a href="xxx" class="header-item">
              <a-tooltip title="帮助">
                <a-icon type="question-circle" :style="{fontSize: '16px',color:  'rgba(0,0,0,.65)'}"/>
              </a-tooltip>
            </a>

            <a-dropdown class="header-item">
              <a-badge :overflow-count="100" :count="5" :style="{marginRight: '20px'}">
                <a-icon type="bell" :style="{fontSize: '16px'}"/>
              </a-badge>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">
                    <a-icon type="notification" :style="{marginRight: '10px'}"/>
                    通知</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">
                    <a-icon type="message" :style="{marginRight: '10px'}"/>
                    消息</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
            <a-dropdown class="header-item">
              <a-icon type="github" :style="{fontSize: '16px'}"></a-icon>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">
                    <a-icon type="user" :style="{marginRight: '10px'}"/>
                    个人中心</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">
                    <a-icon type="setting" :style="{marginRight: '10px'}"/>
                    设置</a>
                </a-menu-item>
                <a-menu-divider/>
                <a-menu-item>
                  <a href="javascript:;">
                    <a-icon type="logout" :style="{marginRight: '10px'}"/>
                    退出登录</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>

        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout :style="{marginTop: '20px'}">
      <a-layout-sider width="200">
        <a-menu
                mode="inline"
                :default-selected-keys="selectedKeys"
                :default-open-keys="openKeys"
                :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="dashboard" :style="{marginRight: '15px'}"/>控制台</span>
            <a-menu-item key="1">
            <a href="/admin/dashboard">工作台</a>
            </a-menu-item>
            <a-menu-item key="2">
              <a href="/admin/analysis">分析页</a>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" :style="{marginRight: '15px'}"/>网站管理</span>
            <a-sub-menu>
              <span slot="title">主页 </span>
              <a-menu-item><a href="/carousel">轮播图</a></a-menu-item> 
              <a-menu-item>链接</a-menu-item>

            </a-sub-menu>
            <a-sub-menu>
              <span slot="title">课程 </span>
              <a-menu-item>课程管理</a-menu-item>
              <a-menu-item>评论管理</a-menu-item>
            </a-sub-menu>
            
            <a-sub-menu>
              <span slot="title">社区</span>
            <a-menu-item >
              1
            </a-menu-item>
            </a-sub-menu>
            <a-menu-item key="8">
              下载
            </a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" :style="{marginRight: '15px'}"/>用户管理</span>
            <a-menu-item key="9">
              发放通知
            </a-menu-item>
            <a-menu-item key="10">
              用户操作
            </a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub4">
            <span slot="title"><a-icon type="setting" :style="{marginRight: '15px'}"/>相关设置</span>
            <a-menu-item key="13">
              通知设置
            </a-menu-item>
            <a-menu-item key="14">
              option12
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="item in breadcrumb" :key="item.name">{{item.name}}</a-breadcrumb-item>

        </a-breadcrumb>
        <a-layout-content
                :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '567px' }"
        >
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer :style="{textAlign: 'center'}">
          <div>
            <a v-for="(item, index) in links"  :href="item.link" :key="index" class="links">{{item.name}}</a>
          </div>
          <div>
            Copyright
            <a-icon type="copyright"/>
            2020  Edgar
          </div>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
  export default {
    name: "AdminBase",
    props:{  // 需要进行修改，因为目前使用的是router-view ，如果不使用router-view的话，这样可行
    // 如果使用的话，可以使用全局的state
      selectedKeys:{
        default() {
          return ['1']
        }
      },
      openKeys:{
        default(){
          return ['sub1']
        }
      }
    },
    data() {
      return {
        breadcrumb: [],
        links: [{  // 后面更换成自定义的api获取
          name: "百度",
          link: "www.baidu.com"
        },
          {
            name: "谷歌",
            link: "www.google.com"
          }]
      };
    },
    mounted() {
      this.breadcrumb = this.$route.matched
    }
  };
</script>


<style scoped>
  .header-item {
    padding: 0 12px;
    display: inline-block;
    height: 100%;
    cursor: pointer;
    vertical-align: middle;

  }

  .header-item > i {
    font-size: 20px;
    color: rgba(0, 0, 0, .65);
  }

  .links{
    margin-bottom: 8px;
    margin-right: 8px;
    color: rgba(0,0,0,.45);
  }
</style>

