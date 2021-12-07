import { TopBarContainer, TopLeft, TopCenter, NavUL, NavLI, TopRight, ProfilePic} from "./topBarStyles"
import profilePic from '../../assets/images/profilePicture.jpg'

const NavBar = () => {
  return (
    <TopBarContainer>
      <TopLeft>
        <i className="fab fa-gitlab"></i>
        <i className="fab fa-github-square"></i>
        <i className="fab fa-twitter-square"></i>
      </TopLeft>
      <TopCenter>
        <nav>
          <NavUL>
            <NavLI>HOME</NavLI>
            <NavLI>ABOUT</NavLI>
            <NavLI>CONTACT</NavLI>
            <NavLI>WRITE</NavLI>
            <NavLI>LOGOUT</NavLI>
          </NavUL>
        </nav>
      </TopCenter>
      <TopRight>
        <ProfilePic
        src={profilePic}
        alt='Profile Picture'>
        </ProfilePic>
        <i className="fas fa-search"></i>
      </TopRight>
    </TopBarContainer>
  )
}

export default NavBar