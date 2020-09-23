import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className="wrapper">
    <div className="container">
      {children}
    </div>
    <div className="circle"></div>
  </div>
)

export default Layout
