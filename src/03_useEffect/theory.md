# useEffect is used to handle side effects like -> data fetching, updating states on certain states change etc..

## Main syntax 
```
useEffect(() => {

    // side effect logic here 

    return () => {
        cleanup logic here (this return is optional)
    }

}, [dependancies])
```

## There are mainly theree type of use cases 
1. Runs onece when component mounts 
```
useEffect(() => {
    console.log('Component mounts');
}, [])
```

2. Runs on changing count state
```
const [count, setCount] = useState(0);
useEffect(() => {
    console.log('count changed');
}, [count])

3. Runs on Every render 
```
useEffect(() => {
    console.log('runs on every render');
})

## Example of cleanup function 
```
useEffect (() => {
    const interval = setInterval(() => {
        console.log('Interval running');
    }, 1000)

    return () => {
        clearInterval(inteval);
        console.log('Cleanup Tunction called');
    }
} , []) // runs once and cleaned up on unmount 
```


## Important rule for async work inside the useEffect 

#### ❌ this is in-correct, can't use await inside useEffect
```
useEffect(() => {
    const data = await fetchData();
    setData(data);
}, [])
```

#### ✅ instead use like this : 
```
useEffect(() => {
     const set_user_data = async () => {
        const data = await fetchData();
        setData(data);
    }
    set_user_data();
}, []);

# can use IIFE (imidiate invoke function defination) as well
```

#### ✅ can directly use fetch using .then.catch method : 
```
useEffect(() => {
    fetch('abc.com')
    .then((res) => {
        setData(res?.data);
    })
    .catch(() => {
        console.log('Error');
    })
}, [])

```