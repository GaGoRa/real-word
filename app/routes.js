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
import ListPrograms from './components/pages/ListPrograms.vue'
import RecommendedPrograms from './components/pages/RecommendedPrograms.vue'
import PDFView from './components/pages/PDFView.vue'
import AddPrograms from './components/pages/AddPrograms.vue'
import Program from './components/pages/Program.vue'
import SubscriptionCancel from './components/pages/SubscriptionCancel.vue'
import PaySubscriptions from './components/pages/PaySubscriptions.vue'
import PageDay from './components/pages/PageDay.vue'

import addressComplete from './components/pages/addressComplete.vue'
import ListSelect from './components/components/ListSelect.vue'
import DatePickerModal from './components/components/DatePickerModal.vue'
import date from '~/components/components/nuevodate.vue'
export const routes = {
  '/home': {
    component: HomePage,
  },
  '/address_complete':{
    component: addressComplete
  },
  '/date':{
    component: date
  },
  '/list_select':{
    component: ListSelect
  },
  '/date_picker_modal':{
    component: DatePickerModal
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
  '/subscription-cancel': {
    component: SubscriptionCancel,
  },

  '/welcome': {
    component: WelcomePage,
  },
  '/choose-best-programs': {
    component: ChooseBestPrograms,
  },
  '/login-aplication': {
    component: LoginAplication,
  },
  '/reset-password': {
    component: ResetPassword,
  },

  '/list-programs': {
    component: ListPrograms,
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

  '/pay-subscription': {
    component: PaySubscriptions,
  },
  '/day-exercise': {
    component: PageDay,
  },
  '/pdf-view': {
    component: PDFView,
  },
}
