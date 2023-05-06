<template>
  <div class="theme-switcher">
    <input type="checkbox" id="darkModeToggle" @change="toggleDarkMode" />
    <label for="darkModeToggle">深色模式</label>
  </div>
  <div class="login-container">
    <h1>Facebook</h1>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="username"></label>
        <input
          type="text"
          id="username"
          v-model="username"
          :placeholder="$t('message.phoneNumberOrEmail')"
        />
      </div>
      <div class="input-group">
        <label for="password"></label>
        <input
          type="password"
          id="password"
          v-model="password"
          :placeholder="$t('message.password')"
        />
      </div>
      <button class="login" type="submit">{{ $t("message.login") }}</button>
    </form>
    <div v-if="message" class="message">{{ message }}</div>
    <div class="forgot">
      <a href="#" class="forgot-password" @click="handleForgotPassword">
        {{ $t("message.forgotPassword") }}
      </a>
    </div>
    <div class="separator-container">
      <span class="separator-line"></span>
      <div class="separator-text">{{ $t("message.separator") }}</div>
      <span class="separator-line"></span>
    </div>
    <button class="create-account">{{ $t("message.createAccount") }}</button>
    <div class="language-selector">
      <button
        :class="{ active: $i18n.locale === 'zh_TW' }"
        @click="changeLanguage('zh_TW')"
      >
        繁體中文
      </button>
      <button
        :class="{ active: $i18n.locale === 'en' }"
        @click="changeLanguage('en')"
      >
        English
      </button>
      <button
        :class="{ active: $i18n.locale === 'zh' }"
        @click="changeLanguage('zh')"
      >
        简体中文
      </button>
    </div>
    <footer>
      <div class="footer-links">
        <a href="#">關於</a>
        <span>．</span>
        <a href="#">使用說明</a>
        <span>．</span>
        <a href="#">更多</a>
      </div>
      <div class="meta">Meta © 2023</div>
    </footer>
    <div class="clock">{{ currentTime }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
      //時間
      currentTime: new Date().toLocaleTimeString(),
      isDarkMode: false,
    };
  },
  methods: {
    handleSubmit() {
      if (this.username === "abc123" && this.password === "abc123") {
        this.message = this.$t("message.loginSuccess");
      } else {
        this.message = this.$t("message.loginError");
        this.password = "";
      }
    },
    handleForgotPassword() {
      alert(this.$t("message.contactSupport"));
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    updateTime() {
      setInterval(() => {
        this.currentTime = new Date().toLocaleTimeString();
      }, 1000);
    },
    //深淺色
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    },
  },
  mounted() {
    this.updateTime();
  },
};
</script>

<style>
.login-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.input-group {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

h1 {
  font-weight: 700;
  color: rgb(25, 119, 241);
  margin-bottom: 0.5rem;
}
label {
  margin-right: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin-bottom: 1rem;
}

input {
  background-color: rgb(241, 241, 241);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  box-sizing: border-box;
  border: none;
}
.login {
  width: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: rgb(25, 119, 241);
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  color: white;
  font-weight: 900;
}

.message {
  margin-top: 1rem;
  color: red;
}
.forgot {
  margin-top: 1rem;
}
.forgot-password {
  color: rgb(25, 119, 241);
  cursor: pointer;
}

.separator-container {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.separator-line {
  flex-grow: 1;
  height: 1px;
  background-color: #ccc;
}

.separator-text {
  margin: 0 0.5rem;
  font-size: 0.9rem;
  color: #999;
}
.create-account {
  margin-top: 1rem;
  cursor: pointer;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: black;
  font-weight: 900;
  padding: 0.5rem 3rem;
  font-size: 1rem;
  box-sizing: border-box;
}
.language-selector {
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.language-selector button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 0;
  color: rgb(25, 119, 241);
}

.language-selector button.active {
  color: #797676;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.footer-links {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.footer-links a {
  color: #a0a0a0;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
}

.meta {
  color: #a0a0a0;
  font-size: 12px;
}
.clock {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
}
.theme-switcher {
  position: absolute;
  top:0px;
  right: 0px;
  display: flex;
  align-items: center;
}
/*深色模式 */
body.dark-mode {
  background-color: #333;
  color: #f1f1f1;
}

body.dark-mode .login-container {
  background-color: #444;
}

body.dark-mode input {
  background-color: #555;
  color: #f1f1f1;
}

body.dark-mode .login {
  background-color: #888;
}

body.dark-mode .forgot-password {
  color: #f1f1f1;
}

body.dark-mode .separator-line {
  background-color: #888;
}

body.dark-mode .separator-text {
  color: #888;
}

body.dark-mode .create-account {
  background-color: #555;
  border-color: #888;
  color: #f1f1f1;
}

body.dark-mode .language-selector button {
  color: #f1f1f1;
}

body.dark-mode .language-selector button.active {
  color: #797676;
}

body.dark-mode .footer-links a {
  color: #f1f1f1;
}

body.dark-mode .meta {
  color: #f1f1f1;
}

body.dark-mode .clock {
  color: #f1f1f1;
}
</style>
