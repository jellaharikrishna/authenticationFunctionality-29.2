import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  
  const onClickLogoutBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button type="button" className="logout-btn" onClick={onClickLogoutBtn}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
