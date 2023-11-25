import IMAGES from "../assets/images";

const Header = () => {
	return (
		<>
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
		</>
	);
};

export default Header;
