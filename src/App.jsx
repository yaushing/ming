import { useState } from 'react';
import bg from './assets/background.jpg';
import './assets/css/style.css';

const MESSAGES = [
	"You're so damn cute, aways, from every angle you're always cute.",
	"Babe your smile lights up my world.",
	"You *are* my world.",
	"I love you thoughtful you are with your gifts.",
	"I love that you're so hardworking and that you never give up.",
	"I love that your determination is so strong.",
	"I really appreciate that you still find the time to call me even when you have a long day.",
	"I really appreciate that you still will talk to me even when I hurt you and that we can talk it out.",
	"The way you always comfort me when I'm hurt really brightens my day",
	"The first text I get from you in the morning is the best part of the morning I have in school",
	"The thing I look forward to every day is seeing you when we call",
	"I will always do my best to support you and encourage you however I can.",
	"The best part of my life will always be meeting you.",
	"You're such a good boyfriend."
];

function App() {
	const [message, setMessage] = useState(MESSAGES[0]);
	let previousIndex = -12
	const handleClick = () => {
		const randomIndex = Math.floor(Math.random() * MESSAGES.length);
		while (randomIndex === previousIndex) {
			randomIndex = Math.floor(Math.random() * MESSAGES.length);
		}
		previousIndex = randomIndex
		setMessage(MESSAGES[randomIndex]);
	};

	return (
	<div className="main-content">
    	<div className="navbar-container">
    		<nav className="navbar navbar-inverse navbar-fixed-top justify-content-center">
			<div className="title-container">
			</div>
			</nav>
    	</div>
		<div className="bg-container">
			<img className="bg" alt="background" src={bg} />
		</div>
		<div className="content-wrapper">
			<div className="messages-container">
				<span className="message">{message}</span>
			</div>
			<button className="btn btn-success mt-3" onClick={handleClick}>
				New Message
			</button>
		</div>
		<div className="footer-container">
			<footer className="footer "/>
		</div>
    </div>
  );
}

export default App;