import { users } from '../data/users';
import UserCard from '../components/UserCard';

function Users() {
  return (
    <div className="page users-page">
      <div className="page-header">
        <h1>Users Profiles</h1>
        <p>Browse through our global network list of professional developers and creators.</p>
      </div>
      
      <div className="users-grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;