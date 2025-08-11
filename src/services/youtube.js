const avatars = [
  "https://i.pravatar.cc/150?img=10",
  "https://i.pravatar.cc/150?img=20",
  "https://i.pravatar.cc/150?img=30",
  "https://i.pravatar.cc/150?img=40",
  "https://i.pravatar.cc/150?img=50",
];

const videoData = {
  Trending: [
    {
      id: "trending-1",
      title: "Top 10 Viral TikTok Challenges of 2025",
      channelTitle: "Viral Hub",
      channelAvatar: avatars[0],
      thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
      views: "15.3M views",
      publishedAt: "2 days ago",
      description: "Check out the hottest TikTok challenges trending this year.",
      category: "Trending",
    },
    {
      id: "trending-2",
      title: "Incredible Drone Footage Over the Grand Canyon",
      channelTitle: "SkyView",
      channelAvatar: avatars[1],
      thumbnail: "https://img.youtube.com/vi/TcMBFSGVi1c/hqdefault.jpg",
      views: "8.7M views",
      publishedAt: "5 days ago",
      description: "Experience breathtaking drone shots over the Grand Canyon.",
      category: "Trending",
    },
    {
      id: "trending-3",
      title: "New Tech Innovations in 2025",
      channelTitle: "TechWorld",
      channelAvatar: avatars[2],
      thumbnail: "https://img.youtube.com/vi/1La4QzGeaaQ/hqdefault.jpg",
      views: "3.4M views",
      publishedAt: "1 week ago",
      description: "Explore the latest tech gadgets released this year.",
      category: "Trending",
    },
    {
      id: "trending-4",
      title: "Epic Fails Compilation - Don't Try This!",
      channelTitle: "FailArmy",
      channelAvatar: avatars[3],
      thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
      views: "22.1M views",
      publishedAt: "3 days ago",
      description: "Watch the funniest fails caught on camera.",
      category: "Trending",
    },
    {
      id: "trending-5",
      title: "Live Concert: The Weeknd - After Hours Tour",
      channelTitle: "Live Nation",
      channelAvatar: avatars[4],
      thumbnail: "https://img.youtube.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
      views: "12.5M views",
      publishedAt: "1 day ago",
      description: "Watch highlights from The Weeknd's latest tour.",
      category: "Trending",
    },
  ],

  Gaming: [
    {
      id: "gaming-1",
      title: "Minecraft: Epic Castle Build Tutorial",
      channelTitle: "BlockMaster",
      channelAvatar: avatars[1],
      thumbnail: "https://img.youtube.com/vi/mf7kMX85k9g/hqdefault.jpg",
      views: "9.2M views",
      publishedAt: "3 days ago",
      description: "Learn how to build an epic castle in Minecraft step-by-step.",
      category: "Gaming",
    },
    {
      id: "gaming-2",
      title: "Call of Duty: New Map Gameplay Reveal",
      channelTitle: "FPS Central",
      channelAvatar: avatars[2],
      thumbnail: "https://img.youtube.com/vi/7QU1nvuxaMA/hqdefault.jpg",
      views: "5.5M views",
      publishedAt: "5 days ago",
      description: "Exclusive gameplay footage of the new Call of Duty map.",
      category: "Gaming",
    },
    {
      id: "gaming-3",
      title: "Top 5 Fortnite Skins in 2025",
      channelTitle: "GamerZone",
      channelAvatar: avatars[3],
      thumbnail: "https://img.youtube.com/vi/N6gybhRDLxY/hqdefault.jpg",
      views: "7.8M views",
      publishedAt: "1 week ago",
      description: "Check out the coolest Fortnite skins this year.",
      category: "Gaming",
    },
    {
      id: "gaming-4",
      title: "League of Legends - Epic Teamfight Compilation",
      channelTitle: "LoL Highlights",
      channelAvatar: avatars[4],
      thumbnail: "https://img.youtube.com/vi/d3LDcTkc6EY/hqdefault.jpg",
      views: "11.9M views",
      publishedAt: "2 days ago",
      description: "Watch epic teamfights from recent LoL tournaments.",
      category: "Gaming",
    },
    {
      id: "gaming-5",
      title: "How to Get Better at Apex Legends",
      channelTitle: "ProTips",
      channelAvatar: avatars[0],
      thumbnail: "https://img.youtube.com/vi/3BJpcl8W0qs/hqdefault.jpg",
      views: "6.3M views",
      publishedAt: "4 days ago",
      description: "Essential tips to improve your Apex Legends gameplay.",
      category: "Gaming",
    },
  ],

  Music: [
    {
      id: "music-1",
      title: "Top 50 Pop Hits 2025 - Playlist",
      channelTitle: "MusicWave",
      channelAvatar: avatars[2],
      thumbnail: "https://img.youtube.com/vi/uelHwf8o7_U/hqdefault.jpg",
      views: "45.0M views",
      publishedAt: "1 month ago",
      description: "Enjoy the top pop hits this year in one playlist.",
      category: "Music",
    },
    {
      id: "music-2",
      title: "Live: Coldplay - A Head Full of Dreams Tour",
      channelTitle: "ConcertTV",
      channelAvatar: avatars[1],
      thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
      views: "20.3M views",
      publishedAt: "2 weeks ago",
      description: "Watch the live performance of Coldplay's latest tour.",
      category: "Music",
    },
    {
      id: "music-3",
      title: "Lo-Fi Chill Beats to Relax/Study To",
      channelTitle: "LoFi Chill",
      channelAvatar: avatars[3],
      thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
      views: "8.6M views",
      publishedAt: "6 days ago",
      description: "Perfect Lo-Fi beats to help you focus and relax.",
      category: "Music",
    },
    {
      id: "music-4",
      title: "Classical Music for Sleep and Relaxation",
      channelTitle: "Peaceful Piano",
      channelAvatar: avatars[0],
      thumbnail: "https://img.youtube.com/vi/rf55_94R51Y/hqdefault.jpg",
      views: "5.1M views",
      publishedAt: "3 days ago",
      description: "Soothing classical pieces to help you sleep better.",
      category: "Music",
    },
    {
      id: "music-5",
      title: "Jazz Classics: The Best of Miles Davis",
      channelTitle: "Jazz Lounge",
      channelAvatar: avatars[4],
      thumbnail: "https://img.youtube.com/vi/TPYEQTRvX6A/hqdefault.jpg",
      views: "3.7M views",
      publishedAt: "1 week ago",
      description: "Enjoy classic jazz tunes from the legend Miles Davis.",
      category: "Music",
    },
  ],

  Technology: [
    {
      id: "tech-1",
      title: "Apple iPhone 17 Review - Is it Worth it?",
      channelTitle: "TechGuru",
      channelAvatar: avatars[0],
      thumbnail: "https://img.youtube.com/vi/d9NF2edxy-M/hqdefault.jpg",
      views: "10.7M views",
      publishedAt: "3 days ago",
      description: "In-depth review of Apple's newest iPhone 17.",
      category: "Technology",
    },
    {
      id: "tech-2",
      title: "Building a Custom Gaming PC - Step by Step",
      channelTitle: "BuildMaster",
      channelAvatar: avatars[2],
      thumbnail: "https://img.youtube.com/vi/1hHMwLxN6EM/hqdefault.jpg",
      views: "8.9M views",
      publishedAt: "1 week ago",
      description: "Learn how to build your own high-performance gaming PC.",
      category: "Technology",
    },
    {
      id: "tech-3",
      title: "Tesla Model Z: First Drive & Review",
      channelTitle: "AutoTech",
      channelAvatar: avatars[3],
      thumbnail: "https://img.youtube.com/vi/qXxrrqlhRso/hqdefault.jpg",
      views: "7.6M views",
      publishedAt: "4 days ago",
      description: "Tesla's new model Z performance and features overview.",
      category: "Technology",
    },
    {
      id: "tech-4",
      title: "Top 5 AI Tools Changing the World in 2025",
      channelTitle: "FutureTech",
      channelAvatar: avatars[4],
      thumbnail: "https://img.youtube.com/vi/OQz4JFWzmLk/hqdefault.jpg",
      views: "9.3M views",
      publishedAt: "2 weeks ago",
      description: "Discover AI tools that are revolutionizing industries.",
      category: "Technology",
    },
    {
      id: "tech-5",
      title: "How Quantum Computing Works",
      channelTitle: "Science Explained",
      channelAvatar: avatars[1],
      thumbnail: "https://img.youtube.com/vi/QU4QyM5j2Vw/hqdefault.jpg",
      views: "6.1M views",
      publishedAt: "5 days ago",
      description: "A beginner-friendly explanation of quantum computing.",
      category: "Technology",
    },
  ],
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const allVideos = Object.values(videoData).flat();

export const getVideosByCategory = async (category) => {
  await delay(400);
  if (category === "All") return allVideos;
  return videoData[category] || [];
};

export const searchVideos = async (query) => {
  await delay(400);
  return allVideos.filter((v) =>
    v.title.toLowerCase().includes(query.toLowerCase())
  );
};

export const getVideoById = async (id) => {
  await delay(300);
  return allVideos.find((v) => v.id === id);
};

export const getRelatedVideos = async (id) => {
  await delay(300);
  const video = allVideos.find((v) => v.id === id);
  if (!video) return [];
  return allVideos.filter((v) => v.category === video.category && v.id !== id);
};
