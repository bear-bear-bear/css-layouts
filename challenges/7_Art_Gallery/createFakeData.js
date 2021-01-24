{
  /* 
<ul class='gallery__work__info-list'>
    <li class='gallery__work__info'>painter: ---</li>
    <li class='gallery__work__info'>programme: ---</li>
    <li class='gallery__work__info'>year: ---</li>
</ul> 
  */
}

const createFakeData = () => {
  const returnFakeInfo = () => {
    const DOMFragment = document.createDocumentFragment();

    const foobar =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum abAd animi quasi incidunt sed iste rem maiores voluptate officia aperiam reiciendis praesentium doloribus repellat cupiditate voluptatum quaerat ea veritatis';

    const foos = foobar.match(/\w+ \w+/g); // meaning less strs
    const bars = foobar.match(/\w+/g); // meaning less strs

    const foosLength = foos.length;
    const barsLength = bars.length;

    const list = document.createElement('ul');
    list.classList.add('gallery__work__info-list');

    const fooIdx = Math.floor(Math.random() * foosLength);
    const barIdx = Math.floor(Math.random() * barsLength);
    const year = Math.ceil(15 + Math.random() * 6); // 16 ~ 21

    list.innerHTML = `
<li class='gallery__work__info'>painter: ${foos[fooIdx]}</li>
<li class='gallery__work__info'>programme: ${bars[barIdx]}</li>
<li class='gallery__work__info'>year: 20${year}</li>
  `.trim();

    DOMFragment.append(list);

    return DOMFragment;
  };

  const works = document.querySelectorAll('.gallery__work');

  works.forEach((work) => work.append(returnFakeInfo()));
};

document.addEventListener('DOMContentLoaded', createFakeData, false);
