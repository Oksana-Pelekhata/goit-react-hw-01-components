import PropTypes from "prop-types";
import { FriendListItem } from './FriendListItem'
import './FriendList.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {
                friends.map((friend) => (
                <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline } />
                   )
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
