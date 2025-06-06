import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
const Layout = lazy(() => import('./components/Layout'))
const Home = lazy(() => import('./pages/Home'))
const Product = lazy(() => import('./pages/Product'))
const Filter = lazy(() => import('./components/productfilter/Filter'))
const ProductDetails = lazy(() => import('./components/productDetails/ProductDetails'))
import { ErrorBoundary } from 'react-error-boundary'
const App = () => {
  const location = useLocation()
  const ErrorFeedback = () => {
    return <div>
      <h1>Some Thing Went Wrong.............</h1>
    </div>
  }
  return <>

    <Routes>
      <Route path='/' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Layout /></ErrorBoundary>}>
        <Route index element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Home /></ErrorBoundary>} />
        <Route path='product' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Product /></ErrorBoundary>} />
        <Route path='product-filter' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Filter /></ErrorBoundary>} />
        <Route path='product-details' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><ProductDetails /></ErrorBoundary>} />
      </Route>

      <Route path='*' element={<h1>Page Not Found</h1>} />

    </Routes>

  </>
}

export default App