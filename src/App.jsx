
import './App.css';
import Profile from './components/Task-1/Profile';
import userData from './userData.json';
import FriendList from './components/Task-2/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/Task-3/TransactionHistory'
import transactions from "./transactions.json";


function App() {
  return (
    <>
      <Profile
        name = {userData.username}
        tag = {userData.tag}
        location = {userData.location}
        image = {userData.avatar}
        stats = {userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App
