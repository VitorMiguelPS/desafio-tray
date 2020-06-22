//Pega as fotos da galeria e aplica um slicks
function slickGallery() {
  $('.box-gallery__photos-list').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
  })
}
slickGallery();

//Buscando via API as informações do tempo
function timeRequest() {
  $(document).ready(function () {
    $.get("https://api.hgbrasil.com/weather?format=json-cors", function (data) {
      var time = data.results.time;
      var splitTime = time.split(":");
      $('#cityName').html(data.results.city + " - " + data.results.temp + "°");
      $('#date').html(data.results.date + ", " + splitTime[0] + "horas");
      $('#climate').html(data.results.description);
      $('#moisture').html("Umidade " + data.results.humidity + "%");
      $('#wind').html("Vento " + data.results.wind_speedy);
      console.log(data)
    });
  });
}
timeRequest();

//Função para abrir imagem da galeria após clique e fechar após clique fora dela
function openPhoto() {
  $('.box-gallery__photos-list--item').click(function(){
    var imageClicked = $(this).context.children[0].getAttribute('src');
    $('body').append('<div class="overlay"><div class="overlay--banner"><span></span></div></div>');
    $('.overlay').append('<div class="currentImage"><img src="' + imageClicked + '" /></div>');
    $('.overlay--banner').click(function(){
      
      $('.overlay').remove();
    });
  });
}
openPhoto();