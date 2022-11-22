$(document).ready(function () {
    const Header = () => {
        // Header
        $(".burger").click(() => {
            $(".burger").toggleClass("active")
            $(".nav__links").toggleClass("active")
            $(".navigation").toggleClass("active")
            $("body").toggleClass("scroll-disabled")
        })
        $("body:has(.navigation)").css("padding-top", "70px")
    }

    const ScrollToTop = () => {
        // Scroll top button
        $(".scroll-top").click(() => {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        })
        window.addEventListener("scroll", (e) => {
            if (window.scrollY == 0) {
                $(".scroll-top").addClass("disappearing")
                $(".scroll-top").removeClass("appearing")
            } else {
                $(".scroll-top").removeClass("disappearing")
                $(".scroll-top").addClass("appearing")
            }
        })
    }
    const Accordion = () => {
        $(".accordion-button").click(function (e) {
            $(e.target).parents(".accordion-item").toggleClass("open")
        })
    }
    const ClickMenu = () => {
        $(document).ready(function () {
            if ($("#test").addEventListener) {
                $("#test").addEventListener(
                    "contextmenu",
                    function (e) {
                        alert("You've tried to open context menu") //here you draw your own menu
                        e.preventDefault()
                    },
                    false
                )
            } else {
                //document.getElementById("test").attachEvent('oncontextmenu', function() {
                //$(".test").bind('contextmenu', function() {
                $("body").on("contextmenu", "a.test", function () {
                    //alert("contextmenu"+event);
                    document.getElementById("rmenu").className = "show"
                    document.getElementById("rmenu").style.top =
                        mouseY(event) + "px"
                    document.getElementById("rmenu").style.left =
                        mouseX(event) + "px"

                    window.event.returnValue = false
                })
            }
        })

        // this is from another SO post...
        $(document).bind("click", function (event) {
            document.getElementById("rmenu").className = "hide"
        })

        function mouseX(evt) {
            if (evt.pageX) {
                return evt.pageX
            } else if (evt.clientX) {
                return (
                    evt.clientX +
                    (document.documentElement.scrollLeft
                        ? document.documentElement.scrollLeft
                        : document.body.scrollLeft)
                )
            } else {
                return null
            }
        }

        function mouseY(evt) {
            if (evt.pageY) {
                return evt.pageY
            } else if (evt.clientY) {
                return (
                    evt.clientY +
                    (document.documentElement.scrollTop
                        ? document.documentElement.scrollTop
                        : document.body.scrollTop)
                )
            } else {
                return null
            }
        }
    }

    const CustomDropdown = () => {
        var x, i, j, l, ll, selElmnt, a, b, c
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select")
        l = x.length
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0]
            ll = selElmnt.length
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV")
            a.setAttribute("class", "select-selected")
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
            x[i].appendChild(a)
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV")
            b.setAttribute("class", "select-items select-hide")
            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
    			create a new DIV that will act as an option item:*/
                c = document.createElement("DIV")
                c.innerHTML = selElmnt.options[j].innerHTML
                c.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
        			and the selected item:*/
                    var y, i, k, s, h, sl, yl
                    s =
                        this.parentNode.parentNode.getElementsByTagName(
                            "select"
                        )[0]
                    sl = s.length
                    h = this.parentNode.previousSibling
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i
                            h.innerHTML = this.innerHTML
                            y =
                                this.parentNode.getElementsByClassName(
                                    "same-as-selected"
                                )
                            yl = y.length
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class")
                            }
                            this.setAttribute("class", "same-as-selected")
                            break
                        }
                    }
                    h.click()
                })
                b.appendChild(c)
            }
            x[i].appendChild(b)
            a.addEventListener("click", function (e) {
                /*when the select box is clicked, close any other select boxes,
      			and open/close the current select box:*/
                e.stopPropagation()
                closeAllSelect(this)
                this.nextSibling.classList.toggle("select-hide")
                this.classList.toggle("select-arrow-active")
            })
        }
        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
  			except the current select box:*/
            var x,
                y,
                i,
                xl,
                yl,
                arrNo = []
            x = document.getElementsByClassName("select-items")
            y = document.getElementsByClassName("select-selected")
            xl = x.length
            yl = y.length
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active")
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide")
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
		then close all select boxes:*/
        document.addEventListener("click", closeAllSelect)
    }
    const Init = () => {
        const ConsoleMessage = `
            Digital Bridges © 2021
        `
        console.log(ConsoleMessage)
        Header()
        ScrollToTop()
        Accordion()
		CustomDropdown()
    }

    Init()
})
