import { Menu } from 'antd';
import { Action } from '../Types/ActionTypes';

interface ActionMenuProps<T> {
  actions: Action<T>[]; // Using the Action type with the generic parameter T
  record: T; // Prop to receive the record
}

const ActionMenu = <T extends Record<string, any>>({ actions, record }: ActionMenuProps<T>) => {
  const handleClick = (action: Action<T>) => {
    return () => action.onClick(record); // Passing the record parameter to the onClick function
  };

  return (
    <Menu>
      {actions.map((action, index) => (
        <Menu.Item key={index} onClick={handleClick(action)} style={action.style}>
          {action.icon}
          {action.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default ActionMenu;
