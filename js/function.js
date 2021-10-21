var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1210: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    720: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});

$(document).ready(function () {
  let contador = 0;
  $("#contraste").click(function () {
    if (contador == 0) {
      $(".contrastejs").addClass("formata");
      contador++;
    } else {
      $(".contrastejs").removeClass("formata");
      return (contador = 0);
    }
  });

  $("#minusculo").click(function () {
    let elemento = $("body");
    let fonte = elemento.css("font-size");
    elemento.css("fontSize", parseInt(fonte) - 1);
  });
  $("#maiusculo").click(function () {
    let elemento = $("body");
    let fonte = elemento.css("font-size");
    elemento.css("fontSize", parseInt(fonte) + 1);
  });

  //json
  $("form").submit(function () {
    $("form").append("<p id = 'formato'> </p>");
    let objeto = {
      nome: $("#fNome").val(),
      Telefone: $("#fTelefone").val(),
      Email: $("#fEmail").val(),
      // "nome": $('#tNome').val(),
    };
    let html = JSON.stringify(objeto, 0, 4);
    $("#formato").text(html);
    return false;
  });

  // ajax
});

//formulario

// v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
// v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
// v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos

//Mascara//
$(document).ready(function () {
  $("#fTelefone").keypress(function () {
    let tel = $("#fTelefone").val();

    tel = tel.replace(/\D/g, "");
    tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2");
    tel = tel.replace(/(\d)(\d{4})$/, "$1-$2");

    $("#fTelefone").val(tel);
  });
});

//Validar
function espacoBranco(objeto) {
  let maskNome = /^[A-z]/;
  if (maskNome.test(objeto.value)) {
    return true;
  }
  alert("Preencha o campo do nome corretamente");
  return false;
}

function formatoEmail(objeto) {
  if (objeto.value.includes("@gmail.com")) {
    return true;
  }
  alert("Formato de E-mail incompativel");
  return false;
}

function formatoTel(objeto) {
  let maskTel = /^\(\d{2}\)[0-9]{5}-[0-9]{4}$/;
  if (maskTel.test(objeto.value)) {
    return true;
  }
  alert("Telefone inválido!");
  return false;
}

function validar() {
  let n = document.getElementById("fNome");
  let e = document.getElementById("fEmail");
  let t = document.getElementById("fTelefone");
  let armazena = "";
  if (espacoBranco(n) != true) {
    armazena += false;
  } else if (espacoBranco(e) != true) {
    armazena += false;
  } else if (formatoEmail(e) != true) {
    armazena += false;
  } else if (formatoTel(t) != true) {
    armazena += false;
  }
  return armazena;
}
