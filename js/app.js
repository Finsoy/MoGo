$(function () {
  let header = $('#header'),
    introH = $('#intro').innerHeight(),
    scrollOffSet = $(window).scrollTop()

  // Fixed Header
  checkScroll(scrollOffSet)

  $(window).on('scroll', function () {
    scrollOffSet = $(this).scrollTop()
    checkScroll(scrollOffSet)
  })

  function checkScroll(scrollOffSet) {
    console.log(scrollOffSet)
    if (scrollOffSet >= introH) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  }

  // Smooth scroll
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault()

    let $this = $(this),
      blockId = $(this).data('scroll'),
      blockOffSet = $(blockId).offset().top

    $('#nav a').removeClass('active')

    $('html,body').animate(
      {
        scrollTop: blockOffSet,
      },
      500
    )
  })

  //    Menu nav toole

  $('#nav_toggle').on('click', function (event) {
    event.preventDefault()

    $(this).toggleClass('active')
    $('#nav').toggleClass('active')
  })

  //   Collapose
  $('[data-collapse]').on('click', function (event) {
    event.preventDefault

    let $this = $(this),
      blockId = $(this).data('collapse')

    $this.toggleClass('active')
  })

  //   Slider

  $('[data-slider]').slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
})
