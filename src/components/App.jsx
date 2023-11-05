import { Profile } from "./Profile/profile"
import userData from "./Profile/user.json"

import { Statistics } from "./Statistics/statistics"
import statsData from "./Statistics/data.json"

import { FriendList } from "./FriendsList/friendList"
import friendsData from "./FriendsList/friends.json"

import { Transaction } from "./Transactions/transaction"
import transactionsData from "./Transactions/transactions.json"

export const App = () => {
  return (
    <div>
       <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <Transaction transactions={transactionsData} /> 
    </div>
  )
}
