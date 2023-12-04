import React, { useRef, useEffect } from 'react';
interface IInfinityScrollProps {
	children: React.ReactNode;
	loader: JSX.Element | React.ReactNode;
	fetchMore: () => void;
	hasMore: boolean;
	endMessage: JSX.Element | React.ReactNode;
	className: string;
}

const InfinityScroll = ({
	children,
	loader,
	fetchMore,
	hasMore,
	endMessage,
	className,
}: IInfinityScrollProps) => {
	const pageEndRef = useRef(null);
	useEffect(() => {
		if (hasMore) {
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					fetchMore();
				}
			});
			if (pageEndRef.current) {
				observer.observe(pageEndRef.current);
			}
			return () => {
				if (pageEndRef.current) {
					observer.unobserve(pageEndRef.current);
				}
			};
		}
	}, [hasMore, fetchMore]);
	return (
		<div className={className}>
			{children}
			{hasMore ? <div ref={pageEndRef}>{loader}</div> : <div>{endMessage}</div>}
		</div>
	);
};

export default InfinityScroll;
