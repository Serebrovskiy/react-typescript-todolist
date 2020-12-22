import React, { useState, useEffect } from 'react';
import { UsefulLinksForm } from '../components/UsefulLinks/UsefulLinksForm';
import { UsefulLinksList } from '../components/UsefulLinks/UsefulLinksList';
import { IUsefulLink } from '../interfaces';

export const UsefulLinksPage: React.FC = () => {
  const [usefulLinks, setUsefulLinks] = useState<IUsefulLink[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem('usefulLinks') || '[]'
    ) as IUsefulLink[];
    setUsefulLinks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('usefulLinks', JSON.stringify(usefulLinks));
  }, [usefulLinks]);

  const addHandlerUsefulLink = (link: string, title: string) => {
    const newLink: IUsefulLink = {
      link: link,
      title: title,
      id: Date.now(),
    };

    setUsefulLinks((prev) => [newLink, ...prev]);
  };

  const removeHandlerUsefulLink = (id: number) => {
    setUsefulLinks((prev) => prev.filter((link) => link.id !== id));
  };

  return (
    <>
      <h1>Полезные ссылки</h1>
      <UsefulLinksForm onAddUsefulLink={addHandlerUsefulLink} />
      <UsefulLinksList
        usefulLinks={usefulLinks}
        onRemoveUsefulLink={removeHandlerUsefulLink}
      />
    </>
  );
};
