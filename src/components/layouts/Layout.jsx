import { Outlet } from "react-router-dom";
import { AppTheme } from './AppTheme';
import { CryptoAppBar } from './../blocks/CryptoAppBar';
import { CryptBottomNavigation } from './../blocks/CryptBottomNavigation';

export const Layout = () => (
  <AppTheme>
    <CryptoAppBar />
    <Outlet />
    <CryptBottomNavigation />
  </AppTheme>
);
