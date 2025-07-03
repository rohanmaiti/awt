
 * How react works / renders component
 * 1. if any state component changes the whole component re-renders
 * 2. if any parent component is re-rendering then all the child components will re-renders
 *    unless the child components are wrapped under * memo *
 * 3. what memo does ?
 * >> it stops the re-render of child component on every render of parent component,
 *    only if the porps of the child compoent are unchanged
 * 4. What does the useCallback does ?
 *    it helps to stop re-renders when referance types are passed in through prop
 * 5. then what is the differcence between memo and useCallback
 *
