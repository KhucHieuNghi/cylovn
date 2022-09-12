import React from 'react';

import { PageHeader } from 'antd';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { NoteForm } from '@/components/molecules/Forms/NoteForm';
import { MasterLayout } from '@/components/templates/MasterLayout';
import { useNotePostMutate } from '@/hooks/useNotes';
import { useToast } from '@/hooks/useToast';
import { Note } from '@/utils/types';

const CreateFormStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .site-page-header{
    max-width: 800px;
    margin: auto;
    text-align: left;
    width: 100%;
  }
  .ant-row{
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
`;

const CreateForm: React.FC = () => {
  const router = useRouter();
  const { mutateAsync: mutatePostAsync, isLoading: loadingPost } = useNotePostMutate();
  const { notify } = useToast();

  const handleSubmit = async (note: Note) => {
    await mutatePostAsync(note);
    notify({ message: 'Created Success' });
  };

  return (
    <MasterLayout>
      <CreateFormStyled className="">
        <img
          srcSet="
                https://baemin.vn/desktop/images/baedale-cat-sherlock-01-pts@3x.png 3x,
                https://baemin.vn/desktop/images/baedale-cat-sherlock-01-pts@2x.png 2x,
                https://baemin.vn/desktop/images/baedale-cat-sherlock-01-pts.png    1x
              "
          src="https://baemin.vn/desktop/images/baedale-cat-sherlock-01-pts.png" 
          alt="BAEMIN Delicious Dishes"
        />
        <PageHeader
          className="site-page-header"
          onBack={() => router.push('/')}
          title="Add a new note"
        >
        
          <NoteForm onSubmit={handleSubmit} loading={loadingPost}/>
        </PageHeader>
      </CreateFormStyled>
    </MasterLayout>
  );
};

export default CreateForm;