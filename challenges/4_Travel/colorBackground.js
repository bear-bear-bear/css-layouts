// 텍스트 박스에 그라데이션 색상 부여하는 임시 스크립트
// ⛔ 게시글 개수가 많아질수록 성능에 영향을 줍니다
const getGradationColors = (num) => {
  let gradationColors = [];

  for (let i = 0; i < num; i++) {
    const color = 255 - Math.floor(150 - (50 / num) * i);

    gradationColors.push(`rgb(140, 140, ${color})`);
  }

  document.body.style.backgroundColor = 'rgb(140, 140, 140)'; // 위에서 설정한 컴포넌트 색과 같은 톤으로 배경색 맞추기

  return gradationColors;
};

const colorTextBoxes = () => {
  const textBoxes = document.querySelectorAll('.box--text');
  const colors = getGradationColors(textBoxes.length);

  textBoxes.forEach((box, idx) => {
    box.style.backgroundColor = colors[idx];
  });
};

document.addEventListener('DOMContentLoaded', colorTextBoxes, false);
