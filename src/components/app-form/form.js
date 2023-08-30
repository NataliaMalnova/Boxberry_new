const upload = () => {
    function $id(id) {
        return document.getElementById(id);
    }

    /* вывод сообщений */
    function Output(msg) {
        let m = $id("messages");
        m.innerHTML = msg + m.innerHTML;
    }

    /* проверка поддержки API */
    if (window.File && window.FileList && window.FileReader) {
        Init();
    }
    /* инициализация */
    function Init() {
        let fileselect = $id("fileselect"),
            filedrag = $id("filedrag"),
            submitbutton = $id("submitbutton");

        if (!fileselect || !filedrag || !upload) return;

        /* выбор файла */
        fileselect.addEventListener("change", FileSelectHandler, false);

        /* проверка поддержки XHR2 */
        let xhr = new XMLHttpRequest();
        if (xhr.upload) {
            /* сброс файла */
            filedrag.addEventListener("dragover", FileDragHover, false);
            filedrag.addEventListener("dragleave", FileDragHover, false);
            filedrag.addEventListener("drop", FileSelectHandler, false);
            filedrag.style.display = "flex";

            /* удаление кнопки сабмитта */
            //submitbutton.style.display = "none";
        }
    }

    // Файл над нужной областью
    function FileDragHover(e) {
        e.stopPropagation();
        e.preventDefault();
        e.target.className = (e.type == "dragover" ? "hover" : "");
    }

    // выбор файла
    function FileSelectHandler(e) {
        FileDragHover(e);
        let upload = document.querySelector('.js-form-upload')

        // проходимся по объекту FileList
        var files = e.target.files || e.dataTransfer.files;

        // парсим все объекты типа File
        for (var i = 0, f; f = files[i]; i++) {
            ParseFile(f);
        }
        upload.classList.remove('d-flex');
        upload.classList.add('d-none');
        console.log('123')
        const clear = document.querySelectorAll('.js--ipload-clear');

        if(clear.length != 0) {
            clear.forEach(elem => {
                elem.addEventListener('click', () => {
                    elem.parentElement.remove();
                    upload.classList.add('d-flex');
                    upload.classList.remove('d-none');
                })
            })
        }
    }

    function ParseFile(file) {
        Output(
            "<p class='d-flex align-items-center form-upload--close'>" +
            file.name +
            '<span class="ms-1 svg-block js--ipload-clear"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 1.4L22.6 0L12 10.6L1.40002 0L0 1.4L10.6 12L0 22.6L1.40002 24L12 13.4L22.6 24L24 22.6L13.4 12L24 1.4Z" fill="#BBBBBB"></path>\n' +
            '</svg></span>'+
            "</p>"
        );
    }
}

export {
    upload
}