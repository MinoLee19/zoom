<template>
  <div class="Reg">
    <div class="Title">
      sign in
    </div>
    <div class="Main">
      <div class="Row">
        <label>
          <input
            v-model="formData.username"
            type="text"
            name="username"
            placeholder="用户名:由字母/数字/下划线组成,长度为6~16位"
            @blur.stop="onCheck($event)"
            @focus.stop="onFocus($event)"
          >
        </label>
        <span />
      </div>
      <div class="Row">
        <label>
          <input
            v-model="formData.password1"
            type="password"
            name="password1"
            placeholder="密码:长度为6~16位"
            @blur.stop="onCheck($event)"
            @focus.stop="onFocus($event)"
          >
        </label>
        <span />
      </div>
      <div class="Row">
        <label>
          <input
            v-model="formData.password2"
            type="password"
            name="password2"
            placeholder="确认密码"
            @blur.stop="onCheck($event)"
            @focus.stop="onFocus($event)"
          >
        </label>
        <span />
      </div>
      <div class="Row">
        <label>
          <input
            v-model="formData.email"
            type="text"
            name="email"
            placeholder="邮箱"
            @blur.stop="onCheck($event)"
            @focus.stop="onFocus($event)"
          >
        </label>
        <span />
      </div>
      <div class="Row">
        <label>
          <input
            v-model="formData.phoneNumber"
            type="text"
            name="phone"
            placeholder="手机号码"
            @blur.stop="onCheck($event)"
            @focus.stop="onFocus($event)"
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
          :disabled="canSubmit"
          @click="onReg()"
        >
          注册
        </button>
        <router-link
          to="/login"
          class="btn btn-bubble"
        >
          返回登录
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'lodash/fp';

export default {
  name: 'Reg',
  data() {
    return {
      formData: {
        username: '',
        password1: '',
        password2: '',
        email: '',
        phoneNumber: '',
      },
      submitErrorText: '',
    };
  },
  computed: {
    showSubmitError() {
      return !isEmpty(this.submitErrorText);
    },
    canSubmit() {
      return false;
    },
  },
  methods: {
    onCheck() {
    },
    onFocus() {
    },
    onReg() {
    },
  },
};
</script>

<style scoped lang="scss">
  @import "reg";
</style>
