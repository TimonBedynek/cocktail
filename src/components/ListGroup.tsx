import { useState } from "react";

interface ListGroupProps {
  items: string[];
  onSelectItem: (item: string) => void;
  onHeaderUpdate: (header: string) => void;
}

function ListGroup({ items, onSelectItem, onHeaderUpdate }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item}
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item);
            onHeaderUpdate(item);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
