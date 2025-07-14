//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'LêBits',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },
  // Add default routes
  routes: [
    {
      path: '/index/',
      url: 'index.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("menuPrincipal").show("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
      // fazer algo quando a página for inicializada
      $.getScript('js/index.js')

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        autoplay: true,
        delay: 3000,
        loop: true,
      });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/biblioteca/',
      url: 'biblioteca.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,
        autoplay: true,
        delay: 3000,
        loop: true,
      });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/debates/',
      url: 'debates.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/atividades/',
      url: 'atividades.html',
     options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
    
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/detalhes/',
      url: 'detalhes.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("menuPrincipal").hide("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/detalhes-2/',
      url: 'detalhes-2.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("menuPrincipal").hide("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/detalhes-3/',
      url: 'detalhes-3.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("menuPrincipal").hide("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/detalhes-4/',
      url: 'detalhes-4.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("menuPrincipal").hide("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/detalhes-5/',
      url: 'detalhes-5.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("menuPrincipal").hide("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/detalhes-6/',
      url: 'detalhes-6.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("menuPrincipal").hide("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/carrinho/',
      url: 'carrinho.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("menuPrincipal").hide("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/ajustes/',
      url: 'ajustes.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("menuPrincipal").hide("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/chat/',
      url: 'chat.html',
      options: {
      transition: 'f7-dive',
    },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("menuPrincipal").hide("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
  ],
  // ... other parameters
});

//Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});


function onDeviceReady() {
  //Quando estiver rodando no celular
  var mainView = app.views.create('.view-main', { url: '/index/' });

  //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
  document.addEventListener("backbutton", function (e) {

    if (mainView.router.currentRoute.path === '/index/') {
      e.preventDefault();
      app.dialog.confirm('Deseja sair do aplicativo?', function () {
        navigator.app.exitApp();
      });
    } else {
      e.preventDefault();
      mainView.router.back({ force: true });
    }
  }, false);

}
