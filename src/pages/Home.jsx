import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home-page">
      <header className="hero-section">
        <h1>Welcome to TalentStack</h1>
        <p>The ultimate platform to explore and discover modern network profiles.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/users')} className="btn btn-primary">
            Explore Users
          </button>
          <button onClick={() => navigate('/about')} className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </header>
      
      <section className="featured-section">
        <h2>Why Choose TalentStack?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Dynamic Profiles</h3>
            <p>Every profile generated utilizes advanced client-side parameterized routing structures smoothly.</p>
          </div>
          <div className="feature-item">
            <h3>Lightning Fast</h3>
            <p>Built completely on top of React Single Page Application infrastructure for instant responses.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;