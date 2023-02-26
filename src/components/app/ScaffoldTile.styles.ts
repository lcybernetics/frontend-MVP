import styled from "styled-components"

export const TileContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	width: 200px;
	height: 400px;
`

export const StatusBG = styled.div<{ $active: boolean }>`
	height: 150px;
	border-radius: 15px 15px 0 0;
	background-color: ${({ $active }) => ($active ? "#FEE25C" : "#5A5A5A")};
`

export const DataSection = styled.div`
	padding: 20px 10px;
	background-color: #f4f4f4;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	border-radius: 0px 0px 15px 15px;
`

export const StatisticsWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	border-radius: 0px 0px 15px 15px;
`
