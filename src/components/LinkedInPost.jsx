import "./linkedinpost.css";

export const LinkedInPost = ({ socialMedia }) => {
  const profile = socialMedia[0]; // Only LinkedIn profile

  return (
    <>
      {profile.posts.map((post, index) => (
        <div className="post-wrapper" key={index}>
          <div className="item">
            {/* Profile Info */}
            <div className="profileInfo">
              <img
                className="profileInfo-image"
                src={profile.LinkedInProfile}
                alt="profile"
              />
              <div className="profileInfo-text">
                <div className="">
                  <span className="text-sm font-medium line-clamp-2 text-black">
                    {profile.userName}
                  </span>
                </div>
                <div className="">
                  <span className="font-gray text-xs">
                    {profile.description}
                  </span>
                </div>
                <div className="">
                  <span className="font-gray text-xs">{post.time}</span>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="profileInfo-textSection">
              <p className="text-xs font-gray">
                {post.text}
                <span className="profileInfo-more font-gray">...see more</span>
              </p>
              <img src={post.img} alt="post" className="w-full" />
            </div>

            {/* Reactions */}
            <div className="translationSection">
              <span className="translationSection-translation font-bold">
                See translation
              </span>
              <span>
                <span className="translationSection-likeIcon" />
                <span className="translationSection-heartIcon" />
                <span className="translationSection-clapIcon" />
                <span className="translationSection-likeCount text-xs font-gray">
                  {post.like}
                </span>
                <span className="text-xs font-gray">
                  {" "}
                  {post.comment} comments
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
