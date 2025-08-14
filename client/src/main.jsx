
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import { ClerkProvider } from '@clerk/clerk-react'
// import { StrictMode } from 'react'


// // Import your Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Missing Publishable Key')
// }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
//     <BrowserRouter>
//        <App />
//     </BrowserRouter>
//   </ClerkProvider>
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key! Add it to your .env file.")
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
)
