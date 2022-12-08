import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

export default function CategoryCard({ explorer, addCategories }) {
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
            <Checkbox onClick={() => addCategories(explorer.id)} />
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
