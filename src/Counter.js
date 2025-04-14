import { useEffect, useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [shownDate, setShownDate] = useState(new Date());

  const handleStepDrecrease = () => {
    if (step > 0) {
      setStep((currentStep) => currentStep - 1);
    }
  };

  const handleStepIncrease = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const handleCountDrecrease = () => {
    setCount((currentCount) => currentCount - step);
  };

  const handleCountIncrease = () => {
    setCount((currentCount) => currentCount + step);
  };

  useEffect(() => {
    calculateDays(count);
  }, [count]);

  const calculateDays = (count) => {
    const todayDate = new Date();
    let newDate = new Date(todayDate);

    // setShownDate(newDate.setDate(currentDate.getDate() + days));
    // newDate.setDate(currentDate.getDate() + days);

    newDate.setDate(todayDate.getDate() + count);
    setShownDate(newDate);
  };

  return (
    <div>
      <div>
        <Button label="-" clickHandler={handleStepDrecrease} />
        Step: {step}
        <Button label="+" clickHandler={handleStepIncrease} />
      </div>
      <div>
        {" "}
        <Button label="-" clickHandler={handleCountDrecrease} />
        Count: {count}
        <Button label="+" clickHandler={handleCountIncrease} />
      </div>
      <h1>
        {count} days from today is {shownDate.toString()}
      </h1>
    </div>
  );
};

export default Counter;
