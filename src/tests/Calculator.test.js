import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5',()=>{
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1)
    const addButton = container.getByTestId('operator-add')
    fireEvent.click(addButton)
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('it should subtract 4 from 7 and get 3',()=>{
    const runningTotal = container.getByTestId('running-total')
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7)
    const minusButton = container.getByTestId('operator-subtract')
    fireEvent.click(minusButton)
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('it should multiply 3 by 5 and get 15', ()=>{
    const runningTotal = container.getByTestId('running-total')
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3)
    const multiplyButton = container.getByTestId('operator-multiply')
    fireEvent.click(multiplyButton)
    const button5 = container.getByTestId('number5')
    fireEvent.click(button5)
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('it should divide 21 by 7 and get 3', ()=>{
    const runningTotal = container.getByTestId('running-total')
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2)
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1)
    const divideButton = container.getByTestId('operator-divide')
    fireEvent.click(divideButton)
    const button7 = container.getByTestId('number7')
    fireEvent.click(button7)
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('it should concatenate multiple number button clicks', ()=>{
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8)
    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    fireEvent.click(button1)
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3)
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('81134')
  })

  it('it should clear the running total without affecting the calculation', ()=>{
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8)
    const addButton = container.getByTestId('operator-add')
    fireEvent.click(addButton)
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4)
    fireEvent.click(addButton)
    fireEvent.click(button4)
    const clearButton = container.getByTestId('clear')
    fireEvent.click(clearButton)
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('12')
  })

})


