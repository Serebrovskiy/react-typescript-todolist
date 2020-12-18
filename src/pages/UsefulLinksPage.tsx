import React, { useState } from 'react';
import { UsefulLinksForm } from '../components/UsefulLinks/UsefulLinksForm';
import { UsefulLinksList } from '../components/UsefulLinks/UsefulLinksList';
import { IUsefulLink } from '../interfaces';

export const UsefulLinksPage: React.FC = () => {
  const [usefulLinks, setUsefulLinks] = useState<IUsefulLink[]>([]);

  const addHandlerUsefulLinks = (link: string, title: string) => {
    const newLink: IUsefulLink = {
      link: link,
      title: title,
      id: Date.now(),
    };

    setUsefulLinks((prev) => [newLink, ...prev]);
  };

  return (
    <>
      <h1>Полезные ссылки</h1>
      <UsefulLinksForm onAddUsefulLinks={addHandlerUsefulLinks} />
      <UsefulLinksList usefulLinks={usefulLinks} />
    </>
  );
};
