import { Button, InputNumber } from "antd";
import { FC, useState } from "react";
import { FlexLayout } from "./styles/layout";

// Main entry point for our application
export const App: FC = () => {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <FlexLayout>
      <InputNumber min={0} max={100} defaultValue={count} value={count} />
      <Button type="primary" onClick={updateCount}>
        Primary Button
      </Button>
    </FlexLayout>
  );
};
