<template>
  <div class="Login">
    <div class="Title">
      log in
    </div>
    <div class="Main">
      <div class="Row">
        <label>
          <input
            v-model="username"
            type="text"
            placeholder="请输入您的用户名"
            @blur="onCheckUsername()"
            @focus="onFocusUsername()"
          >
        </label>
        <span :class="usernameErrorClass"> {{ usernameErrorText }} </span>
      </div>
      <div class="Row">
        <label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="请输入您的密码"
          >
        </label>
        <span />
      </div>
      <div
        v-show="showSubmitError"
        class="submitError"
      >
        {{ submitErrorText }}
      </div>
      <div class="OperatorPlace">
        <button
          type="button"
          class="btn btn-bubble"
          @click="logIn()"
        >
          登录
        </button>
        <router-link
          to="/reg"
          class="btn btn-bubble"
        >
          注册
        </router-link>
        <a
          href="#"
          class="btn btn-bubble"
        >忘记密码？</a>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'lodash/fp';

export default {
  name: 'Login',
  data: () => ({
    username: '',
    usernameErrorText: '',
    usernameErrorClass: '',
    password: '',
    submitErrorText: '',
  }),
  computed: {
    showSubmitError() {
      return !isEmpty(this.submitErrorText);
    },
  },
  methods: {
    onCheckUsername() {
      const { username } = this;
      if (username !== '') {
        // const url = `http://3.17.130.253:3020/user/logCheckUname?username=${username}`;
        // this.axios.get(url).then((res) => {
        //   if (res.data === false) {
        //     span.innerHTML = '用户名不存在';
        //     span.classList.add('tipRed');
        //   }
        // });
      } else {
        this.usernameErrorText = '请输入用户名';
        this.usernameErrorClass = 'tipRed';
      }
    },
    onFocusUsername() {
      this.usernameErrorText = '';
      this.usernameErrorClass = '';
    },
    logIn() {
      // const { hint } = this.$refs;
      // const { uname } = this;
      // const { upwd } = this;
      // const data = {
      //   uname,
      //   upwd,
      // };
      // // 2.使用axios传递数据
      // this.axios.post('http://localhost:3020/user/login', data).then((res) => {
      //   if (res.data === true) {
      //     this.cookie.setCookie('uname', uname, 24);
      //     // this.$router.push('/user/index')
      //   } else {
      //     hint.classList.remove('hintShow');
      //     setTimeout(() => {
      //       hint.classList.add('hintShow');
      //     }, 0);
      //   }
      // });
    },
  },
};
</script>

<style scoped lang="scss">
  @import "login";
</style>
