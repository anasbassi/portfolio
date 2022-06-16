const worksSection = document.querySelector('.work');
const headerWrapper = document.querySelector('.header');
const projectButton = document.querySelector('.card .btn');
const works = [
  {
    name: 'Tonic',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
    description: {
      featured:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detailed:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with thereleaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    languages: {
      featured: ['html', 'css', 'javascript'],
      detailed: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    },
    thumbnail: 'Snapshoot1',
    liveUrl: 'https://anasbassi.github.io/portfolio/',
    sourceCode: 'https://github.com/anasbassi',
  },
  {
    name: 'Multi-Post Stories',
    jobDescription: {
      company: 'FACEBOOK',
      role: 'FullStack Dev',
      year: '2015',
    },
    description: {
      featured:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      detailed:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with thereleaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    languages: {
      featured: ['html', 'Ruby on rails', 'css', 'javascript'],
      detailed: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    },
    thumbnail: 'Snapshoot2',
    liveUrl: 'https://anasbassi.github.io/portfolio/',
    sourceCode: 'https://github.com/anasbassi',
  },
  {
    name: 'Facebook 360',
    jobDescription: {
      company: 'FACEBOOK',
      role: 'FullStack Dev',
      year: '2015',
    },
    description: {
      featured:
        "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      detailed:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with thereleaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    languages: {
      featured: ['html', 'Ruby on rails', 'css', 'javascript'],
      detailed: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    },
    thumbnail: 'Snapshoot3',
    liveUrl: 'https://anasbassi.github.io/portfolio/',
    sourceCode: 'https://github.com/anasbassi',
  },
  {
    name: 'Uber Navigation',
    jobDescription: {
      company: 'Uber',
      role: 'Lead Developer',
      year: '2018',
    },
    description: {
      featured:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      detailed:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with thereleaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    languages: {
      featured: ['html', 'Ruby on rails', 'css', 'javascript'],
      detailed: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    },
    thumbnail: 'Snapshoot4',
    liveUrl: 'https://anasbassi.github.io/portfolio/',
    sourceCode: 'https://github.com/anasbassi',
  },
];

for (let i = 0; i < works.length; i++) {
  const worksContainer = document.createElement('div');
  worksContainer.innerHTML = `
  <div class="card">
  <img class="work-img" src="images/${works[i].thumbnail}.png" alt="tonic">
  <div>
    <h2>${works[i].name}</h2>
    <ul>
      <li class="canopy">${works[i].jobDescription.company}</li>
      <li class="more"><img src="images/Counter.png" alt=""></li>
      <li class="more">${works[i].jobDescription.role}</li>
      <li class="more"><img src="images/Counter.png" alt=""></li>
      <li class="more">${works[i].jobDescription.year}</li>
    </ul>
    <p>${works[i].description.featured}</p>
    <ul>
      <li><button class="lang">${works[i].languages.featured[0]}</button></li>
      <li><button class="lang">${works[i].languages.featured[1]}</button></li>
      <li><button class="lang">${works[i].languages.featured[2]}</button></li>
    </ul>
    <button class="btn">See Project</button>
  </div>
</div>
  `;
  worksSection.appendChild(worksContainer);
}

function createpopup(position) {
  const popup = document.createElement('section');
  popup.innerHTML = `
  <div class="card popup">
    <div>
      <h2>${works[position].name}</h2>
      <img src="images/iconpopup.png" alt="popup-close" class="popup-close">
    </div>
    <ul>
      <li class="canopy">${works[position].jobDescription.company}</li>
      <li class="more"><img src="images/Counter.png" alt=""></li>
      <li class="more">${works[position].jobDescription.role}</li>
      <li class="more"><img src="images/Counter.png" alt=""></li>
      <li class="more">${works[i].jobDescription.year}</li>
    </ul>
  <img class="work-img" src="images/${works[position].thumbnail}.png" alt="tonic">
  <div>
    <p>${works[position].description.detailed}</p>
    <ul>
      <li><button class="lang">${works[i].languages.detailed[0]}</button></li>
      <li><button class="lang">${works[i].languages.detailed[1]}</button></li>
      <li><button class="lang">${works[i].languages.detailed[2]}</button></li>
      <li><button class="lang">${works[i].languages.detailed[3]}</button></li>
      <li><button class="lang">${works[i].languages.detailed[4]}</button></li>
      <li><button class="lang">${works[i].languages.detailed[5]}</button></li>
    </ul>
    <div>
    <a href="${works[position].liveUrl}"><button class="btn">See live</button></a>
    <a href="${works[position].sourceCode}"><button class="btn">See Source</button></a>
    </div>
  </div>
</div>`;
popup.classList.add("");
worksSection.appendChild(popup);
headerWrapper.classList.toggle('display-none');
headerWrapper.classList.toggle('position-fixed');
document.body.classList.toggle('no-scroll');
}

projectButton.forEach((btn, index) => {
  btn.addEventListner('click', () => {
    createpopup(index);
    const popupHtml = document.querySelector('.popup');
    document.querySelector('.popup-close').addEventListener('click', () => {
      worksSection.removeChild(popupHtml);
      headerWrapper.classList.toggle('display-none');
      headerWrapper.classList.toggle('position-fixed');
      document.body.classList.toggle('no-scroll');
    });
  });
});
