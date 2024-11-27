import React from "react";

const Main = ({ children }) => {
    return (
      <main id="main" role="main">
        <div className="main__div">{children}</div>
      </main>
    );
};

export default Main;