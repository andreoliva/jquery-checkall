(function($) {
  $.fn.checkAll = function(config) {
    var self = this;
    var settings = $.extend({
      position: 'before',
      label: 'All',
      id: null,
      classes: null
    }, config);
    var labelAround = this.parent().is('label');
    var optionAll = $('<input type="checkbox">');
    var label = $('<label></label>');

    optionAll.attr('id', settings.id);
    optionAll.addClass(settings.classes);
    if (settings.position == 'before'){
      labelAround ? this.first().parent().before(optionAll) : this.first().before(optionAll);
    } else {
      labelAround ? this.last().parent().after(optionAll) : this.last().after(optionAll);
    }

    if (labelAround){
      optionAll.replaceWith(label);
      label.append(optionAll, ' ' + settings.label);
    } else {
      label.text(settings.label);
      optionAll.after(label);
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

    return this.each(function() {
      $(this)
        .change(function(){
          optionAll.prop('checked', checkIfAllGuysAreChecked());
        });
    });
  };
}(jQuery));