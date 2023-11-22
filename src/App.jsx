import "./App.css";
import IMAGES from "./assets/images";
import { TypeAnimation } from "react-type-animation";

function App() {
	return (
		<>
			<div className="main">
				<div className="navbar">
					<img src={IMAGES.logo} alt="logo" className="logo" />

					<ul>
						<li>
							<a href="#">HOME</a>
						</li>
						<li>
							<a href="#">ABOUT</a>
						</li>
						<li>
							<a href="#">SKILLS</a>
						</li>
						<li>
							<a href="#">MY WORKS</a>
						</li>
						<li>
							<a href="#">CONTACT</a>
						</li>
					</ul>
				</div>

				<div className="info">
					<h3>Hi, I'm.</h3>
					<h1>
						<span>R</span>ITESH <span>R</span>ASTOGI
					</h1>
					<h3>
						Web designer and developer from Uttar Pradesh, India. I can do many
						things like websites creation, web application devlopment and to do
						businesses do better online.
					</h3>
					<a href="https://drive.google.com/file/d/1leHmnABGh7j4nAj5ZLLMVafiVD8zqeVD/view?usp=sharing">
						Resume Download
					</a>
				</div>
				<div className="image">
					<img src={IMAGES.ritesh} alt="ritesh" className="ritesh" />
				</div>

				<div className="icons">
					<a href="#">
						<ion-icon name="logo-facebook"></ion-icon>
					</a>
					<a href="#">
						<ion-icon name="logo-instagram"></ion-icon>
					</a>
					<a href="#">
						<ion-icon name="logo-twitter"></ion-icon>
					</a>
				</div>
			</div>
		</>
	);
}

export default App;
