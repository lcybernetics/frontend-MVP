import styled from "styled-components"

export const MainSectionWrapper = styled.div`
	flex-grow: 1;
	border-right: 1px solid #f0f0ff;
`

export const DashboardTileSection = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px;
	row-gap: 20px;

	> div {
		display: flex;
		justify-content: space-between;
		gap: 10px;
	}
`

export const TileSectionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	h5 {
		font-size: 1.2rem;
	}
`
