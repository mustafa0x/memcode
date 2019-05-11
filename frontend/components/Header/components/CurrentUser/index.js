import { NavLink } from 'react-router-dom';
import LearnReviewLinks from './components/LearnReviewLinks';
import NotificationsTogglerAndDropdown from './components/NotificationsTogglerAndDropdown';

class CurrentUser extends React.Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    dontLinkToLearnOrReview: PropTypes.string
  }

  renderAvatar = () =>
    <NavLink className="avatar" to="/profile">
      <img
        src={this.props.currentUser.avatarUrl}
        alt="Avatar of a current user"
      />
    </NavLink>

  render = () =>
    <section className="current-user">
      <NavLink
        to="/courses/learning"
        className="button -purple my-courses-link"
      >MY COURSES</NavLink>
      <NotificationsTogglerAndDropdown currentUser={this.props.currentUser}/>
      <LearnReviewLinks currentUser={this.props.currentUser} dontLinkToLearnOrReview={this.props.dontLinkToLearnOrReview}/>
      {this.renderAvatar()}
    </section>
}

export default CurrentUser;
