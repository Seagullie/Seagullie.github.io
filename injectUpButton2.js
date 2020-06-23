function injectUpButton() {
            var html = document.querySelector("html")

            injectionHTML = `<style>
            ._up_button{
                display: inline-block;
                border: 1px solid black;
                padding: 10px;
                border-radius: 10px;
                cursor: pointer;
                user-select: none;
                position: fixed;
                right: 40px;
                bottom: 40px;
            }

            ._up_button:hover{
                color: white;
                background-color: black;
                transition-property: color, background-color;
                transition-duration: .2s;
            }

            ._up_button:active{
                padding: 8px;
            }

            body{
                height: 3000px;
            }
            </style>
            <div class="_up_button">
            Up
            </div>`
            html.insertAdjacentHTML("beforeend", injectionHTML)

            function getRelativePosition() {
                return html.scrollTop / html.scrollHeight
            }

            var _up_button = document.querySelector("._up_button")
            _up_button.onclick = () => {
                getRelativePosition() > 0.6 ? html.scrollTop = 0 : html.scrollTop = html.scrollHeight
            }

            window.onscroll = (e) => {
                getRelativePosition() > 0.6 ? _up_button.innerHTML = 'Up' : _up_button.innerHTML = 'Down'
            }
        }



        injectUpButton()
