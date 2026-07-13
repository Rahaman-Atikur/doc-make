import React from "react";
type Doc = {
  id: string;
  title: string;
  description: string;
  order?: number;
  parent?: string | null;
  [key: string]: unknown;
};

type SidebarProps = {
  docs: Doc[];
};

const Sidebar = ({ docs }: SidebarProps) => {
  const root = docs.filter((doc) => !doc.parent);
  console.log("roots", root);
  return <div>Sidebar</div>;
};

export default Sidebar;
