import React from 'react'
import { ToastProps } from '../types'

const Toast: React.FC<ToastProps> = ({toastMessage, color}) => {
  return (
    <div className=" bg-red-500 rounded-lg text-white font-semibold py-4 px-3">
        <div className={`${color} ${color}-info`}>
          <span>{toastMessage}</span>
        </div>
      </div>
  )
}

export default Toast