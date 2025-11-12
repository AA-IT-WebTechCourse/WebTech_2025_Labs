import React from 'react'
import CounterWithoutHook from './hooks/CounterWithoutHook'
import CounterWithUseState from './hooks/CounterWithUseState'
import CounterWithUseEffect from './hooks/CounterWithUseEffect'
import CounterWithUseRef from './hooks/CounterWithUseRef'


export default function HooksContainer() {
  return (
    <div>
        <CounterWithoutHook />
        <CounterWithUseState />
        <CounterWithUseEffect />
        <CounterWithUseRef />

    
    </div>
  )
}
