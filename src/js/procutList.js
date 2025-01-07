// All Procudction activity for the product list page
window.onload = function () {
    const sortItems = document.querySelectorAll('[aria-label=SortItems] button')
    const FilterHead = document.querySelectorAll('[aria-label=filterHead]')
    const btnProdectInfo = document.querySelectorAll('article button')

    sortItems.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault()

            // reset all items
            sortItems.forEach(item => {
                if (item.children[1]) {
                    item.classList.add('text-gray-300')
                    item.children[1].classList.add('hidden')
                }
            })

            // set the current item
            let icon = item.children[1]
            if (icon) {
                item.classList.remove('text-gray-300')
                icon.classList.remove('hidden')
            }
        })
    })

    FilterHead.forEach((filterHead) => {
        filterHead.addEventListener('click', () => {
            const dropdown = filterHead.nextElementSibling;
            const icon = filterHead.querySelector('i:last-child');

            if (dropdown.classList.contains('hidden')) {
                dropdown.classList.remove('hidden')
                icon.classList.add('rotate-180')
            } else {
                dropdown.classList.add('hidden')
                icon.classList.remove('rotate-180')
            }
        });
    })

    btnProdectInfo.forEach((btn) => {
        btn.addEventListener('click', () => {
            window.location.href = 'productInfo.html'
        })
    })
}