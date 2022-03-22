

import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className='container bg-red-700'> {children} </div>
  )
}

export default Layout