import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from '../components/Users'
import Todos from '../components/Todos'
import Profile from '../components/Profile'
import Product from '../components/Product'

export default function RootRouter() {
    return (
        <>
        <h3>Routes</h3>
            <Routes>
                <Route index element={<h1>Home One</h1>} />
                {/* <Route path="/" element={<h1>Home Two</h1>} /> */}
                <Route path="/users" element={<Users />} />
                <Route path="/todos/*" element={<Todos />} />
                <Route path="/todos" element={<h1>Todo-2!</h1>} />
                <Route path="*" element={<h1>404! Not Found</h1>} />

                <Route path="/profile/:userId/:detailId" element={<Profile />} />
                <Route path="/product/:productId" element={<Product />} />

                <Route path="/about"  >
                    <Route index element={<h1>About</h1>} />
                    <Route path="map" element={<h1>About Map Page</h1>} />
                    <Route path="contact" element={<h1>About Contact Page</h1>} />
                    <Route path="*" element={<h1>About 404! Page</h1>} />
                </Route>


            </Routes>
        </>
    )
}
