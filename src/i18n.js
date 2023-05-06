import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      login: "Log in",
      phoneNumberOrEmail: "Phone number or email address",
      password: "Password",
      forgotPassword: "Forgot Password?",
      separator: "or",
      createAccount: "Create New Account",
      loginSuccess: "Login successful!",
      loginError: "Incorrect username or password!",
      contactSupport: "Please contact customer support to retrieve your password.",
    },
  },
  zh: {
    message: {
      login: "登入",
      phoneNumberOrEmail: "手机号码或电子邮件地址",
      password: "密码",
      forgotPassword: "忘记密码？",
      separator: "或",
      createAccount: "建立新帐号",
      loginSuccess: "登入成功！",
      loginError: "帐号或密码输入错误！",
      contactSupport: "请联系客服找回您的密码",
    },
  },
  zh_TW: {
    message: {
      login: "登入",
      phoneNumberOrEmail: "手機號碼或電子郵件地址",
      password: "密碼",
      forgotPassword: "忘記密碼？",
      separator: "或",
      createAccount: "建立新帳號",
      loginSuccess: "登入成功！",
      loginError: "帳號或密碼輸入錯誤！",
      contactSupport: "請聯繫客服找回您的密碼。",
    },
  },
};

const i18n = createI18n({
  locale: "zh_TW", // 預設語言為繁體中文
  messages,
});

export default i18n;
