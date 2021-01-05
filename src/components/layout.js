import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Header />

      <main className="flex-1 w-full mx-auto">
        {children}
      </main>

      <footer className="">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://twitter.com/anoop_md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anoop
            </a>
          </p>

          <p>
            <a
              className="font-semibold no-underline"
              href="https://github.com/miniplateapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
