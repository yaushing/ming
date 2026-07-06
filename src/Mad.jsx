import bgs from './assets/backgrounds.png';
import './assets/css/style.css';

function App() {
	return (
	<div className="main-content">
    	<div className="navbar-container">
    		<nav className="navbar navbar-s navbar-inverse navbar-fixed-top justify-content-center">
			<div className="title-containers">
			</div>
			</nav>
    	</div>
		<div className="bg-container">
			<img className="bg" alt="background" src={bgs} />
		</div>
		<div className="content-wrapper">
			<div className="messages-container">
				<span className="message">I'm sad rn sorry</span>
			</div>
		</div>
		<div className="footer-containers">
			<footer className="footer"/>
		</div>
    </div>
  );
}

export default App;