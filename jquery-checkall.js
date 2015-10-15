(function($) {
  $.fn.checkAll = function(config) {
    var self = this;
    var settings = $.extend({
      allSelector: null,
      breakAfter: false,
      classes: null,
      id: null,
      label: 'All',
      position: 'before'
    }, config);
    var optionAll = $(settings.allSelector);

    if (!optionAll.length){
      var labelAround = this.parent().is('label');
      var label = $('<label></label>')
        .text(settings.label);

      optionAll = $('<input type="checkbox">')
        .attr('id', settings.id)
        .addClass(settings.classes);

      if (settings.position == 'before'){
        labelAround ? this.first().parent().before(optionAll) : this.first().before(optionAll);
      } else {
        labelAround ? this.last().parent().after(optionAll) : this.last().next().after(optionAll);
      }

      if (labelAround){
        optionAll.replaceWith(label);
        label.prepend(optionAll);
      } else {
        optionAll.after(label);
      }

      if (settings.breakAfter) label.after('<br>');
    }

    optionAll
      .change(function(e){ self.prop('checked', e.target.checked) })
      .prop('checked', checkIfAllGuysAreChecked());

    function checkIfAllGuysAreChecked(){
      for (var i = 0; i < self.length; i++){
        if (!self[i].checked) return false;
      }
      return true;
    }

    return this.change(function(){ optionAll.prop('checked', checkIfAllGuysAreChecked()) });
  };
}(jQuery));