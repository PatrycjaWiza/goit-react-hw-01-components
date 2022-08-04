import user from '../social-profile/user.json';
import { Profile } from './Profile';

import data from '../statistics/data.json';
import { Statistics } from './Stats';

import friends from '../friend-list/friends.json';
import { FriendList, FriendListItem } from './Friendlist';

export const App = () => {
  return (
    <div>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        {/* Statistic component with title */}
        <Statistics title="Upload stats" stats={data} />
        {/* Statistics component without title */}
        {/* <Statistics stats={data} /> */}
      </div>
      <FriendList friends={friends}>
        <FriendListItem friends={friends} />
      </FriendList>
    </div>
  );
};
