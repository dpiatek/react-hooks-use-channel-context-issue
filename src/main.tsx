import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AblyProvider } from "ably/react";
import { Realtime } from "ably";

import './index.css'



const client = new Realtime.Promise({
  key: import.meta.env.VITE_ABLY_KEY,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AblyProvider client={client} id="vite-test">
      <App />
    </AblyProvider>
)
