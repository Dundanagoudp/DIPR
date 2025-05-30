import styled, { keyframes } from "styled-components";
import theme from "../../../theme/Theme";

// Keyframes for animations
const shimmer = keyframes`
  0% {
    background-position: -${theme.spacing(58.5)} 0;
  }
  100% {
    background-position: ${theme.spacing(58.5)} 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(${theme.spacing(1.25)});
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-${theme.spacing(2.5)});
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Main Container
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  padding: ${theme.spacing(2.5)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.25)};
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: ${theme.spacing(3)};
  max-width: ${theme.spacing(175)};
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: ${theme.breakpoints.desktop}) {
    flex-direction: column;
    gap: ${theme.spacing(2.5)};
  }
`;

// Video Player Section
export const VideoPlayerContainer = styled.div`
  flex: 1;
  background: ${theme.colors.white};
  border-radius: ${theme.spacing(2)};
  padding: ${theme.spacing(3)};
  backdrop-filter: blur(${theme.spacing(1.25)});
  border: 1px solid ${theme.colors.trcloure};
  transition: all ${theme.transitions.fast};

  &:hover {
    transform: translateY(-${theme.spacing(0.25)});
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};
    border-radius: ${theme.spacing(1.5)};
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${theme.spacing(1.5)};
  overflow: hidden;
  background: ${theme.colors.black};
  margin-bottom: ${theme.spacing(2.5)};
`;

export const MainVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${theme.spacing(1.5)};
  transition: transform ${theme.transitions.fast};

  &:hover {
    transform: scale(1.02);
  }
`;

export const VideoInfo = styled.div`
  margin-bottom: ${theme.spacing(3)};
  animation: ${slideIn} 0.5s ease-out 0.2s both;
`;

export const VideoTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0 0 ${theme.spacing(1.5)} 0;
  line-height: 1.3;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.4rem;
  }
`;

export const VideoStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(2)};
  color: ${theme.colors.lightText};
  font-size: 0.9rem;
  font-weight: 500;
`;

export const VideoActions = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  align-items: center;
`;

export const VideoDescription = styled.p`
  color: ${theme.colors.lightText};
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
  padding: ${theme.spacing(2)};
  background: ${theme.colors.bggrey};
  border-radius: ${theme.spacing(1)};
  border-left: ${theme.spacing(0.5)} solid ${theme.colors.primary};
`;

// Comments Section
export const CommentsContainer = styled.div`
  margin-top: ${theme.spacing(3)};
  animation: ${fadeIn} 0.5s ease-out 0.4s both;
`;

export const CommentsHeader = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: ${theme.spacing(2.5)};
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};

  &::before {
    content: '';
    width: ${theme.spacing(0.5)};
    height: ${theme.spacing(2.5)};
    background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.maincolor} 100%);
    border-radius: ${theme.spacing(0.25)};
  }
`;

export const InteractionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing(2)};
  padding: ${theme.spacing(2)};
  background: ${theme.colors.bggrey};
  border-radius: ${theme.spacing(1.5)};
  margin-bottom: ${theme.spacing(2.5)};
  border: 1px solid ${theme.colors.backgray};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${theme.spacing(1.5)};
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
`;

export const FlexContainer2 = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};

  svg {
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

export const LikeCount = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: ${theme.colors.text};
  padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  background: ${theme.colors.white};
  border-radius: ${theme.spacing(0.75)};
`;

export const CommentInputContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  flex: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const CommentInput = styled.input`
  flex: 1;
  padding: ${theme.spacing(1.5)} ${theme.spacing(2)};
  border: 2px solid ${theme.colors.backgray};
  border-radius: ${theme.spacing(3)};
  font-size: 0.95rem;
  background: ${theme.colors.white};
  transition: all ${theme.transitions.fast};
  outline: none;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 ${theme.spacing(0.375)} rgba(102, 126, 234, 0.1);
    transform: translateY(-${theme.spacing(0.125)});
  }

  &::placeholder {
    color: ${theme.colors.textgray};
  }
`;

export const CommentButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.maincolor} 100%);
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.spacing(3)};
  padding: ${theme.spacing(1.5)} ${theme.spacing(3)};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  &:hover {
    transform: translateY(-${theme.spacing(0.25)});
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.p`
  color: ${theme.colors.error};
  font-size: 0.9rem;
  margin: ${theme.spacing(1.5)} 0;
  padding: ${theme.spacing(1.5)};
  background: ${theme.colors.lightgreen};
  border: 1px solid ${theme.colors.error};
  border-radius: ${theme.spacing(1)};
  animation: ${pulse} 0.5s ease-in-out;
`;

export const CommentsList = styled.div`
  max-height: ${theme.spacing(62.5)};
  overflow-y: auto;
  padding-right: ${theme.spacing(1)};

  &::-webkit-scrollbar {
    width: ${theme.spacing(0.75)};
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.bggrey};
    border-radius: ${theme.spacing(0.375)};
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.maincolor} 100%);
    border-radius: ${theme.spacing(0.375)};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.Footerstrip} 100%);
  }
