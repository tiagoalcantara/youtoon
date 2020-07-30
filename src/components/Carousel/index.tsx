import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

// eslint-disable-next-line no-unused-vars
import { ICategory } from './interfaces/category';

interface Props {
  ignoreFirstVideo?: boolean;
  category: ICategory;
}

function Carousel({
  ignoreFirstVideo = false,
  category,
}: Props) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const comment = category.linkExtra;
  const { videos } = category;
  const categoryLink = category.link;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Title href={categoryLink} target="_blank" style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {comment
            && (
            <ExtraLink>
              {comment.text}
            </ExtraLink>
            )}
        </div>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
