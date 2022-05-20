export const SocialProfile = p => {
  // console.log(p);
  return (
    <div className="profile">
      <div className="description">
        <img src={p.avatar} alt="User avatar" className="avatar" />
        <p className="name">{p.username}</p>
        <p className="tag">@{p.tag}</p>
        <p className="location">{p.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{p.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{p.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">3{p.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
