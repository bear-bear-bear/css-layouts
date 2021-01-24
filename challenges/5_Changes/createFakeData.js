const createFakeData = () => {
  const lists = document.querySelectorAll('.contents__box__list');

  const returnFakeElems = (num) => {
    const DOMFragment = document.createDocumentFragment();

    const foo =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum abAd animi quasi incidunt sed iste rem maiores voluptate officia aperiam reiciendis praesentium doloribus repellat cupiditate voluptatum quaerat ea veritatis';

    const fooooo = foo.split('a').filter((str) => str.length > 5); // meaning less strs
    const foooooLength = fooooo.length;

    for (let i = 0; i < num; i++) {
      const item = document.createElement('li');
      item.classList.add('content__box__item');

      const randomNum = Math.floor(Math.random() * foooooLength);
      const randomStr = fooooo[randomNum];

      item.innerHTML = `
<p class="content__box__text">${randomStr}</p>
`.trim();

      DOMFragment.append(item);
    }

    return DOMFragment;
  };

  lists.forEach((list) => list.append(returnFakeElems(50)));
};

document.addEventListener('DOMContentLoaded', createFakeData, false);
