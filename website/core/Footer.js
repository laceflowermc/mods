/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          {/* <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a> */}
          <div>
            <h5>Navigation</h5>
            <a href={this.props.config.baseUrl + 'mods'}>
              Mods
            </a>
            <a href={this.docUrl('mysticalagriculture', this.props.language)}>
              Docs
            </a>
            <a href={this.props.config.baseUrl + 'blog'}>
              Blog
            </a>
          </div>
          <div>
            <h5>Mods</h5>
            <a 
              href="https://www.curseforge.com/minecraft/mc-mods/mystical-agriculture"
              target="_blank"
              rel="norefferer noopener"
            >
              Mystical Agriculture
            </a>
            <a 
              href="https://www.curseforge.com/minecraft/mc-mods/mystical-agradditions"
              target="_blank"
              rel="norefferer noopener"
            >
              Mystical Agradditions
            </a>
            <a 
              href="https://www.curseforge.com/minecraft/mc-mods/mystical-customization"
              target="_blank"
              rel="norefferer noopener"
            >
              Mystical Customization
            </a>
            <a 
              href="https://www.curseforge.com/minecraft/mc-mods/extended-crafting"
              target="_blank"
              rel="norefferer noopener"
            >
              Extended Crafting
            </a>
            <a 
              href="https://www.curseforge.com/minecraft/mc-mods/iron-jetpacks"
              target="_blank"
              rel="norefferer noopener"
            >
              Iron Jetpacks
            </a>
            <a 
              href="https://www.curseforge.com/minecraft/mc-mods/pickle-tweaks"
              target="_blank"
              rel="norefferer noopener"
            >
              Pickle Tweaks
            </a>
            <a 
              href="https://www.curseforge.com/minecraft/mc-mods/more-buckets"
              target="_blank"
              rel="norefferer noopener"
            >
              More Buckets
            </a>
            <a 
              href="https://www.curseforge.com/minecraft/mc-mods/cucumber"
              target="_blank"
              rel="norefferer noopener"
            >
              Cucumber Library
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a 
              href="https://github.com/BlakeBr0"
              target="_blank"
              rel="norefferer noopener"
            >
              GitHub
            </a>
            <a 
              href="https://www.curseforge.com/members/blakebr0/projects"
              target="_blank"
              rel="norefferer noopener"
            >
              CurseForge
            </a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
