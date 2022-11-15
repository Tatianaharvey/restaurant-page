const menu = (() => {
    const content = document.querySelector('#content');

    const categories = ['Sweet', 'Savory', 'Drinks'];

    const food = [
        [
            {
              name: 'OAT OF CONTROL BOWL $10',
              description: 'Super charged oatmeal toped with raspberry compote, salted date paste and house made granola.',
            },
            {
              name: 'PROTEIN PANCAKES $14',
              description: 'Blueberry buckwheat pancake with vegan protein, layered with blueberry jam and maple syrup drizzle.',
            },
            {
              name: 'Nut + JAME $8',
              description: 'Almond butter with raspberry compote topped with chia seeds and fresh berries.',
            },
            {
              name: 'HONEY-BUTTER SCONE $5',
              description: 'House-made scone bursting with blueberries and honey butter.',
            },
          ],
          [
            {
              name: 'AVOCADO TOAST $8',
              description: 'Avocado topped with chilli oil, pea shoots, alfalfa, and chillies.',
            },
            {
              name: 'VEGGIE SAUSAGE HASH $14',
              description: 'A hearty ym and potato hash with egg scramble loaded with veggie sausage, kale, peppers, and onions.',
            },
          ],
          [
            {
              name: 'AMERICANO, ESPRESSO, FLAT WHITE   $4',
            },
            {
              name: 'MIMOSA $10',
            },
          ],
    ]

    function render() {
        content.textContent = '';
        content.classList.remove('home');
        content.classList.add('background');
       
        const headline = document.createElement('h1');
        headline.classList.add('menu-headline');
        headline.textContent = 'MENU';
        content.appendChild(headline);
       

        // Menu categories
        for (let i = 0; i < categories.length; i += 1) {
          const categoryTitle = document.createElement('h2');
          categoryTitle.classList.add('menu-category');
          categoryTitle.textContent = categories[i];
          content.appendChild(categoryTitle);
          if (categories[i] === 'Sweet') {
            const sweetMenu = document.createElement('p');
            sweetMenu.classList.add('sweet-category-info');
            content.appendChild(sweetMenu);
          }
          // Grid for menu items
          const menuGrid = document.createElement('div');
          menuGrid.classList.add('menu-grid');
          content.appendChild(menuGrid);
          // Menu items
          for (let j = 0; j < food[i].length; j += 1) {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuGrid.appendChild(menuItem);
            const foodName = document.createElement('p');
            foodName.textContent = food[i][j].name;
            menuItem.appendChild(foodName);
            
            const foodDesc = document.createElement('p');
            foodDesc.textContent = food[i][j].description;
            menuItem.appendChild(foodDesc);
          }
        }
      }
    
    return {
        render,
    };
})();
    
export default menu;
