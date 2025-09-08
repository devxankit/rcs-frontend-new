import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripe.js'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'

const AppWithAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithAOS />
  </StrictMode>,
)
