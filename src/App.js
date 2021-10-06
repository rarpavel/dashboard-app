import { lazy, Suspense } from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Layout from './components/Layout'

import routes from './routes'

import './scss/_main.scss'

const DashboardPage = lazy(() =>
  import('./pages/DashboardPage' /* webpackChunkName: "DashboardPage" */)
)

const ReportsPage = lazy(() =>
  import('./pages/ReportsPage' /* webpackChunkName: "ReportsPage" */)
)

function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Switch>
            <Route path={routes.dashboard} render={() => <DashboardPage />} />
            <Route path={routes.reports} render={() => <ReportsPage />} />
            <Redirect to={routes.dashboard} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Layout>
  )
}

export default App
