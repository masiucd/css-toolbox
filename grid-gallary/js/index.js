const cards = [
  {
    title: 'Hello from title',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis commodi ducimus minus. Reiciendis quod soluta nam quos ullam itaque.',
    img: 'https://source.unsplash.com/random',
  },
  {
    title: 'Hello from title',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis commodi ducimus minus. Reiciendis quod soluta nam quos ullam itaque.',
    img: 'https://source.unsplash.com/random',
  },
  {
    title: 'Hello from title',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis commodi ducimus minus. Reiciendis quod soluta nam quos ullam itaque.',
    img: 'https://source.unsplash.com/random',
  },
  {
    title: 'Hello from title',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis commodi ducimus minus. Reiciendis quod soluta nam quos ullam itaque.',
    img: 'https://source.unsplash.com/random',
  },
  {
    title: 'Hello from title',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis commodi ducimus minus. Reiciendis quod soluta nam quos ullam itaque.',
    img: 'https://source.unsplash.com/random',
  },
  {
    title: 'Hello from title',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis commodi ducimus minus. Reiciendis quod soluta nam quos ullam itaque.',
    img: 'https://source.unsplash.com/random',
  },
  {
    title: 'Hello from title',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis commodi ducimus minus. Reiciendis quod soluta nam quos ullam itaque.',
    img: 'https://source.unsplash.com/random',
  },
  {
    title: 'Hello from title',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis commodi ducimus minus. Reiciendis quod soluta nam quos ullam itaque.',
    img: 'https://source.unsplash.com/random',
  },
  {
    title: 'Hello from title',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis commodi ducimus minus. Reiciendis quod soluta nam quos ullam itaque.',
    img: 'https://source.unsplash.com/random',
  },
  {
    title: 'Hello from title',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veritatis commodi ducimus minus. Reiciendis quod soluta nam quos ullam itaque.',
    img: 'https://source.unsplash.com/random',
  },
];

const app = document.getElementById('app');

for (const card of cards) {
  app.innerHTML += `
  <div class="card">
    <div class="info">
      <strong class="title">${card.title}</strong>
      <p class="desc"> ${card.desc} </p>
      <img src=${card.img} alt=${card.title}>
    </div>
  </div>

  `;
}
