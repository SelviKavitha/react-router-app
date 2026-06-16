import { useParams, useNavigate } from 'react-router';
import { users } from '../data/users';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="page error-detail-page">
        <h2>User Profile Not Found</h2>
        <p>The profile identifier token matching ID #{id} cannot be indexed within our local states.</p>
        <button onClick={() => navigate('/users')} className="btn btn-primary">
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="page user-detail-page">
      <button onClick={() => navigate('/users')} className="back-btn">
        &larr; Back to Directory
      </button>
      
      <div className="profile-container">
        <div className="profile-header">
          <img src={user.avatar} alt={user.name} className="profile-large-avatar" />
          <div className="profile-title">
            <h1>{user.name}</h1>
            <span className="badge">{user.role}</span>
          </div>
        </div>
        
        <div className="profile-body">
          <h3>Professional Statement</h3>
          <p className="bio-text">{user.bio}</p>
          
          <hr />
          
          <div className="contact-details">
            <p><strong>Direct Inquiries:</strong> {user.email}</p>
            <p><strong>System ID:</strong> Ref-0023{user.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;