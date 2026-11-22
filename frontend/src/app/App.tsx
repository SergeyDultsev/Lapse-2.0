import { Route, Routes } from "react-router";
import { routers } from "@app/router.tsx";
import { RootLayout } from "@app/layouts/RootLayout.tsx";

export const App = () => {
  return (
      <Routes>
          <Route
              element={<RootLayout />}
          >
              {routers.map(route => (
                  <Route
                      path={route.path}
                      element={route.element}
                      key={route.path}
                  />
              ))}
          </Route>
      </Routes>
  )
}