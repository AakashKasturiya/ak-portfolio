import { motion } from "framer-motion";

import { socialMedia } from "../constants";
import { LinkedInPost } from "./LinkedInPost";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const SocialMedia = () => {
  return (
    <section
      className="px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32"
      id="social"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Connect</span> With Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LinkedIn Panel */}
          <motion.div
            className="w-full lg:w-1/2 bg-white rounded shadow-lg overflow-hidden flex flex-col h-[600px]"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            custom={1}
          >
            <div className="bg-[#0A66C2] p-4 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full mr-2">
                <i className="ri-linkedin-fill text-[#0A66C2] ri-lg"></i>
              </div>
              <h3 className="text-white font-semibold text-xl">LinkedIn</h3>
            </div>
            <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start">
                  <img
                    src={socialMedia[0].LinkedInProfile}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
                  />
                  <div className="ml-4 flex-1">
                    <h4 className="text-xl font-bold text-black mb-1">
                      {socialMedia[0].userName}
                    </h4>
                    <p className="text-gray-600 mb-1 text-sm">
                      {socialMedia[0].description}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <i className="ri-group-line mr-1"></i>
                      <span>{socialMedia[0].connection}</span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://www.linkedin.com/in/aakash-kasturiya/"
                        className="border-btn text-gray-600 px-4 py-1.5 text-sm font-medium rounded"
                      >
                        Connect
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Posts Section */}
              <div className="p-6">
                <h4 className="font-semibold mb-4 text-gray-600">
                  Recent Posts
                </h4>
                <div className="space-y-4">
                  <LinkedInPost socialMedia={socialMedia} />
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <a href="https://www.linkedin.com/in/aakash-kasturiya/">
                <button className="w-full bg-[#0A66C2] text-white py-2.5 font-medium rounded cursor-pointer">
                  View Full Profile
                </button>
              </a>
            </div>
          </motion.div>

          {/* YouTube Panel */}
          <motion.div
            className="w-full lg:w-1/2 max-h-[600px] bg-white rounded shadow-lg overflow-hidden flex flex-col"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            custom={2}
          >
            <div className="bg-[#FF0000] p-4 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full mr-2">
                <i className="ri-youtube-fill text-[#FF0000] ri-lg"></i>
              </div>
              <h3 className="text-white font-semibold text-xl">YouTube</h3>
            </div>
            <div className="overflow-y-auto">
              <div className="relative">
                <div
                  className="h-32 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://yt3.googleusercontent.com/IFJHh5Sz8jGKuu_ORSPXLyzewRhymBchFA0QEcM6AFsnC2GLgPOrQWPQWNUqOKOw-2hfdAj5YA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj')",
                  }}
                ></div>
                <div className="absolute -bottom-12 left-6">
                  <img
                    src={socialMedia[1].YoutubeProfile}
                    alt="Channel Logo"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
                  />
                </div>
              </div>
              <div className="pt-16 px-6 pb-6 border-b border-gray-200">
                <h4 className="text-xl font-bold text-black">
                  {socialMedia[1].userName}
                </h4>
                <div className="flex items-center text-gray-500 text-sm mt-1 mb-3">
                  <span>{socialMedia[1].subscribers} subscribers</span>
                  <span className="mx-2">•</span>
                  <span>{socialMedia[1].videosCount}</span>
                </div>
                <p className="text-gray-600 text-sm">
                  {socialMedia[1].description}
                </p>
              </div>
              <div className="p-6 flex-1">
                <h4 className="font-semibold mb-4 text-gray-600">
                  Latest Videos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                  {socialMedia[1].videos.map((video, i) => (
                    <a href={video.link} key={i} target="_blank">
                      <div>
                        <div className="relative rounded overflow-hidden mb-2">
                          <img
                            src={video.thumb}
                            alt="Video Thumbnail"
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <h5 className="text-sm font-medium line-clamp-2 text-black">
                          {video.title}
                        </h5>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <span>{video.views}</span>
                          <span className="mx-1">•</span>
                          <span>{video.time}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <a href="https://www.youtube.com/@aakashkasturiyavlogs">
                <button className="w-full bg-[#FF0000] text-white py-2.5 font-medium rounded cursor-pointer">
                  Visit YouTube Channel
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
