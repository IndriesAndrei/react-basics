export default function Button() {
    const clickHandler = () => console.log('clicked');
    
    return (
        <button onClick={clickHandler}>Click me</button>
    )
}
