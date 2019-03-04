<template>
  <div>
    <!-- 引入skeleton -->
    <skeleton selector="skeleton"
              loading="spin"
              bgcolor="#FFF"
              v-if="showSkeleton"></skeleton>
    <!--index.wxml-->
    <div class="container skeleton">
      <div class="userinfo">
        <block>
          <image class="userinfo-avatar skeleton-radius"
                 :src="userInfo.avatarUrl"
                 mode="cover" />
          <text class="userinfo-nickname skeleton-rect">{{userInfo.nickName}}</text>
        </block>
      </div>
      <div style="margin: 20px 0">
        <div v-for="(item,index) in lists"
             :index='index'
             :key='item'
             class="lists">
          <icon type="success"
                size="20"
                class="list skeleton-radius"
                v-if="index%2!==0" />
          <text class="skeleton-rect">{{item}}</text>
        </div>
      </div>
      <div class="usermotto">
        <text class="user-motto skeleton-rect">{{motto}}</text>
      </div>
    </div>
  </div>
</template>

<script>
import skeleton from '@/components/skeleton';

export default {
  data() {
    return {
      motto: '无与伦比的追求冰冷的敲打着我的灵魂',
      userInfo: {
        avatarUrl: 'https://www.chenrui.ink/images/avatar.min.png',
        nickName: '南澈',
      },
      lists: ['对就当歌，人生几何', '譬如朝露，去日苦多', '慨当以慷，忧思难忘'],
      showSkeleton: true,
    };
  },

  components: {
    skeleton,
  },

  methods: {},

  created() {
    setTimeout(() => {
      this.showSkeleton = false;
    }, 2000);
  },
};
</script>

<style scoped>
/**index.wxss**/
view {
  font-size: 16px;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 20px;
}

.lists {
  margin: 10px 0;
}
.list {
  margin-right: 10px;
}
</style>
