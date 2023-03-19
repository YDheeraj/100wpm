
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

const MainHeader = () => {

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default MainHeader