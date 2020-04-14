/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const pageUrl = doc => `${baseUrl}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={pageUrl('mods')}>The Mods</Button>
            <Button href={docUrl('mysticalagriculture')}>The Docs</Button>
            <Button href={pageUrl('blog')}>The Blog</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>The Mods</h2>
        <MarkdownBlock>Here are the ways my mods can improve* your gameplay experience!</MarkdownBlock>
      </div>
    );

    const Block1 = () => (
      <Block background="light">
        {[
          {
            content: 'Grow all your resources using the Mystical Agriculture suite of mods!',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Grow Your Resources',
          },
        ]}
      </Block>
    );

    const Block2 = () => (
      <Block id="try">
        {[
          {
            content: 'Create unique* gameplay experiences with pack dev tools like Iron Jetpacks and Extended Crafting!',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Customize Your Progression',
          },
        ]}
      </Block>
    );

    const Block3 = () => (
      <Block background="dark">
        {[
          {
            content: 'Improve a few very specific situations with More Buckets, Pickle Tweaks, and Cucumber Library!',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Convenience Is Key',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn" style="color: white;">
        {[
          {
            content: 'Home of the world famous Magical Crops clone <strong>Mystical Agriculture</strong>!',
            image: `${baseUrl}img/mysticalagriculture_thumbnail_nb.ico`,
            imageAlign: 'top',
            title: 'Original Ideas',
          },
          {
            content: 'Making others add the content themselves with <strong>Iron Jetpacks</strong> and <strong>Extended Crafting</strong> since 2016!',
            image: `${baseUrl}img/ironjetpacks_thumbnail_nb.ico`,
            imageAlign: 'top',
            title: 'Expansive Content',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <Block1 />
          <Block2 />
          <Block3 />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
