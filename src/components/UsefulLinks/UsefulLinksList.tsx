import React from 'react';
import { IUsefulLink } from '../../interfaces';

interface TodoListProps {
  usefulLinks: IUsefulLink[];
}

export const UsefulLinksList: React.FC<TodoListProps> = ({ usefulLinks }) => {
  console.log(usefulLinks);
  if (usefulLinks.length !== 0) {
    return (
      // <p className="center">
      //   Ссылки имеются, их количество - {usefulLinks.length}
      // </p>
      <ul className="useful-link">
        {usefulLinks.map((elem) => {
          return (
            <li className="card useful-link__card">
              <div className="card-image waves-effect waves-block waves-light useful-link__image">
                {/* <img
                  className="useful-link__image"
                  src={`http://www.google.com/s2/favicons?domain=${elem.link}`}
                  alt={elem.title}
                /> */}
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  <img
                    className="useful-link__image"
                    src={`http://www.google.com/s2/favicons?domain=${elem.link}`}
                    alt={elem.title}
                  />
                  {elem.title}
                  {/* <i className="material-icons right">more_vert</i> */}
                </span>
                <p>
                  <a
                    className="useful-link__link"
                    href={elem.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {elem.link}
                  </a>
                </p>
              </div>
              {/* <div className="card-reveal ">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right ">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div> */}
            </li>
          );
        })}
      </ul>
    );
  }

  return <></>;
};
