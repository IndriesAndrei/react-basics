export default function Sidebar({greet}) {
    // inline styling
    const asideStyle = {
        background: 'azure',
        width: 'calc(30% - 10px)',
        marginLeft: '10px',
    }

    return (
        <aside style={asideStyle}>{greet} from Sidebar</aside>
    )
}
