import ProfileHeader from './ProfileHeader'
import Posts from '../posts/Posts'
import { useState, useEffect } from "react";
import axios from "axios";


const ProfileContainer = ({userId}) => {
 
 const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, [userId]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`
      );
      setUser(response.data);
      setFormData({
        name: response.data.name,
        email: response.data.email,
        bio: response.data.bio,
      });
    } catch (err) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}/posts`
      );
      setPosts(response.data);
    } catch (err) {
      console.error("Failed to fetch posts");
    }
  };

  const handleSaveProfile = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`,
        formData
      );
      setUser(response.data);
      setIsEditing(false);
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

 
 
    return (
     <div className="user-profile">
      <ProfileHeader 
      setIsEditing={setIsEditing} 
      handleInputChange={handleInputChange} 
      handleSaveProfile={handleSaveProfile}
      user={user}
      formData={formData}
      isEditing={isEditing}
      error={error}
      onRetry={fetchUserData}
      loading={loading}
      />

<Posts posts={posts} loading={loading} onFetch={fetchUserPosts} error={error} />
    </div>
  )
}

export default ProfileContainer
