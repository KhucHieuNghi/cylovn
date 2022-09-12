import { useState } from 'react';

import { Badge, Modal, Space } from 'antd';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Button from '@/components/atoms/Button';
import FilterSelect from '@/components/molecules/FilterSelect';
import { NoteForm } from '@/components/molecules/Forms/NoteForm';
import TableNote from '@/components/organisms/TableNote';
import { MasterLayout } from '@/components/templates/MasterLayout';
import { useNote, useNoteDeleteMutate, useNotePostMutate, useNoteQuery } from '@/hooks/useNotes';
import { useNotesPolling } from '@/hooks/useNotesPolling';
import { useTagsStore } from '@/hooks/useTags';
import { Note } from '@/utils/types';

const HeaderFilterStyled = styled(Space)`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

const Home: NextPage = () => {
  
  const router = useRouter();
  
  const { updateNotes } = useNote();
  const { tags } = useTagsStore();

  const { mutateAsync: mutatePostAsync, isLoading: loadingPost } = useNotePostMutate();
  const { mutateAsync: mutateDelAsync, isLoading: loadingDel } = useNoteDeleteMutate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [tagFilter, setTagFilter] = useState<string | undefined>();
  
  const { data, refetch, isFetching: loadingNotes } = useNoteQuery( 
    tagFilter || '',
    { onSuccess: (notes: Note[]) => {
      updateNotes(notes);
    } });

  const { isChange } = useNotesPolling(data || [], tagFilter);

  const showModal = () => {
    setIsModalOpen(true);
    refetch();
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    refetch();
  };
  
  const handleSubmit = async (note: Note) => mutatePostAsync(note);

  const handleDelete = async (note: Note) => {
    await mutateDelAsync(note);
    refetch();
  };

  return (
    <MasterLayout>
      <HeaderFilterStyled>
        <FilterSelect 
          value={tagFilter}
          items={tags}
          onSelect={setTagFilter}
          onClear={() => setTagFilter(undefined)}
        />
        <Button type='primary' onClick={showModal}>Add Note</Button>
        <Badge dot={isChange}>
          <Button onClick={() => refetch()}>Reload</Button>
        </Badge>
      </HeaderFilterStyled>
      <TableNote 
        loading={loadingNotes || loadingDel}
        ActionComponent={
          (props:Note) => {
            return (
              <Space direction='vertical'>
                <Button type="link" danger onClick={() => handleDelete(props)}>Delete</Button>
                <Button type="link" onClick={() => router.push(`note/update?id=${props.id}`)}>Edit</Button>
              </Space>
            );
          }
        }
        data={data || []} 
        pagination={{
          pageSize: 50
        }}/>
      <Modal title="Add Note" open={isModalOpen} onOk={closeModal} onCancel={closeModal}>
        {isModalOpen && <NoteForm onSubmit={handleSubmit} loading={loadingPost}/>}
      </Modal>
    </MasterLayout>
  );
};

export default Home;
