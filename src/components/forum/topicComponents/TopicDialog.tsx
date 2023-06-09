import CustomDialog from '@/components/drawer/CustomModal';
import { Comment, Topic } from '@/types/firebaseTypes';
import { Button } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useToggle } from 'react-use';
import TopicHeader from './TopicHeader';
import useMobileWidth from '@/hooks/useMobile';
import { fetchForumComments } from '@/utils/fetchUtils';
import TopicComment from './TopicComment';
import CommentSkeletons from './CommentSkeletons';
import CommentAdd from './CommentAdd';

interface TopicDialogProps {
  topic: Topic;
}

const TopicDialog: FC<TopicDialogProps> = ({ topic }) => {
  const [isOpen, toggle] = useToggle(false);
  const [comments, setComments] = useState<Comment[] | undefined>(undefined);
  const [loaded, setLoaded] = useState<boolean>(false);
  const { isMobile } = useMobileWidth();

  const { title, likes, content, user_profile, id, created_at } = topic;

  const dialogTitle = `Topic from ${user_profile.displayName}`;

  useEffect(() => {
    if (!isOpen || loaded) return;
    const fetchComments = async () => {
      const data = await fetchForumComments(id);
      setComments(data);
      setLoaded(true);
    };

    fetchComments();
  }, [isOpen, loaded]);

  const handleRefetch = () => {
    setLoaded(false);
  };

  return (
    <>
      <Button onClick={toggle} sx={{ width: 'fit-content' }}>
        Read more
      </Button>
      <CustomDialog
        keepMounted={loaded}
        title={dialogTitle}
        open={isOpen}
        toggle={toggle}
        desktopWidth={'60%'}
        mobileWidth={'100%'}
        fullScreen={isMobile}
      >
        <div className="relative h-full">
          <div className="flex flex-col gap-5 border-y border-primary-gray py-10">
            <TopicHeader
              id={id}
              title={title}
              user_profile={user_profile}
              likes={likes}
              created_at={created_at}
            />
            <p className="text-primary-gray">{content}</p>
          </div>
          <div className="flex flex-col gap-4 py-10">
            {!loaded ? (
              <CommentSkeletons />
            ) : (
              <>
                {comments?.length ? (
                  comments.map((comment) => <TopicComment key={comment.id} comment={comment} />)
                ) : (
                  <p className="p-4 bg-neutral">No comments yet</p>
                )}
              </>
            )}
          </div>
          <CommentAdd topic_id={id} handleRefetch={handleRefetch} />
        </div>
      </CustomDialog>
    </>
  );
};

export default TopicDialog;
