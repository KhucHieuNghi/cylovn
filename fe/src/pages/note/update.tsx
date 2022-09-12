import React from 'react';

import { PageHeader, Spin } from 'antd';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { NoteForm } from '@/components/molecules/Forms/NoteForm';
import { MasterLayout } from '@/components/templates/MasterLayout';
import { useNoteByIdQuery, useNoteUpdateMutate } from '@/hooks/useNotes';
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
  const { notify } = useToast();
  const { mutateAsync:  mutateUpdateAsync, isLoading: loadingUpdate } = useNoteUpdateMutate();
  const id = (router?.query?.id || '').toString() as string;

  const { data, isSuccess }  = useNoteByIdQuery(id, {
    enabled: Boolean(id),
    cacheTime: 10
  });

  const handleSubmit = async (note: Note) => {
    await mutateUpdateAsync(note);
    notify({ message: 'Success Updated' });
    router.push('/');
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
          title="Update Note"
        >
          {
            isSuccess ? <NoteForm onSubmit={handleSubmit} note={data as unknown as Note} loading={loadingUpdate}/> : <Spin tip="Loading..." >
              <NoteForm onSubmit={() => null}/>
            </Spin>
          }
        
        </PageHeader>
      </CreateFormStyled>
    </MasterLayout>
  );
};

export default CreateForm;