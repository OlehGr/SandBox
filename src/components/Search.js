export default function Search(props) {
    const change = e => props.searchInput.changeVal(e.target.value)

    return (
        <div className={'search'}>
            <input type={'text'} value={props.searchInput.value} onChange={change} placeholder={'Поиск...'}/>
        </div>
    )
}