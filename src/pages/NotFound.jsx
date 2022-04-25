import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="hero">
			<div className="hero-content text-center">
				<div className="max-w-lg">
					<h1 className="mb-8 text-8xl font-bold">Oopsie</h1>
					<p className="mb-8 text-5xl">404 - Page Not Found</p>
					<Link
						to="/github-finder/"
						className="btn btn-primary btn-lg"
					>
						<FaHome className="mr-2" />
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
