import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="page not-found-page">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The destination route resource you are seeking does not exist or has been relocated permanently.</p>
        <Link to="/" className="btn btn-primary home-return-btn">
          Return to Dashboard Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;