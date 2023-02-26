import styled from "styled-components"

export const HeroLayout = styled.div`
	display: flex;
	max-width: 70%;
	margin: 50px auto;

	img {
		height: 70vh;
	}
`

export const PitchContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 40%;
	justify-content: center;

	h1 {
		font-size: 5rem;
		margin-bottom: 40px;
	}

	> span {
		font-size: 2rem;
		margin-bottom: 30px;
	}
`

export const StartedSection = styled.div`
	display: flex;
	font-size: 1.5rem;
	align-items: center;
	gap: 20px;

	button {
		border: 1px solid #000;
		display: flex;
		align-items: center;
		padding: 40px 80px;
		font-size: 1.5rem;
	}
`
