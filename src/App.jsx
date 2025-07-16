import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import { RestrictedRoute } from "./components/RestrictedRoute.jsx";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import { refreshUser } from "./redux/auth/operations.js";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const DashboardPage = lazy(() =>
  import("./pages/DashboardPage/DashboardPage.jsx")
);
const AllOrdersPage = lazy(() =>
  import("./pages/AllOrdersPage/AllOrdersPage.jsx")
);
const AllProductsPage = lazy(() =>
  import("./pages/AllProductsPage/AllProductsPage.jsx")
);
const AllSuppliersPage = lazy(() =>
  import("./pages/AllSuppliersPage/AllSuppliersPage.jsx")
);
const CustomersDataPage = lazy(() =>
  import("./pages/CustomersDataPage/CustomersDataPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    const init = async () => {
      try {
        dispatch(refreshUser());
      } catch (e) {
        console.log(e);
      }
    };

    init();
  }, [dispatch]);

  return isRefreshing ? (
    <h3>Loading...</h3>
  ) : (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<DashboardPage />}
                />
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<AllOrdersPage />}
                />
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<AllProductsPage />}
                />
              }
            />
            <Route
              path="/suppliers"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<AllSuppliersPage />}
                />
              }
            />
            <Route
              path="/customers"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<CustomersDataPage />}
                />
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<LoginPage />}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
