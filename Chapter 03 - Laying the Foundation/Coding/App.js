// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation

/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  'h1',
  {id: 'heading'},
  'NamasteElement'
);

const JsxHeading = <h1 id="heading">Hello Sachin</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(JsxHeading);
