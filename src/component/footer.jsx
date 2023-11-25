import "./css/footer.css";
const Footer = () => {
	return (
		<div className="footer">
			<div className="row-container">
				<div className="col-sm-4 col-md-3 item">
					<h3>Services</h3>
					<ul>
						<li>
							<a href="#">Web design</a>
						</li>
						<li>
							<a href="#">Development</a>
						</li>
						<li>
							<a href="#">Hosting</a>
						</li>
					</ul>
				</div>
				<div className="col-sm-4 col-md-3 item">
					<h3>About</h3>
					<ul>
						<li>
							<a href="#">Company</a>
						</li>
						<li>
							<a href="#">Team</a>
						</li>
						<li>
							<a href="#">Legacy</a>
						</li>
					</ul>
				</div>
				<div className="col-sm-4 col-md-3 item">
					<h3>Careers</h3>
					<ul>
						<li>
							<a href="#">Job openings</a>
						</li>
						<li>
							<a href="#">Employee success</a>
						</li>
						<li>
							<a href="#">Benefits</a>
						</li>
					</ul>
				</div>
			</div>
			<p className="copyright">xprt computer center © 2021</p>
		</div>
	);
};

export default Footer;
