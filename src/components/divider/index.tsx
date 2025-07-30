interface DividerProps {
  height: string | number;
}

export const Divider: React.FC<DividerProps> = ({ height }) => (
  <div style={{ height }}></div>
);
