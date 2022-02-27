import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="shadow-md card compact side bg-base-100">

      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="avatarImage" />
            </div>
          </div>

        </div>
        <div>

        <h3 className="card-title">{login}</h3>
        <Link className="text-base-content text-opacity-40" to={`/user/${login}`}>Visit Profile</Link>

        </div>

      </div>

    </div>
  )
}

export default UserItem