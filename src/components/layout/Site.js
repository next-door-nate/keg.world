import React from 'react';
import {Wrapper, Grid, Column} from './Grid.js';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

// export const TableRow = (props) =>
//   <header className="segment-header">
//     <h1>{ props.title }</h1>
//     <p className="intro">{ props.intro }</p>
//     { props.children }
//   </header>
// ;


export const Header = (props) => {
  const classes = props.classNames || [];
  return (<header className={classNames("header", classes)}>
            <div className="wrap">
              <Grid>
                <Column classNames="col-4">
                  <Link to="/">
                    <h1 className="logo">Keg.World</h1>
                  </Link>
                </Column>
                <Column>
                  <nav>


                    <a href="#" title="Past Kegs" className="login">Login</a>
                    <Link to="/past-kegs">Past Kegs</Link>
                  </nav>
                </Column>
              </Grid>
            </div>
          </header>);
};

export const Footer = (props) => {
  const classes = props.classNames || [];
  return (<footer className={classNames("footer", classes)}>
            <Wrapper>
              <p>Poured into a glass by <a href="https://hugemuffs.com/" title="Click it... totally SFW">Nate Vandervis</a><span className="spacer">|</span>Cached gracefully by <a href="https://cloudflare.com" title="Cloudflare">Cloudflare</a></p>
            </Wrapper>
          </footer>
  );
};
