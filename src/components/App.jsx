import user from '../social-profile/user.json';
import { Profile } from './Profile/Profile';

import data from '../statistics/data.json';
import { Statistics } from './Statistics/Stats';

import friends from '../friend-list/friends.json';
import { FriendList, FriendListItem } from './FriendList/Friendlist';

import transactions from '../transaction-history/transactions.json';
import { TransactionHistory } from './Transactions/Transactions';

export const App = () => {
  return (
    <div>
      {/* profile component */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* Statistic component with title */}
      <Statistics title="Upload stats" stats={data} />
      {/* Statistics component without title */}
      {/* <Statistics stats={data} /> */}

      {/* Friendlist component */}
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>

      {/* Transaction History component */}
      <TransactionHistory items={transactions} />
    </div>
  );
};
