import { NavbarWrapper } from "./NavbarLP.styles"
import { Button, Space } from "antd"
import Logo from "./lambda-cybernetics-logo.png"
import { AppButton } from "../app"

export const NavbarLP = () => {
	return (
		<NavbarWrapper>
			<img src={Logo} />
			<div>
				<Button type="ghost">Product</Button>
				<Button type="ghost">Features</Button>
				<Button type="ghost">Resources</Button>
			</div>
			<Space style={{ gap: "10px" }}>
				<AppButton href="/dashboard">Log in</AppButton>
				<AppButton>Sign in</AppButton>
			</Space>
		</NavbarWrapper>
	)
}
