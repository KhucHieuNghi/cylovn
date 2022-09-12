/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from 'react';

import { Form } from 'antd';
import Search from 'antd/lib/input/Search';
import styled from 'styled-components';

import { ColForm } from '../Cols/ColForm';
import Button from '@/components/atoms/Button';
import InputArea from '@/components/atoms/InputArea';
import { InputTags } from '@/components/atoms/InputTags';
import { useTagsStore } from '@/hooks/useTags';
import { useToast } from '@/hooks/useToast';
import { Note } from '@/utils/types';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

const NoteFormStyled = styled(Form)`
`;

interface NoteFormProps {
    onSubmit: (note: Note) => void
    loading?: boolean
    note?: Note
}

export const NoteForm = (props: NoteFormProps) => {

  const { tags, addTag } = useTagsStore();
  const { notify, notifyError } = useToast();

  const [ state, setState ] = React.useState<Partial<Note>>({
    content: '',
    tags: [],
    ...props.note
  });

  const submitAddTag = (tag: string) => {
    if(!tag) {return;}
    addTag(tag);
    setState({ ...state, tags: [...(state.tags || []), tag] });
    notify({ message: 'Add new tag success' });
  };

  const handleSubmit = () => {

    if(!state.content) {
      return notifyError({ message: 'Please input content' });
    }

    if(!state.tags?.length) {
      return notifyError({ message: 'Please have at least a tag' });
    }

    notify({ message: 'Add new note success' });
    return props.onSubmit(state as Note);
  };

  return (
    <NoteFormStyled { ...layout } name="" className='note-form'>
      <Form.Item>
        <ColForm
          name='id'
          label='Note Id:'
          value={ <b>{state.id || '~'}</b> }
        />
      </Form.Item>

      <Form.Item>
        <ColForm
          name='content'
          label='Content:'
          value={ <InputArea
            showCount 
            maxLength={500} 
            placeholder='Add description'
            value={state.content}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState({ ...state, content: e.target.value })}
            autoSize={{
              minRows: 5,
              maxRows: 20,
            }}
          /> }
        />
      </Form.Item>

      <Form.Item>
        <ColForm
          name='tags'
          label='Tags:'
          value={ <InputTags
            value={state.tags || []}
            options={tags}
            onSelect={(tag: string) => {
              setState({ ...state, tags: [...(state.tags || []), tag] });
            }}
            onDeselect={(deTag: string) => {
              setState({ ...state,
                tags: (state.tags || []).filter(tag => tag !== deTag)
              });
            }}
              
          /> }
        />
      </Form.Item>
      <Form.Item>
        <ColForm
          name='tag'
          label=''
          value={ 
            <Search placeholder="Add tag" onSearch={submitAddTag} enterButton="Add" />
          }
        />
      </Form.Item>

      <small className='text-error'>{'*Note: Data mockup so haven\'t validation yet. Please input full fields'}</small>
      <Form.Item>
        <Button type='primary' block onClick={ handleSubmit } loading={props.loading}>
          Submit
        </Button>
      </Form.Item>
      
    </NoteFormStyled>
  );
};
