import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { FaPlay, FaRegComment, FaHeart } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  Content,
  VideoCard1,
  VideoThumbnail,
  VideoDetails,
  NewsMeta,
  VideoMetacat,
  Title,
  CommentContainer,
  CommentInput,
  CommentButton,
  InteractionContainer,
  CommentSection,
  LikeCount,
  Comment,
  ProfileImage,
  CommentContent,
  UserHeader,
  UserInfo,
  Username,
  Time,
  CommentText,
  Actions,
  ActionIcon,
} from "../exclusiveshorts/Exclusiveshorts.styles";
import { getVideos, ShortlikeVideo, ShortVideoaddComment } from "../../../../services/videoApi/videoApi";

const Exclusiveshorts = () => {
  const [videosData, setVideosData] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [userId, setUserId] = useState(null);
  const [likeCounts, setLikeCounts] = useState({});
  const [error, setError] = useState("");
  const [openCommentSection, setOpenCommentSection] = useState(null);

  useEffect(() => {
    const storedUserId = Cookies.get("userId");
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getVideos();
        if (response.success && Array.isArray(response.data)) {
          setVideosData(response.data);
          console.log("Received videos data:", response.data);

          // Initialize like counts
          const initialLikeCounts = {};
          response.data.forEach((video) => {
            initialLikeCounts[video._id] = video.likes || 0;
          });
          setLikeCounts(initialLikeCounts);

          // Initialize comments if they exist in the video data
          const initialComments = {};
          response.data.forEach((video) => {
            if (video.Comments && Array.isArray(video.Comments)) {
              initialComments[video._id] = video.Comments;
            }
          });
          setComments(initialComments);
        } else {
          setVideosData([]);
        }
      } catch (error) {
        setVideosData([]);
      }
    };

    fetchVideos();
  }, []);

  const handlePlayClick = (videoId) => {
    setPlayingVideoId(videoId);
  };

  const handleLikeClick = async (videoId) => {
    if (!userId) {
      return;
    }

    try {
      const isLiked = likedVideos.has(videoId);
      const likeData = { longVideoId: videoId, userId };

      const response = await ShortlikeVideo(likeData);
      const newLikedVideos = new Set(likedVideos);
      isLiked ? newLikedVideos.delete(videoId) : newLikedVideos.add(videoId);
      setLikedVideos(newLikedVideos);

      setLikeCounts((prevCounts) => ({
        ...prevCounts,
        [videoId]: isLiked ? prevCounts[videoId] - 1 : prevCounts[videoId] + 1,
      }));
    } catch (error) {
      console.error("Error liking video:", error);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = async (videoId) => {
    if (!newComment.trim()) {
      alert("Please enter a comment.");
      return;
    }

    if (!userId) {
      setError("User is not logged in.");
      return;
    }

    const commentData = { text: newComment, videoId, userId };

    try {
      const response = await ShortVideoaddComment(commentData);
      setComments((prevComments) => ({
        ...prevComments,
        [videoId]: [...(prevComments[videoId] || []), response.comment],
      }));

      setNewComment("");
      setError("");
    } catch (err) {
      setError("Failed to add comment. Please try again.");
    }
  };

  const toggleCommentSection = (videoId) => {
    if (openCommentSection === videoId) {
      setOpenCommentSection(null);
    } else {
      setOpenCommentSection(videoId);
    }
  };

  const handleLikeComment = (commentId, videoId) => {
    setComments((prevComments) => ({
      ...prevComments,
      [videoId]: prevComments[videoId].map((comment) =>
        comment._id === commentId
          ? { ...comment, likes: (comment.likes || 0) + 1 }
          : comment
      ),
    }));
  };

  return (
    <Container>
      <Content>
        {videosData.map((video) => (
          <React.Fragment key={video._id}>
            <VideoCard1>
              <VideoThumbnail onClick={() => handlePlayClick(video._id)}>
                {playingVideoId === video._id ? (
                  <video id={video._id} controls autoPlay loop width="100%" height="200px" style={{ objectFit: "cover" }}>
                    <source src={video.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    <img src={video.thumbnail} alt={video.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                    <FaPlay size={40} color="#fff" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                  </>
                )}
              </VideoThumbnail>
              <VideoDetails>
                <NewsMeta>
                  <span>{new Date(video.createdAt).toLocaleDateString()}</span>
                </NewsMeta>
                <Title>{video.title}</Title>
                <VideoMetacat>{/* {video.category} */}</VideoMetacat>
              </VideoDetails>
            </VideoCard1>

            <CommentSection>
              <InteractionContainer>
                <CommentContainer>
                  <AiOutlineLike
                    size={30}
                    color={likedVideos.has(video._id) ? "blue" : "#000"}
                    onClick={() => handleLikeClick(video._id)}
                  />
                  <LikeCount>{likeCounts[video._id] || 0}</LikeCount>
                  <FaRegComment
                    size={25}
                    onClick={() => toggleCommentSection(video._id)}
                  />
                  <CommentInput
                    type="text"
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Add a comment..."
                  />
                  <CommentButton onClick={() => handleAddComment(video._id)}>
                    Add Comment
                  </CommentButton>
                </CommentContainer>
              </InteractionContainer>

              <AnimatePresence>
                {openCommentSection === video._id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {comments[video._id]?.length === 0 ? (
                      <p>No comments yet.</p>
                    ) : (
                      comments[video._id]?.map((comment) => (
                        <Comment key={comment._id}>
                          <ProfileImage
                            src={comment.user.profileImage || "https://via.placeholder.com/50"}
                            alt={comment.user.displayName}
                          />
                          <CommentContent>
                            <UserHeader>
                              <UserInfo>
                                <Username>{comment.user.displayName}</Username>
                              </UserInfo>
                              <Time>
                                {new Date(comment.createdTime).toLocaleTimeString()}
                              </Time>
                            </UserHeader>
                            <CommentText>{comment.comment}</CommentText>
                            <Actions>
                              <ActionIcon onClick={() => handleLikeComment(comment._id, video._id)}>
                                <FaHeart /> {comment.likes || 0}
                              </ActionIcon>
                            </Actions>
                          </CommentContent>
                        </Comment>
                      ))
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </CommentSection>
          </React.Fragment>
        ))}
      </Content>
    </Container>
  );
};

export default Exclusiveshorts;