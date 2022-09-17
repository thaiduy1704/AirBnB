import Skeleton from 'react-loading-skeleton';

import { useProgressiveImg } from '../../redux/hooks/useProgressiveImg';
import { DEFAULT_IMAGE } from '../../constant';
import { StyledContainer, StyledImage } from './style';

interface IImage {
	url: string;
	alt: string;
	gridArea?: string;
	borderRadius?: string;
}

const CustomImage = ({ url, alt, gridArea, borderRadius }: IImage) => {
	const isImageLoaded = useProgressiveImg(url);

	if (!url) {
		return (
			<StyledContainer gridArea={gridArea}>
				<StyledImage alt={alt} src={DEFAULT_IMAGE} />
			</StyledContainer>
		);
	}

	return (
		<StyledContainer gridArea={gridArea}>
			{isImageLoaded ? (
				<StyledImage src={url} alt={alt} borderRadius={borderRadius} />
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

export default CustomImage;
