$(function(){
  
  var r = Raphael('map', 900, 603),
    attributes = {
      fill: 'transparent',
      stroke: 'transparent',
      'stroke-width': 0,
      'stroke-linejoin': 'round'
    },
    arr = new Array();
  
  for (var hall in paths) {
    
    var obj = r.path(paths[hall].path);
     
    obj.attr(attributes);
    
    arr[obj.id] = hall;
    
    obj
    .hover(function(){
      this.animate({
        fill: '#fff',
        stroke: '#000',
        'stroke-opacity': 1,
        'fill-opacity': 0.5,
        'stroke-width': 3
      }, 300);
    }, function(){
      this.animate({
        fill: attributes.fill
      }, 300);
    })

    .click(function(e){
      $('#' + arr[this.id]).modal().open()
    })

    .mouseover(function(event){
      document.location.hash = arr[this.id];
      
      $('#map').next('.tooltip_map').remove();
      
      $('#map').after($('<div />').addClass('tooltip_map'));
      
      $('.tooltip_map')
      .html(paths[arr[this.id]].name)
      
      .css({
        'left': event.pageX + 5,
        'top': event.pageY + 5
      })

      .fadeIn(800);
    })

    .mouseout(function(){
      $('.tooltip_map').fadeOut(500)
    });
  }

  $('.popup-info .close').on('click', function(e){
    e.preventDefault();
    $.modal().close();
  });

  $(document).mouseup(function (e) {
    var container = $(".popup-info");
    if (container.has(e.target).length === 0){
      $.modal().close();
    }
  });

}); 
    