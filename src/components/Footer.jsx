import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p``;
const SocialContainer = styled.div``;
const SocialIcon = styled.div``;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-commerce</Logo>
        <Desc>
          If you wake up with a giant zit, you are really facing your fears when
          you look in the mirror. I have a moral code, but I haven't figured out
          how to read it yet. Thank you for using my words in your work. I think
          of a lot of good ideas when going to the bathroom - I guess I have a
          real stream of consciousness. Cemeteries are just garbage dumps filled
          with humans.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
