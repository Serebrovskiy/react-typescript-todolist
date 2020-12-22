import React from 'react';
import { IUsefulLink } from '../../interfaces';

interface UsefulLinkProps {
  usefulLinks: IUsefulLink[];
  onRemoveUsefulLink(id: number): void;
}

export const UsefulLinksList: React.FC<UsefulLinkProps> = ({
  usefulLinks,
  onRemoveUsefulLink,
}) => {
  const removeHendler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemoveUsefulLink(id);
  };

  if (usefulLinks.length !== 0) {
    return (
      <ul className="useful-link">
        {usefulLinks.map((elem) => {
          return (
            <li className="card useful-link__card">
              <a
                className="useful-link__content"
                href={elem.link}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="useful-link__remove-link"
                  onClick={(event) => removeHendler(event, elem.id)}
                />
                <div className="useful-link__container">
                  <img
                    className="useful-link__image"
                    src={`http://www.google.com/s2/favicons?domain=${elem.link}`}
                    alt={elem.title}
                  />
                  <h3 className="useful-link__title">{elem.title}</h3>
                </div>
                <p className="useful-link__link">{elem.link}</p>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return <></>;
};
