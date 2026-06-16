import { Link } from 'react-router';

function UserCard({ user }) {

  return (
    <div className="card">
      <img src={user.avatar} alt={`${user.name}'s profile avatar`} className="user-avatar" />
      <h3 className="user-name">{user.name}</h3>
      <p className="user-role">{user.role}</p>
      <p className="user-email">{user.email}</p>
      <Link to={`/users/${user.id}`} className="view-profile-btn">
        View Profile
      </Link>
    </div>
  );
}

export default UserCard;