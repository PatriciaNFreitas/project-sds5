import ImgDsDark from 'assets/img/ds-dark.svg'
//função lambda//
const NavBar = () => {
  return (
    <div>
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <img src={ImgDsDark} alt="DevSuperior" width="120" />
        </nav>
      </div>
    </div>
  )
}

export default NavBar;
