import { Profile } from './Profile';
import user from '../social-profile/user.json';
import { Stats } from './Stats';
import data from '../statistics/data.json';

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
        <Stats stats={data} />
        <Stats title="Upload stats" stats={data} />
      </div>
    </div>
  );
};
