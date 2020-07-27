import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const comment = category.link_extra;
  const videos = category.videos;
  const categoryLink = category.link;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <div style={{display: "flex", alignItems: "flex-end"}}>
          <Title href={categoryLink} target="_blank" style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {comment && 
            <ExtraLink>
              {comment.text}  
            </ExtraLink>
          }
        </div>
      )}
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
