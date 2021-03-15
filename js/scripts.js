import initScrollSuave from './modules/scrollSuave.js';
import AnimationScroll from './modules/animaScroll.js';
import initAccordionFaq from './modules/accordionFaq.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menumobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import initFeatchBtc from './modules/fetchBtc.js';

initScrollSuave();
initAccordionFaq();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFeatchBtc();

const scrollAnimado = new AnimationScroll('[data-anime="scroll"]');
scrollAnimado.init();
