function initTabNav(){ // fechar o conteudo da nav por tab em uma função
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo'); // faz aparecer o primeiro texto sem clicar

    function activeTab(index) { // ativa a tab de acordo com o numero no index (activeTab (x))
      tabContent.forEach((section)=>{
        section.classList.remove('ativo'); // remove de um quando o ativo for adicionado a outro
      });
      tabContent[index].classList.add('ativo');
    }
    //adicionar um evento a cada link -> quando clicar na imagem, o seu index deve ser passado na activeTab
    tabMenu.forEach((itemMenu, index)=>{ //loop para cada imagem do menu
      itemMenu.addEventListener('click', function(){
        activeTab(index); // mostra o index de cada imagem
      })
    });
  }
};
initTabNav(); // ativa a função anterior

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item)=> {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();
  function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    linksInternos.forEach((link)=>{
      link.addEventListener('click', scrollToSection);
    });
  }
}
initScrollSuave(); 

function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length){
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = (sectionTop - windowMetade);
        if(isSectionVisible){
          section.classList.add('ativo');
        }
      })
    }

    window.addEventListener('scroll', animaScroll); 
    }
}
initAnimacaoScroll();