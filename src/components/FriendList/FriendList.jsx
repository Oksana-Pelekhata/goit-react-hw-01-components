import PropTypes from "prop-types";
import { FriendListItem } from './FriendListItem'
import './FriendList.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {
                friends.map((friend) => (
                    <li key={friend.id} className="friend-item">
                        <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline } />
                    </li>)
                )
            }
</ul>
    )
}

FriendList.propTypes = {
     friends:PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })
  ).isRequired,
 }
