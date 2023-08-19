import Navbar from "./navbar/Navbar"

const WithNavbar = (WrappedComponent) => {
  return (
    <div>
        <Navbar />
        <WrappedComponent />
    </div>
  )
}

export default WithNavbar