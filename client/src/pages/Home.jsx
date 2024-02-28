import { Link } from "react-router-dom";
import CallToAction from "../Components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../Components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Welcome to Wanderlust Chronicles, your passport to a world of exploration, discovery, and adventure. Join us as we traverse the globe, uncovering hidden gems, sharing travel tips, and immersing ourselves in the diverse cultures and landscapes that make our planet so awe-inspiring.
          From bustling metropolises to remote villages, from pristine beaches to rugged mountain peaks, our blog is a virtual compass guiding you through the wonders of our planet. Whether you are a seasoned globetrotter or an armchair traveler dreaming of distant shores, Wanderlust Chronicles invites you to embark on a journey of discovery, one destination at a time.
          Through vivid storytelling, captivating photography, and practical advice, we aim to inspire and empower you to explore the world with an open heart and curious mind. From off-the-beaten-path adventures to luxury getaways, we cover a spectrum of travel experiences, catering to every wanderer desires and aspirations.
        </p>
        <Link to='/search' className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'>View all posts</Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction/>
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {
          posts && posts.length > 0 && (
            <div className='flex flex-col gap-6'>
              <h2 className='text-2xl font-semibold text-center'>
                Recent Posts
              </h2>
              <div className='flex flex-wrap gap-4 px-10'>
                {
                  posts.map((post) =>(
                    <PostCard key={post._id} post={post}/>
                  ))
                }
              </div>
              <Link to={'/search'} className='text-lg text-teal-500 hover:underline text-center'>
                View all posts
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}
