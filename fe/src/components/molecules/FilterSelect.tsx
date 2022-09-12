import { Select } from 'antd';

const { Option } = Select;

interface FilterSelectProps { 
  items: string[]
  value?: string
  onSelect: (value:string) => void
  onClear: () => void
}

export const FilterSelect = (props: FilterSelectProps) => {
  return (
    <Select
      showSearch
      allowClear
      value={props.value}
      style={{ width: 200 }}
      placeholder="Search to Select Tags"
      optionFilterProp="children"
      filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA!.children as unknown as string)
          .toLowerCase()
          .localeCompare((optionB!.children as unknown as string).toLowerCase())
      }
      onClear={props.onClear}
      onSelect={props.onSelect}
    >
      {
        props.items.map(item => <Option 
          key={item}
          value={item} 
        >{item}</Option> 
        )
      }

    </Select>
  );
};

export default FilterSelect;