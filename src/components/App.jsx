// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import  User  from '../data/user.json'
import { Profile } from "components/Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList'
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import Stats from '../data/data.json'
import Friends from '../data/friends.json'
import Transactions from '../data/transactions.json'

export const App = () => {
  const { username, tag, location, avatar, stats } = User;
  return (
< div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
    >
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={Stats} />
      <FriendList friends={Friends} />
      <TransactionHistory transactions={Transactions} />
    </div>
  );
};
