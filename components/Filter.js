export default function Filter({filter}) {

    const onchange = e => filter.changeVal(e.currentTarget.value)

    const isChecked = (val) => filter.checkedList.some(kind => kind === val)



    return (
        <div className='filter'>
            <label className={'filter-input' + (isChecked('food') ? ' active' : '')}>
                <input checked={isChecked('food')} onChange={onchange} type='checkbox' name='kind' value={'food'} />
                Еда
            </label>
            <label className={'filter-input' + (isChecked('cloth') ? ' active' : '')}>
                <input checked={isChecked('cloth')} onChange={onchange} type='checkbox' name='kind' value={'cloth'} />
                Одежда
            </label>
            <label className={'filter-input' + (isChecked('tech') ? ' active' : '')}>
                <input checked={isChecked('tech')} onChange={onchange} type='checkbox' name='kind' value={'tech'} />
                Техника
            </label>
        </div>
    );
}