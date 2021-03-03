const goods = [
    {
        title: 'Backpack',
        price: '$250',
        img_src: 'img_cat/1.jpg',
        description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.'
    },
    {
        title: 'Jacket', 
        price: '$350',
        img_src: 'img_cat/2.jpg',
        description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.' 
    },
    { 
        title: 'Hoodies', 
        price: '$250',
        img_src: 'img_cat/3.jpg',
        description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.' 
    },
    { 
        title: 'Pants', 
        price: '$200',
        img_src: 'img_cat/4.jpg',
        description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.' 
    },
    { 
        title: 'T-shirt', 
        price: '$100',
        img_src: 'img_cat/5.jpg',
        description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.'
    },
    { 
        title: 'Cap', 
        price: '$50',
        img_src: 'img_cat/6.jpg',
        description: 'Known for her sculptural takes on&nbsp;traditional<br> tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams<br>up&nbsp;with Moda Operandi.'
    },
  ];

  const renderGoodsItem = ({title, price, img_src, description}) => {
    return `<figure class="fetured_block">
    <div class="fetured_blok_hover">
        <button class="hover_button"><img class="cart_small" src="img/cart_small.png" alt="">Add to Cart</button>
    </div>
    <img src="${img_src}" alt="img" class="fetured_img">
    <p class="fetured_text-1">${title}</p>
    <p class="fetured_text-2">${description}</p>
    <p class="fetured_text-3">${price}</p>
</figure>`
  };
const $goodsList = document.querySelector('.fetured_block_line')
const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
        ).join('\n')
    goodsList.insertAdjacentHTML ('beforeend',goodsList.j)
}

renderGoodsList()