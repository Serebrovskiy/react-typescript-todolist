import React, { useState } from 'react';

interface UsefulLinksFormProps {
  onAddUsefulLink(link: string, title: string): void;
}

export const UsefulLinksForm: React.FC<UsefulLinksFormProps> = (props) => {
  const [title, setTitle] = useState<string>('');
  const [link, setLink] = useState<string>('');

  const changeHandlerLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const changeHandlerTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.onAddUsefulLink(link, title);
    setTitle('');
    setLink('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field mt2">
        <input
          type="text"
          id="link"
          value={link}
          onChange={changeHandlerLink}
          placeholder="Введите ссылку на сайт"
          required
        />
        <label htmlFor="link" className="label active">
          Ссылка на сайт
        </label>
      </div>
      <div className="input-field mt2">
        <input
          type="text"
          id="title"
          value={title}
          onChange={changeHandlerTitle}
          placeholder="Введите название ссылки"
          required
        />
        <label htmlFor="title" className="label active">
          Название ссылки
        </label>
      </div>
      <button className="usefulLinks-button btn" type="submit">
        Создать ссылку
      </button>
    </form>
  );
};
