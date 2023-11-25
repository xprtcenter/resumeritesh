import IMAGES from "../assets/images";
import "./css/main.css";

const Main = () => {
	return (
		<div className="main">
			<div className="info-image-container">
				<div className="info">
					<h3>{`Hi, I'm.`}</h3>
					<h1>
						<span>R</span>ITESH <span>R</span>ASTOGI
					</h1>
					<h3>
						Web designer and developer from Uttar Pradesh, India. I am modarate
						in websites creation, web application devlopment and to do
						businesses do better online.
					</h3>
					<a href="https://drive.google.com/file/d/1leHmnABGh7j4nAj5ZLLMVafiVD8zqeVD/view?usp=sharing">
						Resume Download
					</a>
				</div>
				<div className="left-part">
					<div className="image-cointaner">
						<img src={IMAGES.ritesh2} alt="ritesh" className="ritesh" />
					</div>
				</div>
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
	);
};

export default Main;
