import React, { useState } from 'react';

const TagCloud = () => {
  const [tags, setTags] = useState(["Workout Gear", "Digital Art", "Replacement", "Aria"]);
  const [newTag, setNewTag] = useState('');

  const listTags = tags.map((tag, index) => (
    <li key={index}>
      {tag}
    </li>
  ));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, newTag]);
    setNewTag('');
  }

  const handleRemoveFirstTag = () => {
    const updatedTags = [...tags];
    updatedTags.shift(); // Odebrání první položky
    setTags(updatedTags);
  }

  return (
    <>
      <div>
        {listTags}
      </div>
      <button onClick={handleRemoveFirstTag}>Odstranit první tag</button>
      <form onSubmit={handleFormSubmit}>
        <label>
          Zadej nový tag:
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
        </label>
        <button type="submit">Přidat do seznamu</button>
      </form>
    </>
  )
}

export default TagCloud;






/* kod bez druheho tlacitka
const TagCloud = () => {
  const [tags, setTags] = useState(["Workout Gear", "Digital Art", "Replacement", "Aria"]);
  const [newTag, setNewTag] = useState('');

  const listTags = tags.map((tag, index) => <li key={index}>{tag}</li>);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, newTag]);
    setNewTag('');
  }

  return (
    <>
      <div>
        {listTags}
      </div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Zadej nový tag:
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
        </label>
        <button type="submit">Přidat do seznamu</button>
      </form>
    </>
  )
}

export default TagCloud;*/