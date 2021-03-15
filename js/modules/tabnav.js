export default function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
