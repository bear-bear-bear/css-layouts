{
  /*
<li class='webs__item'>
    <section class='webs__item__wrap webs__item__wrap--header'>
        <p class='webs__item__header'></p>
    </section>
    <section class='webs__item__wrap webs__item__wrap--link'>
        <a href='#' class='webs__item__link'></a>
    </section>
    <section class='webs__item__wrap webs__item__wrap--desc'>
        <p class='webs__item__desc'></p>
    </section>
    <section class='webs__item__wrap webs__item__wrap--year'>
        <p class='webs__item__year'></p>
    </section>
</li>
    */
}

{
  /*
<li class='posts__item'>
    <h4 class='posts__item__main-title'></h4>
    <p class='posts__item__sub-title'></p>
</li>
    */
}

const getMeanlessStr = (wordCnt = 1) => {
  const fooooo =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum abAd animi quasi incidunt sed iste rem maiores voluptate officia aperiam reiciendis praesentium doloribus repellat cupiditate voluptatum quaerat ea veritatis';

  if (wordCnt >= 29) return [fooooo];

  const reg = new RegExp(`\\w+( \\w+){${wordCnt - 1}}`, 'g');

  return fooooo.match(reg); // meaning less strs
};

const returnFakeWebItems = (num) => {
  const DOMFragment = document.createDocumentFragment();

  const foos = getMeanlessStr(1);
  const bars = getMeanlessStr(2);
  const foosLength = foos.length;
  const barsLength = bars.length;

  for (let i = 0; i < num; i++) {
    const item = document.createElement('li');
    item.classList.add('webs__item');

    const fooIdx_a = Math.floor(Math.random() * foosLength);
    const fooIdx_b = Math.floor(Math.random() * foosLength);
    const barIdx_a = Math.floor(Math.random() * barsLength);
    const barIdx_b = Math.floor(Math.random() * barsLength);

    const year = Math.ceil(10 + Math.random() * 5); // 11 ~ 20

    item.innerHTML = `
<section class='webs__item__wrap webs__item__wrap--header'>
    <p class='webs__item__header'>${foos[fooIdx_a]}</p>
</section>
<section class='webs__item__wrap webs__item__wrap--link'>
    <a href='#' class='webs__item__link'>${bars[barIdx_a]}</a>
</section>
<section class='webs__item__wrap webs__item__wrap--desc'>
    <p class='webs__item__desc'>${bars[barIdx_b]}, ${foos[fooIdx_b]}</p>
</section>
<section class='webs__item__wrap webs__item__wrap--year'>
    <p class='webs__item__year'>20${year} → present</p>
</section>
`.trim();

    DOMFragment.append(item);
  }

  return DOMFragment;
};

const returnFakePostItems = (num) => {
  const DOMFragment = document.createDocumentFragment();

  const foos = getMeanlessStr(2);
  const bars = getMeanlessStr(29);

  const foosLength = foos.length;
  const barsLength = bars.length;

  for (let i = 0; i < num; i++) {
    const item = document.createElement('li');
    item.classList.add('posts__item');

    const fooIdx = Math.floor(Math.random() * foosLength);
    const barIdx = Math.floor(Math.random() * barsLength);

    item.innerHTML = `
<h4 class='posts__item__main-title'>${foos[fooIdx]}</h4>
<p class='posts__item__sub-title'>${bars[barIdx]}</p>
`.trim();

    DOMFragment.append(item);
  }

  return DOMFragment;
};

const createFakeData = () => {
  const webList = document.querySelector('.webs__list');
  const fakeWebs = returnFakeWebItems(20);
  webList.append(fakeWebs);

  const postList = document.querySelector('.posts__list');
  const fakePosts = returnFakePostItems(60);
  postList.append(fakePosts);
};

document.addEventListener('DOMContentLoaded', createFakeData, false);
