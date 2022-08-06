import {
  ProfileCard,
  Description,
  Avatar,
  DescriptionElement,
  Name,
  Stats,
  Label,
} from './ProfileStyles';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <DescriptionElement>@{tag}</DescriptionElement>
        <DescriptionElement>{location}</DescriptionElement>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Label bold className="quantity">
            {stats.followers.toLocaleString('en')}
          </Label>
        </li>
        <li>
          <Label>Views</Label>
          <Label bold className="quantity">
            {stats.views.toLocaleString('en')}
          </Label>
        </li>
        <li>
          <Label>Likes</Label>
          <Label bold className="quantity">
            {stats.likes.toLocaleString('en')}
          </Label>
        </li>
      </Stats>
    </ProfileCard>
  );
};

// propTypes
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
