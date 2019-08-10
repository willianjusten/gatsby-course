import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
  </S.SidebarWrapper>
)

export default Sidebar
