const home = (() => {
    const content = document.querySelector('#content');

    function render() {
        content.classList.remove('background');
        content.classList.add('home');
        content.textContent = '';
        
        const headline = document.createElement('h1');
        headline.classList.add('home-headline');
        headline.textContent = 'The Brunch Bar';
        content.appendChild(headline);
        
        const sep = document.createElement('div');
        sep.classList.add('home-sep');
        content.appendChild(sep);
        
        const subtitle = document.createElement('p');
        subtitle.classList.add('home-subtitle');
        subtitle.textContent = 'The only thing better than brunch is brunch with friends!';
        content.appendChild(subtitle);
        
        const button = document.createElement('a');
        button.classList.add('home-button');
        button.textContent = 'MENU';
        content.appendChild(button);
      }
    
      return {
        render,
    };
})();
    
 export default home;