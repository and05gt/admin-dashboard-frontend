import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const DashboardPage = lazy(() =>
  import('./pages/DashboardPage/DashboardPage.jsx')
);
const AllOrdersPage = lazy(() =>
  import('./pages/AllOrdersPage/AllOrdersPage.jsx')
);
const AllProductsPage = lazy(() =>
  import('./pages/AllProductsPage/AllProductsPage.jsx')
);
const AllSuppliersPage = lazy(() =>
  import('./pages/AllSuppliersPage/AllSuppliersPage.jsx')
);
const CustomersDataPage = lazy(() =>
  import('./pages/CustomersDataPage/CustomersDataPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/orders" element={<AllOrdersPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/suppliers" element={<AllSuppliersPage />} />
            <Route path="/customers" element={<CustomersDataPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
