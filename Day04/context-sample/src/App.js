import React from 'react'
import User from './components/User'
import { ThemeContextApi, UserContextApi } from './hooks/rootContextApi'

export default function App() {
  return (
    <div>App
      <hr />
      <ThemeContextApi.Provider value="">
        <UserContextApi.Provider
          value={{ username: 'Tommy', age: 25 }}>
          <User>
              {/* ...children */}
            </User>
        </UserContextApi.Provider>
      </ThemeContextApi.Provider>
    </div>
  )
}
