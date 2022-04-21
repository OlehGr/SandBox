

let state = {
        products: [
            {id: 1, kind: 'food' ,name: 'Хлеб', desc: 'Очень вкусный хлеб их натуральных ингридиентов'},
            {id: 2, kind: 'tech'  ,name: 'Ноутбук', desc: 'Импортозамещение ноутбуков всех западных производителей'},
            {id: 3, kind: 'cloth'  ,name: 'Кофта', desc: 'Красивая из материалов сохраняющих тепло'},
            {id: 4, kind: 'food'  ,name: 'Кофе', desc: 'Растворимый кофе российского производство'},
            {id: 5, kind: 'food'  ,name: 'Колбаса', desc: 'Натуральный мясной продукт не из туалетной бумаги'},
            {id: 6, kind: 'cloth'  ,name: 'Футболка', desc: 'Футболка из натурального белорусского хлопка'},
            {id: 7, kind: 'tech'  ,name: 'Планшет', desc: 'Тонкий планшет, почти не старый'},
        ],

        filterProducts() {
            const values = this.filterChecked.checkedList
            let searchProducts = this.products.filter( product => product.name.toLocaleLowerCase().includes( this.searchInput.value.toLocaleLowerCase() ) )

            if(values.length) return searchProducts.filter(product => values.some( checked => checked === product.kind ))

            return searchProducts
        },

        filterChecked: {
            checkedList: [],
            changeVal(val) {
                if(!this.checkedList.some(checked => checked === val)) this.checkedList = [...this.checkedList, val]
                else this.checkedList = this.checkedList.filter(checked => checked !== val)
                rerender()
            }
        },

        searchInput: {
            value: '',
            changeVal(val) {
                this.value = val
                rerender()
            }

        }







}

let rerender = () => {};

window.state = state

export const subscribe = (render) => {
    rerender = render
}

window.state = state

export default state