import logo from '../assets/logo.svg'

function MyHeader(){
  return (
    <>
    <header>
      <img src={logo} alt="kamome-no-salad logo" />
      <h1>かもめのサラダ</h1>
      <ul>
        <li>
          About
        </li>
        <li>
          Member
        </li>
      </ul>
    </header>
    </>
  )
}

export default MyHeader