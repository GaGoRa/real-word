import HomePage from './components/pages/Home.vue'
import LoginPage from './components/pages/Login.vue'
import RegisterPage from './components/pages/Register.vue'
import VerificationCodePage from './components/pages/VerificationCode.vue'
import CreatePasswordPage from './components/pages/CreatePassword.vue'
import WelcomePage from './components/pages/Welcome.vue'

import HelpPage from './components/pages/Help.vue'
import LogoutPage from './components/pages/Logout.vue'
import PaymentsPage from './components/pages/Payments.vue'
import ProfilePage from './components/pages/Profile.vue'
import PurchaseHistoryPage from './components/pages/PurchaseHistory.vue'
import SubscriptionPage from './components/pages/Subscription.vue'

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
  '/help': {
    component: HelpPage,
  },
  '/logout': {
    component: LogoutPage,
  },
  '/payments': {
    component: PaymentsPage,
  },
  '/profile': {
    component: ProfilePage,
  },
  '/purchase-history': {
    component: PurchaseHistoryPage,
  },
  '/subscription': {
    component: SubscriptionPage,
  },
  '/welcome': {
    component: WelcomePage,
  },
}