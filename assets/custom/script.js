const modal = document.getElementById("settingModal");
    function showSettingModal()
    {
        // modal.style.display = "block";
    }
    $('.closeModal').on('click', function () {
        modal.style.display = "none";
    });
    $(document).keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == 27) modal.style.display = "none";
    });