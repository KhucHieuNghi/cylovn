/* eslint-disable react/prop-types */
import React from 'react';

import { Select, Tag } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

interface InputTagsProps {
  options: string[]
  defaultValue?: string[]
  value: string[]
  onSelect: (tag: string) => void
  onDeselect: (tag: string) => void
}

const tagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};
export const InputTags = ({ options, value, defaultValue, onSelect, onDeselect }: InputTagsProps) => {

  return (
    <Select
      value={value}
      mode="multiple"
      showArrow
      tagRender={tagRender}
      defaultValue={defaultValue || []}
      style={{ width: '100%' }}
      options={options.map((option => ({ value: option })))}
      onSelect={onSelect}
      onDeselect={onDeselect}
    />
  );
};