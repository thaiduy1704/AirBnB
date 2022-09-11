import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	align-items: flex-start;

	.react-calendar {
		margin: 2rem auto;
		width: 350px;
		max-width: 100%;
		background: white;
		font-family: Arial, Helvetica, sans-serif;
		line-height: 1.125em;
		border-radius: var(--radius);
		font-size: 2rem;
		box-shadow: var(--box-shadow);
		transition: var(--transition);

		abbr {
			text-decoration: none;
		}
	}

	.react-calendar--doubleView {
		width: 700px;
	}
	.react-calendar--doubleView .react-calendar__viewContainer {
		display: flex;
		margin: -0.5em;
	}
	.react-calendar--doubleView .react-calendar__viewContainer > * {
		width: 50%;
		margin: 0.5em;
	}
	.react-calendar,
	.react-calendar *,
	.react-calendar *:before,
	.react-calendar *:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	.react-calendar button {
		margin: 0;
		border: 0;
		outline: none;
	}
	.react-calendar button:enabled:hover {
		cursor: pointer;
	}
	.react-calendar__navigation {
		display: flex;
		height: 44px;
		margin-bottom: 1em;
	}
	.react-calendar__navigation button {
		min-width: 44px;
		background: none;
	}
	.react-calendar__navigation button:disabled {
		background-color: #f0f0f0;
		text-decoration: line-through;
	}
	.react-calendar__navigation button:enabled:hover,
	.react-calendar__navigation button:enabled:focus {
		background-color: #e6e6e6;
	}
	.react-calendar__month-view__weekdays {
		text-align: center;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 0.75em;
	}
	.react-calendar__month-view__weekdays__weekday {
		padding: 0.5em;
	}
	.react-calendar__month-view__weekNumbers .react-calendar__tile {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75em;
		font-weight: bold;
	}
	.react-calendar__month-view__days__day--weekend {
		color: #d10000;
	}
	.react-calendar__month-view__days__day--neighboringMonth {
		color: #757575;
	}
	.react-calendar__year-view .react-calendar__tile,
	.react-calendar__decade-view .react-calendar__tile,
	.react-calendar__century-view .react-calendar__tile {
		padding: 2em 0.5em;
	}
	.react-calendar__tile {
		max-width: 4rem;
		padding: 0.1rem;
		background: none;
		text-align: center;
		line-height: 10px;
		height: 4rem;
		border-radius: 50%;
	}
	.react-calendar__tile:disabled {
		background-color: #f0f0f0;
		text-decoration: line-through;
		background-color: transparent;
	}
	.react-calendar__tile:enabled:hover,
	.react-calendar__tile:enabled:focus {
		background-color: #e6e6e6;
	}
	.react-calendar__tile--now {
		background: #ffff76;
	}
	.react-calendar__tile--now:enabled:hover,
	.react-calendar__tile--now:enabled:focus {
		background: #ffffa9;
	}
	.react-calendar__tile--hasActive {
		background: var(--clr-deep-black);
	}
	.react-calendar__tile--hasActive:enabled:hover,
	.react-calendar__tile--hasActive:enabled:focus {
		background: var(--clr-deep-black);
	}

	.react-calendar__tile--active {
		background-color: #f7f7f7;
		color: var(--clr-deep-black);
		border-radius: 0;
	}

	.react-calendar__tile--rangeEnd,
	.react-calendar__tile--rangeStart {
		background-color: var(--clr-deep-black);
		color: white;
		border-radius: 50%;
	}

	.react-calendar__tile--active:enabled:hover,
	.react-calendar__tile--active:enabled:focus {
		background: var(--clr-deep-black);
		border-radius: 50%;
		color: white;
	}
	.react-calendar--selectRange .react-calendar__tile--hover {
		background-color: #e6e6e6;
	}
`;
export { StyledContainer };
