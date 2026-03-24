import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const unregisterServiceWorkers = async () => {
  if (!('serviceWorker' in navigator)) {
    return
  }

  try {
    const registrations = await navigator.serviceWorker.getRegistrations()
    await Promise.all(registrations.map((registration) => registration.unregister()))
  } catch (error) {
    // Avoid blocking app startup if browser APIs are unavailable.
    console.warn('Failed to unregister service workers:', error)
  }
}

window.addEventListener('load', () => {
  unregisterServiceWorkers()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
