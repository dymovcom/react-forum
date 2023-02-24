import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/button";
import { getCounterValue } from "../model/selectors/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const dec = "-";
  const inc = "+";

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button data-testid="counter-decrement-btn" onClick={decrement}>
        {dec}
      </Button>
      <Button data-testid="counter-increment-btn" onClick={increment}>
        {inc}
      </Button>
    </div>
  );
};
