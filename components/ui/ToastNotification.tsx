"use client"

import { ToastContainer } from 'react-toastify'

export default function ToastNotification() {
    return (
        <ToastContainer 
            pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
    )
}