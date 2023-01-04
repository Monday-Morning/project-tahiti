import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import useAutoComplete from '../../../hooks/useAutoComplete';

const IssueArticleInput = ({
  articleList,
  setArticlesList,
  featuredArticle,
  setFeaturedArticle,
}) => {
  const [articleInput, setArticleInput] = useState('');

  const articles = useAutoComplete(articleInput, 5);

  return (
    <div>
      <Typography sx={{ fontSize: '25px', margin: '10px 0px' }} variant='h2'>
        Articles this issue
      </Typography>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant='outlined'
          value={articleInput}
          onChange={(e) => setArticleInput(e.target.value)}
          placeholder='Search for articles'
          fullWidth
        />
      </div>
      <Paper elevation={3} sx={{ zIndex: 1 }}>
        {articleInput.length > 0 &&
          articles?.map((article) => (
            <div
              style={{
                padding: '5px 10px',
                cursor: 'pointer',
                borderBottom: '1px solid #ccc',
              }}
              key={article._id}
              onClick={() => {
                setArticlesList([...articleList, article]);
                setArticleInput('');
              }}
            >
              {article.title}
            </div>
          ))}
      </Paper>

      <List>
        {featuredArticle &&
          featuredArticle?.map((article) => (
            <ListItem key={article?.id}>
              <ListItemIcon>
                <Checkbox
                  defaultChecked={true}
                  onClick={() => {
                    setArticlesList([
                      ...articleList,
                      ...featuredArticle.filter((a) => a.id === article.id),
                    ]),
                      setFeaturedArticle(
                        featuredArticle.filter((a) => a.id !== article.id),
                      );
                  }}
                  edge='start'
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={article?.title} />
              <IconButton
                onClick={() => {
                  setFeaturedArticle(
                    featuredArticle.filter((a) => a.id !== article.id),
                  );
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
      </List>

      <List>
        {articleList &&
          articleList?.map((article) => (
            <ListItem key={article?.id}>
              <ListItemIcon>
                <Checkbox
                  onClick={() => {
                    setFeaturedArticle([
                      ...featuredArticle,
                      ...articleList.filter((a) => a.id === article.id),
                    ]),
                      setArticlesList(
                        articleList.filter((a) => a.id !== article.id),
                      );
                  }}
                  edge='start'
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={article?.title} />
              <IconButton
                onClick={() => {
                  setArticlesList(
                    articleList.filter((a) => a.id !== article.id),
                  );
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default IssueArticleInput;
