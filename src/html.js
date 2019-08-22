import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="dark">
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              window.__onThemeChange = function() {};

              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                document.body.className = newTheme;
                window.__onThemeChange(newTheme);
              }

              var preferredTheme;
              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) { }

              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }

              setTheme(preferredTheme || 'dark');

              window.__onDisplayChange = function() {};

              function setDisplay(newDisplay) {
                window.__display = newDisplay;
                preferredDisplay = newDisplay;
                document.body.id = newDisplay;
                window.__onDisplayChange(newDisplay);
              }

              var preferredDisplay;
              try {
                preferredDisplay = localStorage.getItem('display');
              } catch (err) { }

              window.__setPreferredDisplay = function(newDisplay) {
                setDisplay(newDisplay);
                try {
                  localStorage.setItem('display', newDisplay);
                } catch (err) {}
              }

              setDisplay(preferredDisplay || 'list');
            })();
          `,
          }}
        />
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
