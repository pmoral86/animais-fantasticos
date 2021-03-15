import debounce from './debounce.js';

export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.5;
    this.checkDistance = debounce(this.checkDistance.bind(this), 150);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  // animaScroll() {
  //   this.sections.forEach((section) => {
  //     const sectionTop = section.getBoundingClientRect().top;
  //     const isSectionVisible = (sectionTop - this.windowMetade) < 0;
  //     if (isSectionVisible) {
  //       section.classList.add('ativo');
  //     } else if (section.classList.contains('ativo')) {
  //       section.classList.remove('ativo');
  //     }
  //   });
  // }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
