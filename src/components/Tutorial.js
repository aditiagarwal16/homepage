import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Assuming you have configured Firebase in this file
import { collection, getDocs } from 'firebase/firestore'; // Ensure Firestore imports are correct

const Tutorial = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoCollection = collection(db, 'videos');
        const videoSnapshot = await getDocs(videoCollection);
        const videoList = videoSnapshot.docs.map((doc) => doc.data());
        console.log("Fetched Videos: ", videoList); // Log fetched videos
        setVideos(videoList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos: ', error);
      }
    };
  
    fetchVideos();
  }, []);
  

  if (loading) {
    return <div>Loading videos...</div>;
  }

  return (
    <div>
      <h2>Tutorial Videos</h2>
      {videos.length === 0 ? (
        <p>No videos available</p>
      ) : (
        <ul>
          {videos.map((video, index) => (
            <li key={index}>
              <h3>{video.title}</h3>
              <p>Views: {video.views}</p>
              <p>Rating: {video.rating}</p>
              <a href={video.url} target="_blank" rel="noopener noreferrer">Watch Video</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tutorial;



