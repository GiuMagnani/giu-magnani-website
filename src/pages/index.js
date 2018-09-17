import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import placeholderImgWork from './depto-work.png';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <Helmet title={siteTitle} />
        <HeroDiv>
          <MainH1>
            <span>I'm Giu Magnani.</span>
            I code and design<strong>websites and apps.</strong>
            I also make <strong>art.</strong>
          </MainH1>
        </HeroDiv>
        {/*on verb hover, show projects. If not hover rotate as default.*/}
        {/*<div>*/}
        {/*PROJECT (active category) PROJECT (active category) PROJECT (active*/}
        {/*category)*/}
        {/*</div>*/}
        {/*small container with latest posts ?*/}
        <LatestPostsContainer>
        <LatestPostsHeading>Latest posts on my Journal:</LatestPostsHeading>
        <LatestPosts>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            return (
              <LatestPostsItem key={node.fields.slug} to={node.fields.slug}>
                <small>{node.frontmatter.date}</small>
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </LatestPostsItem>
            );
          })}
        </LatestPosts>
        <LatestPostsSeeMore>
          <Link to={'/journal'}>See my Journal</Link>
        </LatestPostsSeeMore>
        </LatestPostsContainer>
        <AboutSection>
          <AboutSectionBody>
            <h2>Front-End Developer and UI/UX Designer based in
              Milan, Italy.</h2>
            <p>
              I'm a creative and passionate professional who loves
              Web as much as Design.
              <br />
              <br />
              I started working with small business and participating in design
              contests to build a strong portfolio and references. With
              perseverance and hard work, in 2012 I was contacted to work
              remotely with a company in USA which produces logo and print
              design services. In 2013, I went to London, UK to find new
              perspectives and inspiration, where I had the pleasure to work
              with a vintage lighting signs company and a Swedish design studio.
              In January 2014, with more than 3 years of experience, I launched
              my new design brand, to fully pursue what I love, Web Development,
              Design and Illustration.
              <br />
              <br />
              Right now I'm living in Milan, Italy, working as a Front-End
              Developer, I keep learning and facing new challenges to improve
              every day more and more.
            </p>
            <AboutSectionSocialLinks>
              <ul>
                <li>Follow me:</li>
                <li>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-labelledby="behance-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.4.44.586.75 1.26.94 2.02.19.75.25 1.54.21 2.38h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.592-1.657-.592-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.392.75-.075.26-.12.5-.135.71h4.762c-.07-.75-.33-1.3-.68-1.69v.01zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.23v3.44h3.29zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg aria-labelledby="github-icon" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-labelledby="dribbble-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-labelledby="pinterest-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-labelledby="linkedin-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-labelledby="twitter-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096a4.9044 4.9044 0 0 1-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827a4.9631 4.9631 0 0 1-2.212.085c.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </AboutSectionSocialLinks>
          </AboutSectionBody>
          <AboutSectionWorks>
            <PlaceHolderWorkImg>
              <img src={placeholderImgWork} alt="Placeholder Image" />
              {/*<small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, excepturi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, sequi.</small>*/}
            </PlaceHolderWorkImg>
          </AboutSectionWorks>
        </AboutSection>
      </div>
    );
  }
}

export default BlogIndex;

const HeroDiv = styled.div`
  height: 90vh;
  display: flex;
  //justify-content: center;
  align-items: center;
  background-size: unset;
  background: url('giu-magnani.jpg') no-repeat 100% 100%;
  padding: 20px;
`;

const MainH1 = styled.h1`
  font-size: 38px;
  font-weight: bold;
  padding-left: 10px;

  strong {
    text-decoration: underline;
    color: #2222ff;
    padding: 5px;
  }

  span {
    font-size: 60px;
    line-height: 1;
    font-weight: bold;
    display: block;
  }
`;

const LatestPosts = styled.div`
  border-width: 4px 0;
  border-style: solid;
  border-color: #2222ff;
  display: flex;
  padding: 0 10px;
`;

const LatestPostsItem = styled(Link)`
  border: 0 solid #2222ff;
  border-right-width: 1px;
  padding: 30px 20px;
  width: 20%;
  //height: 230px;
  text-decoration: none;
  color: black;

  &&:last-of-type {
    border: 0;
  }

  small {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Teko', sans-serif;
    display: block;
    padding-bottom: 4px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
  }

  p {
    font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    line-height: 1.4;
    padding-bottom: 5px;
  }
`;

const LatestPostsHeading = styled.h2`
  font-size: 30px;
  padding: 10px 30px;
  margin-top: -50px;
`;

const LatestPostsSeeMore = styled.div`
  margin-bottom: 80px;
  text-align: right;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  a {
    font-size: 14px;
    background: #2222ff;
    color: white;
    height: 40px;
    line-height: 38px;
    display: block;
    text-decoration: none;
    width: calc(20% + 7px);
    letter-spacing: 1px;
    padding-left: 20px;
    text-align: left;
    //text-transform: uppercase;
  }
`;

const LatestPostsContainer = styled.div`
  margin-bottom: 100px;
`;

const AboutSection = styled.div`
  background: #2222ff;
  padding: 40px 20px;
  display: flex;
`;

const AboutSectionBody = styled.div`
  width: 40%;
  color: white;

  h2 {
    font-size: 40px;
    padding-bottom: 20px;
    line-height: 1;
    padding-right: 20px;
  }
`;

const AboutSectionSocialLinks = styled.div`
  padding-top: 10px;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    //border: 0 solid white;
    //border-width: 1px;
  }

  li {
    height: 40px;
    text-align: center;
    //flex-grow: 1;
    //width: 100%;
    width: 40px;
    display: block;
    text-align: center;
    border: 1px solid white;
    //border-right-width: 1px;
    padding-top: 8px;
    margin-right: -1px;
  }

  li:nth-child(1) {
    border: 0;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 40px;
    padding-top: 0;
    width: auto;
    padding-right: 20px;
  }

  svg {
    fill: white;
    height: 16px;
    width: 16px;
  }
`;

const AboutSectionWorks = styled.div`
  width: 60%;
  text-align: center;
  margin-top: -110px;
`;

const PlaceHolderWorkImg = styled.div`
text-align: center;
  img {
    border: 20px solid white;
    display: block;
    margin: 0 auto;
  }
  
  small {
  font-size: 11px;
  //letter-spacing: 1px;
  //text-transform: uppercase;
    //font-family: monospace;
    color: white;
  }
`;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
