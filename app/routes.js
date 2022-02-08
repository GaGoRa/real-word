import HomePage from './components/pages/Home.vue'
import LoginPage from './components/pages/Login.vue'
import RegisterPage from './components/pages/Register.vue'
import VerificationCodePage from './components/pages/VerificationCode.vue'
import CreatePasswordPage from './components/pages/CreatePassword.vue'
import WelcomePage from './components/pages/Welcome.vue'

export const routes = {
  '/home': {
    component: HomePage,
  },
  '/login': {
    component: LoginPage,
  },
  '/verification-code': {
    component: VerificationCodePage,
  },

  '/register': {
    component: RegisterPage,
  },
  '/create-password': {
    component: CreatePasswordPage,
  },
  '/welcome': {
    component: WelcomePage,
  },
  

}