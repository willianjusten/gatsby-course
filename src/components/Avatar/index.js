import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 60
              placeholder: TRACED_SVG
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  )

  return <S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} />
}

export default Avatar
