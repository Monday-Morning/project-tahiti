import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

export default function CategoryCard({ explorer, addCategories, category }) {
  const [expand, setExpand] = useState(explorer.name ? false : true);
  return (
    <>
      {explorer.name && (
        <span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checkbox
              defaultChecked={category?.has(explorer.id)}
              onClick={() => addCategories(explorer.id)}
            />
            <Typography
              onClick={() => setExpand((exp) => !exp)}
              style={{
                fontWeight: explorer.items.length > 0 ? 'bolder' : 'normal',
              }}
            >
              {explorer.name}
            </Typography>
          </div>
        </span>
      )}
      <div style={{ display: expand ? 'block' : 'none', paddingLeft: '20px' }}>
        {explorer.items.map((item) => {
          return (
            <CategoryCard
              category={category}
              explorer={item}
              key={item.id}
              addCategories={addCategories}
            />
          );
        })}
      </div>
    </>
  );
}
