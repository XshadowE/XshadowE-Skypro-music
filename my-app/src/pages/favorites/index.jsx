import React from "react";
import { Link } from "react-router-dom";


export const Favorites = () => {
    return (
        <nav>
          <ul className="Favorites__list">
            <li>
              <Link className="App-link" to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
    
