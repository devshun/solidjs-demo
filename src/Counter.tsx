import { render } from 'solid-js/web';
import { Component, createSignal } from 'solid-js';

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count() + 1);
        }}
      >
        + 1
      </button>{' '}
      Count: {count}
    </div>
  );
};
