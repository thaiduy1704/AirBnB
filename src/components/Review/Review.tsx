import { transformDate } from '../../utils/util';
import Image from '../Image/Image';
import {
	StyledContainer,
	StyledUserInfoContainer,
	StyledUserImage,
	StyledUserInfo,
	StyledUserComment,
	StyledHeading,
	StyledParagraph,
} from './style';
interface IReview {
	avatar: string;
	name: string;
	review: string;
	created_at: string;
}

const Review = ({ avatar, name, review, created_at }: IReview) => {
	return (
		<StyledContainer>
			<StyledUserInfoContainer>
				<StyledUserImage>
					<Image borderRadius='50%' url={avatar} alt={name} />
				</StyledUserImage>
				<StyledUserInfo>
					<StyledHeading>{name}</StyledHeading>
					<StyledParagraph>
						{transformDate(new Date(created_at))}
					</StyledParagraph>
				</StyledUserInfo>
			</StyledUserInfoContainer>
			<StyledUserComment>{review}</StyledUserComment>
		</StyledContainer>
	);
};

export default Review;
