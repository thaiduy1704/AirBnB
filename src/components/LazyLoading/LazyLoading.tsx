import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useProgressiveImg } from '../../redux/hooks/useProgressiveImg';
import { StyledContainer, StyledImage } from './style';

interface IImageLazy {
	url: string;
	alt: string;
	placeholderSrc?: string;
	gridArea?: string;
	borderRadius?: string;
	widthImage?: string;
}

const LazyLoading = ({
	url,
	alt,
	placeholderSrc,
	gridArea,
	borderRadius,
	widthImage,
}: IImageLazy) => {
	const isImageLoaded = useProgressiveImg(url);

	return (
		<StyledContainer gridArea={gridArea}>
			{isImageLoaded ? (
				<StyledImage
					src={url}
					alt={alt}
					borderRadius={borderRadius}
					widthImage={widthImage}
				/>
			) : placeholderSrc ? (
				<StyledImage
					src={placeholderSrc}
					alt={alt}
					borderRadius={borderRadius}
					widthImage={widthImage}
				/>
			) : (
				<Skeleton
					style={{ lineHeight: 2 }}
					borderRadius={borderRadius}
					duration={2}
				/>
			)}
		</StyledContainer>
	);
};

export default LazyLoading;
