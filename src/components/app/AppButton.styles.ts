import { Button } from "antd"
import styled from "styled-components"

export const AppButton = styled(Button)<{ $fontSize?: number }>`
	font-size: ${({ $fontSize }) => (!$fontSize ? "1.2rem" : `${$fontSize}rem`)};
	padding: 0 20px;
	border: 1px solid #000;
`
