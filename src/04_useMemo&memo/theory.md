## useMemo
* 1. when to use useMemo() ?
- >> when you want to memoize a perticular task's value use useMemo
- >> when you dont want a expensive task get's compute in every render 
* useMemo() --> return a value 
* syntax of writing useMemo() is -->
- >> const vlaue = useMemo(()=>{ 
    // logic for function 
    *return vlaue*
  }, [dependancy])