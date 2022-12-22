function generateList(array) {
    const list = document.createElement("ul");
    array.forEach((item) => {
        if (!Array.isArray(item)) {
            const listItem = document.createElement('li');
            listItem.innerText = `${item}`;
            list.append(listItem);
        } else {
            const listItem = document.createElement('li');
            const listInner = document.createElement('ul')
            list.append(listItem);
            listItem.append(listInner);
            item.forEach((value) => {
                const listInnerItem = document.createElement('li');
                listInnerItem.innerText = `${value}`;
                listInner.append(listInnerItem);
            })
        }

    })
    document.body.append(list)
}

const array1 = [1, 2, 3];
const array2 = [1, 2, [1.1, 1.2, 1.3], 3]

generateList(array1);
generateList(array2);
