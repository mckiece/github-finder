import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function UserItem({ user: { login, avatar_url } }) {
	return (
		<div className="shadow-md side card compact bg-base-100 shadow-gray-800">
			<div className="items-center space-x-4 flexrow card-body">
				<div>
					<div className="avatar">
						<div className="w-20 h-20 rounded-full shadow">
							<img src={avatar_url} alt="Profile" />
						</div>
					</div>
				</div>
				<div>
					<h2 className="card-title">{login}</h2>
					<Link
						className="text-base-content text-opacity-40"
						to={`/user/${login}`}
					>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	);
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
