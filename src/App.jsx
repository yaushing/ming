import bg from './assets/background.jpg';
import './assets/css/style.css';

function App() {

	return (
	<div className="main-content">
    	<div className="navbar-container">
    		<nav class="navbar navbar-inverse navbar-fixed-top justify-content-center">
			<div className="title-container">
			</div>
			</nav>
    	</div>
		<div className="bg-container">
			<img className="bg" alt = "background" src={bg} />
		</div>
		<div className="footer-container">
			<footer className="footer "/>
		</div>
    </div>
  );
}

export default App;
