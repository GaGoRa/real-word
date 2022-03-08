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
import ChooseBestPrograms from './components/pages/ChooseBestPrograms.vue'
import LoginAplication from './components/pages/LoginAplication.vue'
import ResetPassword from './components/pages/ResetPassword.vue'
import PopularPrograms from './components/pages/PopularPrograms.vue'
import RecommendedPrograms from './components/pages/RecommendedPrograms.vue'

import AddPrograms from './components/pages/AddPrograms.vue'
import Program from './components/pages/Program.vue'

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
  '/choose-best-progrmans': {
    component: ChooseBestPrograms,
  },
  '/login-aplication': {
    component: LoginAplication,
  },
  '/reset-password': {
    component: ResetPassword,
  },




  '/popular-programs': {
    component: PopularPrograms,
  },
  '/recommended-programs': {
    component: RecommendedPrograms,
  },

  '/add-programs': {
    component: AddPrograms,
  },
  '/program': {
    component: Program,
  },
}