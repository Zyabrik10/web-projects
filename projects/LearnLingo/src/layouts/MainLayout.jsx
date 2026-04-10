import MobileMenu from 'components/Header/components/MobileMenu/MobileMenu';
import AuthAlert from 'components/ModalWindow/modals/AuthAlert/AuthAlert';
import BookModal from 'components/ModalWindow/modals/BookModal/BookModal';
import LoginModal from 'components/ModalWindow/modals/LoginModal/LoginModal';
import RegistrationModal from 'components/ModalWindow/modals/RegistrationModal/RegistrationModal';
import { Header } from 'components/index';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <AuthAlert />
      <BookModal />
      <MobileMenu />
      <LoginModal />
      <RegistrationModal />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
