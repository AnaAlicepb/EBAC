$(document).ready(function () {
    $('#formTarefa').submit(function (event) {
        event.preventDefault();

        var nomeTarefa = $('#nomeTarefa').val();

        var listItem = $('<li>' + nomeTarefa + '</li>');
        listItem.click(function () {
            $(this).toggleClass('completed');
        });

        $('#listaTarefas').append(listItem);

        $('#nomeTarefa').val('');
    });
});