import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode | ReactNode[];
}

const ListGroup: React.FC<IProps> = ({ children }) => (
  <ul className="mb-0 ps-0">{children}</ul>
);

export default ListGroup;
