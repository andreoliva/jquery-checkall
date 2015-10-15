(function($) {
  $.fn.createCheckAll = function(options) {
    var list = this.filter('input[type=checkbox]');
    if (!list.length) return this;

    var settings = $.extend({
      allSelector: null,
      breakAfter: false,
      classes: null,
      id: null,
      label: 'All',
      position: 'before'
    }, options);
    var optionAll = $(settings.allSelector).filter('input[type=checkbox]');

    if (!optionAll.length){
      var labelAround = list.parent().is('label');
      var label = $('<label></label>')
        .text(settings.label);

      optionAll = $('<input type="checkbox">')
        .attr('id', settings.id)
        .addClass(settings.classes);

      if (labelAround){
        (settings.position == 'before') ?
          list.first().parent().before(optionAll) :
          list.last().parent().after(optionAll);
        optionAll.replaceWith(label);
        label.prepend(optionAll);
      } else {
        (settings.position == 'before') ?
          list.first().before(optionAll) :
          list.last().next().after(optionAll);
        optionAll.after(label);
      }

      if (settings.breakAfter) label.after('<br>');
    }

    optionAll
      .change(function(e){ list.prop('checked', e.target.checked) })
      .prop('checked', checkIfAllGuysAreChecked());

    list
      .change(function(){ optionAll.prop('checked', checkIfAllGuysAreChecked()) });

    function checkIfAllGuysAreChecked(){
      for (var i = 0; i < list.length; i++){
        if (!list[i].checked) return false;
      }
      return true;
    }

    return this;
  };
}(jQuery));