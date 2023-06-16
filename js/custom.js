$('input[type=radio]').on('click', function(e) {
    $($(e.target).parents('fieldset')).find('input.next').prop('disabled', false);
});

$('input[type=checkbox]').on('click', function(e) {
    $($(e.target).parents('fieldset')).find('input.next').prop('disabled', false);
});

$('input[type=text]').on('click', function(e) {
    $($(e.target).parents('fieldset')).find('input.next').prop('disabled', false);
});

$('textarea').on('click', function(e) {
    $($(e.target).parents('fieldset')).find('input.next').prop('disabled', false);
});