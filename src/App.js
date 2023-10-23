import './App.css';
import { incNumber } from './action/action';
import { decNumber } from './action/action';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(incNumber(5))}>inc</button>
      <span>{myState}</span>
      <button onClick={() => dispatch(decNumber(5))}>dec</button>
    </>
  );
}

export default App;
