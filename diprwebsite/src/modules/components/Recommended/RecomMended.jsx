import { useState, useEffect, useContext } from "react"
import {
  Container,
  Content,
  Title,
  Header,
  VideoThumbnail,
  VideoCard1,
  VideoDetails,
  AuthorInfo,
  AuthorAvatar,
  AuthorName,
  PublishTime,
} from "./RecomMended.styles"
// Removed CiBookmark import as it's no longer used
// import { getRecommendedNews } from "../../../services/newsApi/NewsApi"
import { FontSizeContext } from "../../../context/FontSizeProvider"
import { LanguageContext } from "../../../context/LanguageContext"
import { getRecommendations } from "../../../services/recommened/RecommenedApis"

// Helper function to get cookies by name
const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
  return match ? decodeURIComponent(match[2]) : null
}

// Helper function to get initials from author name
const getAuthorInitials = (authorName) => {
  if (!authorName) return "A"
  return authorName
    .split(" ")
    .map(word => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

const RecomMended = () => {
  const [videosData, setVideosData] = useState([])
  // Removed bookmarkedVideos state as it's no longer used
  const { fontSize } = useContext(FontSizeContext)
  const { language } = useContext(LanguageContext)

  useEffect(() => {
    const userId = getCookie("userId")
    if (userId) {
      const fetchVideos = async () => {
        try {
          const result = await getRecommendations(userId)
          console.log("Received videos data:", result)
          // Check if result has news array directly (as per Postman response)
          if (result && Array.isArray(result.news) && result.news.length > 0) {
            setVideosData(result.news)
          } else if (result && Array.isArray(result) && result.length > 0) {
            // Fallback: if result itself is an array
            setVideosData(result)
          } else {
            console.warn("No video data found in response:", result)
            setVideosData([])
          }
        } catch (error) {
          console.error("Error fetching videos:", error)
          setVideosData([])
        }
      }
      fetchVideos()
    } else {
      console.error("No userId found in cookies.")
    }
  }, [language])

  // Function to get the correct language content
  const getLocalizedContent = (video, field) => {
    if (language === "English") {
      return video[field] || "No content available"
    } else if (language === "Hindi") {
      return video.hindi?.[field] || video[field] || "No content available"
    } else if (language === "Kannada") {
      return video.kannada?.[field] || video[field] || "No content available"
    }
    return video[field] || "No content available"
  }

  // Function to get localized category name
  const getLocalizedCategory = (category) => {
    if (!category) return "General"
    
    if (language === "English") {
      return category.name || "General"
    } else if (language === "Hindi") {
      return category.hindi || category.name || "General"
    } else if (language === "Kannada") {
      return category.kannada || category.name || "General"
    }
    return category.name || "General"
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date"
    const date = new Date(dateString)
    return isNaN(date.getTime())
      ? "Invalid Date"
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
  }

  const getTimeAgo = (dateString) => {
    if (!dateString) return "Unknown time"
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours} hours ago`
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays === 1) return "1 day ago"
    if (diffInDays < 7) return `${diffInDays} days ago`
    return formatDate(dateString)
  }

  // Removed handleBookmarkClick as it's no longer used

  return (
    <Container style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
      <Header style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>Recommended News</Header>
      {console.log('Rendering videosData:', videosData)}
      <Content>
        {Array.isArray(videosData) && videosData.length > 0 ? (
          videosData.slice(0, 6).map((video) => (
            <VideoCard1 key={video._id} style={{ maxWidth: '100%', width: '100%', boxSizing: 'border-box' }}>
              <VideoThumbnail
                src={video.newsImage || "/placeholder.svg?height=220&width=300&query=news article"}
                alt={getLocalizedContent(video, "title")}
                style={{ width: '100%', height: 'auto', maxHeight: 180, objectFit: 'cover', borderRadius: 8 }}
              />
              <VideoDetails>
                <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                  {getLocalizedContent(video, "title")}
                </Title>
                <AuthorInfo>
                  <AuthorAvatar>
                    {getAuthorInitials(video.author || "AthleteAdmirer")}
                  </AuthorAvatar>
                  <AuthorName style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                    {video.author || "AthleteAdmirer"}
                  </AuthorName>
                  <PublishTime style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                    • {getLocalizedCategory(video.category)}
                    • {getTimeAgo(video.createdTime || video.publishedAt)}
                  </PublishTime>
                </AuthorInfo>
              </VideoDetails>
            </VideoCard1>
          ))
        ) : (
          <div style={{ padding: '1rem', textAlign: 'center', color: '#888' }}>No recommended news found.</div>
        )}
      </Content>
    </Container>
  )
}

export default RecomMended
