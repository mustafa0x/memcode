import CourseApi from '~/api/CourseApi';

import { Link } from 'react-router-dom';
import Loading from '~/components/Loading';
import ListOfCourseCards from '~/appComponents/ListOfCourseCards';

class ForBeginners extends React.Component {
  state = {
    speGetCourses: {}
  }

  render = () =>
    <section className="for-beginners">
      <div className="container">
        <article className="welcome">
          <h1 className="title">Welcome!</h1>
          <div className="description">
            <h2>You are not learning any courses yet.</h2>
            <p>
              You may look at the existing <Link to="/courses">courses</Link>, or <Link to="/courses/new">create your own course</Link>.
            </p>
          </div>
        </article>
      </div>
    </section>
}

export { ForBeginners };