`;

export const Comment = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  margin-bottom: ${theme.spacing(2.5)};
  padding: ${theme.spacing(2)};
  background: ${theme.colors.white};
  border-radius: ${theme.spacing(1.5)};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid ${theme.colors.bggrey};
  animation: ${fadeIn} 0.3s ease-out;
  transition: all ${theme.transitions.fast};

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-${theme.spacing(0.125)});
  }
`;

export const UserAvatar = styled.img`
  width: ${theme.spacing(5.5)};
  height: ${theme.spacing(5.5)};
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${theme.colors.backgray};
  transition: all ${theme.transitions.fast};

  &:hover {
    border-color: ${theme.colors.primary};
    transform: scale(1.05);
  }
`;

export const CommentContent = styled.div`
  flex: 1;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(1)};
`;

export const Username = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.colors.text};
`;

export const CommentTime = styled.span`
  font-size: 0.8rem;
  color: ${theme.colors.textgray};
  font-weight: 500;
`;

export const CommentText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 ${theme.spacing(1.5)} 0;
  color: ${theme.colors.text};
`;

export const CommentActions = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
`;

export const CommentAction = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(0.75)};
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.textgray};
  font-size: 0.8rem;
  font-weight: 500;
  padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  border-radius: ${theme.spacing(0.75)};
  transition: all 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.bggrey};
    transform: translateY(-${theme.spacing(0.125)});
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const NoComments = styled.p`
  color: ${theme.colors.textgray};
  font-size: 1rem;
  text-align: center;
  padding: ${theme.spacing(5)} ${theme.spacing(2.5)};
  background: ${theme.colors.bggrey};
  border-radius: ${theme.spacing(1.5)};
  border: 2px dashed ${theme.colors.backgray};
  margin: ${theme.spacing(2.5)} 0;
`;

// Sidebar Section
export const VideoSidebar = styled.div`
  width: ${theme.spacing(47.5)};
  background: ${theme.colors.white};
  border-radius: ${theme.spacing(2)};
  padding: ${theme.spacing(3)};
  backdrop-filter: blur(${theme.spacing(1.25)});
  border: 1px solid ${theme.colors.trcloure};
  height: fit-content;
  position: sticky;
  top: ${theme.spacing(2.5)};
  animation: ${slideIn} 0.6s ease-out 0.3s both;

  @media (max-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    position: relative;
    top: 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};
  }
`;

export const SidebarHeader = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: ${theme.spacing(2.5)};
  color: ${theme.colors.text};
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};

  &::before {
    content: '';
    width: ${theme.spacing(0.5)};
    height: ${theme.spacing(2.5)};
    background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primary} 100%);
    border-radius: ${theme.spacing(0.25)};
  }
`;

export const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1.5)};
`;

export const VideoItem = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  cursor: pointer;
  padding: ${theme.spacing(1.5)};
  border-radius: ${theme.spacing(1.5)};
  transition: all ${theme.transitions.fast};
  border: 2px solid transparent;
  background: ${props => props.className === 'active' ? `linear-gradient(135deg, ${theme.colors.primary}20 0%, ${theme.colors.maincolor}20 100%)` : 'transparent'};

  &:hover {
    background: linear-gradient(135deg, ${theme.colors.primary}10 0%, ${theme.colors.maincolor}10 100%);
    transform: translateX(${theme.spacing(0.5)});
    border-color: ${theme.colors.primary}30;
  }

  &.active {
    border-color: ${theme.colors.primary};
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: ${theme.spacing(17.5)};
  height: ${theme.spacing(9.75)};
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: ${theme.spacing(15)};
    height: ${theme.spacing(8.375)};
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.transitions.fast};

  ${VideoItem}:hover & {
    transform: scale(1.05);
  }
`;

export const VideoDuration = styled.div`
  position: absolute;
  bottom: ${theme.spacing(0.5)};
  right: ${theme.spacing(0.5)};
  background: rgba(0, 0, 0, 0.8);
  color: ${theme.colors.white};
  padding: ${theme.spacing(0.25)} ${theme.spacing(0.75)};
  border-radius: ${theme.spacing(0.5)};
  font-size: 0.7rem;
  font-weight: 600;
`;

export const VideoItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-width: 0;
`;

export const VideoItemTitle = styled.h3`
  font-size: 0.95rem;
  margin: 0 0 ${theme.spacing(1)} 0;
  font-weight: 600;
  color: ${theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  transition: color 0.2s ease;

  ${VideoItem}:hover & {
    color: ${theme.colors.primary};
  }
`;

export const VideoItemViews = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.textgray};
  font-weight: 500;
`;

// Shimmer Loading Effect
export const ShimmerEffect = styled.div`
  background: linear-gradient(
    90deg,
    ${theme.colors.bggrey} 25%,
    ${theme.colors.backgray} 50%,
    ${theme.colors.bggrey} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${theme.spacing(1)};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || theme.spacing(2.5)};
  margin-bottom: ${props => props.marginBottom || '0'};
`;