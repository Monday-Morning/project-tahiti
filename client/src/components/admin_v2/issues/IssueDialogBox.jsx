import React, { useState, useEffect, useRef } from 'react';

//graphql
import { GraphClient } from '../../../config/ApolloClient';
import createIssue from '../../../graphql/mutations/issues/createIssue';
import updateIssueArticles from '../../../graphql/mutations/issues/updateIssueArticles';
import updateIssueProps from '../../../graphql/mutations/issues/updateIssueProps';

//mui components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

//components
import IssueArticleInput from './IssueArticleInput';
import IssueDateInput from './IssueDateInput';

const checkIsSame = (arr1, arr2) => {
  if (JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())) return true;
  return false;
};

export default function IssueDialogBox({
  seletedIssue,
  dialogBoxOpen,
  setDialogBoxOpen,
  action,
  issueList,
  setIssueList,
}) {
  const { name, articles, featured } = seletedIssue;

  const [issueTitle, setIssueTitle] = useState(name || '');

  const [articleList, setArticlesList] = useState(
    articles.filter(
      (item) => !featured.find((item2) => item2.id === item.id),
    ) || [],
  );

  const [featuredArticle, setFeaturedArticle] = useState(featured || []);

  const [startDate, setStartDate] = useState(
    seletedIssue.startDate || new Date(),
  );
  const [endDate, setEndDate] = useState(
    seletedIssue.endDate ||
      new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  );

  useEffect(() => {
    setIssueTitle(name || '');
    setArticlesList(
      articles.filter(
        (item) => !featured.find((item2) => item2.id === item.id),
      ) || [],
    );
    setFeaturedArticle(featured || []);
    setStartDate(seletedIssue.startDate || new Date());
    setEndDate(
      seletedIssue.endDate ||
        new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    );
  }, [seletedIssue]);

  const handleClose = () => {
    setIssueTitle('');
    setArticlesList([]);
    setFeaturedArticle([]);
    setStartDate(new Date());
    setEndDate(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000));
    setDialogBoxOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (dialogBoxOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [dialogBoxOpen]);

  const issueAction = async () => {
    if (action === 'Add') {
      const {
        data: { createIssue: issue },
      } = await GraphClient.mutate({
        mutation: createIssue,
        variables: {
          name: issueTitle,
          startDate: startDate,
          endDate: endDate,
          articles: [
            ...articleList.map((item) => item.id),
            ...featuredArticle.map((item) => item.id),
          ],
          featured: featuredArticle.map((item) => item.id),
          isPublished: true,
        },
      });
      setIssueList([issue, ...issueList]);
      handleClose();
    }
    if (action === 'Update') {
      if (articleList.length === 0 && featuredArticle.length === 0)
        return alert('Please add at least one article to the issue.');

      if (
        !checkIsSame(
          articleList.map((item) => item.id),
          articles.map((item) => item.id),
        ) ||
        !checkIsSame(
          featuredArticle.map((item) => item.id),
          featured.map((item) => item.id),
        )
      ) {
        const {
          data: { updateIssueArticles: issue },
        } = await GraphClient.mutate({
          mutation: updateIssueArticles,
          variables: {
            updateIssueArticlesId: seletedIssue.id,
            articles: [
              ...articleList.map((item) => item.id),
              ...featuredArticle.map((item) => item.id),
            ],
            featured: featuredArticle.map((item) => item.id),
          },
        });
      }
      if (
        issueTitle !== seletedIssue.name ||
        startDate !== seletedIssue.startDate ||
        endDate !== seletedIssue.endDate
      ) {
        const {
          data: { updateIssueProps: issue },
        } = await GraphClient.mutate({
          mutation: updateIssueProps,
          variables: {
            updateIssuePropsId: seletedIssue.id,
            name: issueTitle,
            startDate: startDate,
            endDate: endDate,
          },
        });
        const index = issueList.findIndex((item) => item.id === issue.id);
        issueList[index] = issue;
        setIssueList([...issueList]);
      }
      handleClose();
    }
  };

  return (
    <div>
      <Dialog
        open={dialogBoxOpen}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
        fullWidth
        maxWidth='md'
      >
        <DialogTitle id='scroll-dialog-title'>Issue</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id='scroll-dialog-description'
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <TextField
              variant='outlined'
              placeholder='Issue'
              value={issueTitle}
              onChange={(e) => setIssueTitle(e.target.value)}
              sx={{ width: '50%' }}
            />

            <IssueDateInput
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />

            <IssueArticleInput
              articleList={articleList}
              setArticlesList={setArticlesList}
              featuredArticle={featuredArticle}
              setFeaturedArticle={setFeaturedArticle}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={issueAction}>
            {action === 'Add' ? 'Add' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
