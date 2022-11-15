const contact = (() => {
    const content = document.querySelector('#content');
  
    function render() {
      content.textContent = '';
      content.classList.remove('home');
      content.classList.add('background');
      // Headline
      const headline = document.createElement('h1');
      headline.classList.add('contact-headline');
      headline.textContent = `Let's brunch!`;
      content.appendChild(headline);
      // Contact flex layout
      const contactFlex = document.createElement('div');
      contactFlex.classList.add('contact-flex');
      content.appendChild(contactFlex);
      // container
      const contactListContainer = document.createElement('div');
      contactFlex.appendChild(contactListContainer);
     
      
      const contactList = document.createElement('div');
      contactList.classList.add('contact-list');
      contactListContainer.appendChild(contactList);
      // Call us
      const contactListCall = document.createElement('h3');
      contactList.appendChild(contactListCall);
      const contactListCallText = document.createTextNode('Call us: 250-897-6453');
      contactListCall.appendChild(contactListCallText);
      
      // Email
      const contactListEmail = document.createElement('h3');
      contactList.appendChild(contactListEmail);
      const contactListEmailText = document.createTextNode('Email Us: info@thebrunchbar.ca ');
      contactListEmail.appendChild(contactListEmailText);
      // Working hours
      const contactListHours = document.createElement('h3');
      contactListHours.textContent = 'Working hours:';
      contactList.appendChild(contactListHours);
      const contactListHoursFlex = document.createElement('div');
      contactListHoursFlex.classList.add('contact-working-hours');
      contactList.appendChild(contactListHoursFlex);
      // Working hours days div
      const contactListHoursDays = document.createElement('div');
      contactListHoursFlex.appendChild(contactListHoursDays);
      const contactListHoursDaysP = document.createElement('p');
      contactListHoursDaysP.textContent = 'WED-FRI';
      contactListHoursDays.appendChild(contactListHoursDaysP);
      const contactListHoursDaysP2 = document.createElement('p');
      contactListHoursDaysP2.textContent = 'SAT-SUN';
      contactListHoursDays.appendChild(contactListHoursDaysP2);
      // Working hours time div
      const contactListHoursTime = document.createElement('div');
      contactListHoursFlex.appendChild(contactListHoursTime);
      const contactListHoursTimeP = document.createElement('p');
      contactListHoursTimeP.textContent = '8:00AM - 2:00PM';
      contactListHoursTime.appendChild(contactListHoursTimeP);
      const contactListHoursTimeP2 = document.createElement('p');
      contactListHoursTimeP2.textContent = '9:00AM - 3:00PM';
      contactListHoursTime.appendChild(contactListHoursTimeP2);
    }
    
    return {
      render,
    };
})();
  
export default contact;