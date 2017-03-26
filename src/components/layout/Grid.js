import React from 'react';
import classNames from 'classnames';

// export const TableRow = (props) =>
//   <header className="segment-header">
//     <h1>{ props.title }</h1>
//     <p className="intro">{ props.intro }</p>
//     { props.children }
//   </header>
// ;


export const Wrapper = (props) => {
  const classes = props.classNames || [];
  return (<div className={classNames("wrap", classes)}>{ props.children }</div>);
} ;

export const Grid = (props) => {
  const classes = props.classNames || [];
  return (<div className={classNames("grid", classes)}>{ props.children }</div>);
} ;

export const Column = (props) => {
  const classes = props.classNames || [];
  return (<div className={classNames("col", classes)}>{ props.children }</div>);
} ;

export const Table = (props) => {
  const classes = props.classNames || [];
  return (<div className={classNames("table", classes)}>{ props.children }</div>);
} ;
