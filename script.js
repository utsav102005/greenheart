 let btn = document.querySelector(".menu-btn")
        let store = document.querySelector(".menu")
        btn.addEventListener('click', () => {
            store.classList.add("active")
        })

        let btnclose = document.querySelector(".menu-btn-close")
        btnclose.addEventListener('click', () => {
            store.classList.remove("active")
        })
