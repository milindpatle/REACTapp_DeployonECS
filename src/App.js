import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🚢 About Docker</h1>
      </header>

      <main className="content">
        <p>
          Docker is an open platform for developing, shipping, and running applications.
          It enables you to separate your applications from your infrastructure so you can
          deliver software quickly.
        </p>

        <h2>🧱 Key Features</h2>
        <ul>
          <li>Containerization of applications</li>
          <li>Lightweight and portable</li>
          <li>Faster development and deployment</li>
          <li>Consistency across environments</li>
        </ul>

        <h2>💡 Why Use Docker?</h2>
        <p>
          Docker helps developers package an application with all parts it needs, 
          such as libraries and dependencies, and ship it all out as one package. 
          It ensures your app runs smoothly in any environment.
        </p>
      </main>

      <footer className="footer">
        <p>Created by Milind Patle | React Static Site | © 2025</p>
      </footer>
    </div>
  );
}

export default App;
